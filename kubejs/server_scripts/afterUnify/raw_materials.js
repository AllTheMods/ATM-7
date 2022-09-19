//priority:550
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes 
onEvent('recipes', event => {
    console.log('Finishing Unifying on Raw Materials')
    let raw_materialTags = global.auTags.filter(function (val) {
        return /forge:raw_materials/.test(val)
    })
    let raw_materialCount = {
        ie: 0,
        thermal: 0
    }
    raw_materialTags.forEach(raw_materialTagString => {
        let material = raw_materialTagString.replace('forge:raw_materials/', '')
        let raw_materialTag = Ingredient.of(`#${raw_materialTagString}`)
        let raw_material = AlmostUnified.getPreferredItemForTag(raw_materialTagString)
        let rawblockTag = Ingredient.of(`#forge:storage_blocks/raw_${material}`)
        if (!rawblockTag.isEmpty()) {
            if (global.loaded.IE_Loaded) {
                // Check if ie metal press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
                    let recipeJson = recipe.json
                    if (raw_materialTag.test(Ingredient.of(recipeJson.get('result')))) {
                        count++
                    }
                })
                if (count == 0) {
                    event.custom({
                        type: 'immersiveengineering:metal_press',
                        mold: 'immersiveengineering:mold_unpacking',
                        input: rawblockTag.toJson(),
                        result: raw_material.withCount(9).toResultJson(),
                        energy: 2400
                    }).id(`kubejs:immersiveengineering/metalpress/raw_material_${material}`)
                    raw_materialCount.ie++
                }
            }
            if (global.loaded.Thermal_Loaded) {
                // Check if thermal multiservo press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'thermal:press' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('result').forEach(item => {
                        if (raw_materialTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'thermal:press',
                        ingredients: [
                            rawblockTag.toJson(),
                            Ingredient.of('thermal:press_unpacking_die').toJson(),
                        ],
                        result: [raw_material.withCount(9).toResultJson()],
                    }).id(`kubejs:thermal/machines/press/unpacking/press_raw_${material}_unpacking`)
                    raw_materialCount.thermal++
                }
            }
        }
    })
    console.log(`Added Raw Material Recipes - IE: ${raw_materialCount.ie}, Thermal: ${raw_materialCount.thermal}`)
})