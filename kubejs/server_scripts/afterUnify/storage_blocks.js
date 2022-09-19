//priority:600
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes 
onEvent('recipes', event => {
    console.log('Finishing Unifying on Storage Blocks')
    let storageTags = global.auTags.filter(function (val) {
        return /forge:storage_blocks/.test(val)
    })
    let storageCount = {
        ie: 0,
        thermal: 0
    }
    storageTags.forEach(storageTagString => {
        let material = storageTagString.replace('forge:storage_blocks/', '')
        let raw = false
        if (/raw_/.test(material)) {
            raw = true
            material = material.replace('raw_','')
        }
        let storageTag = Ingredient.of(`#${storageTagString}`)
        let storage = AlmostUnified.getPreferredItemForTag(storageTagString)
        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
        if (ingotTag.isEmpty()) {
            ingotTag = Ingredient.of(`#forge:gems/${material}`)
        }
        if (raw) {
            ingotTag = Ingredient.of(`#forge:raw_materials/${material}`)
        }
        if (!ingotTag.isEmpty()) {
            if (global.loaded.IE_Loaded) {
                // Check if ie metal press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
                    let recipeJson = recipe.json
                    if (storageTag.test(Ingredient.of(recipeJson.get('result')))) {
                        count++
                    }
                })
                if (count == 0) {
                    event.custom({
                        type: 'immersiveengineering:metal_press',
                        mold: 'immersiveengineering:mold_packing_9',
                        input: {
                            count: 9,
                            base_ingredient: ingotTag.toJson()
                        },
                        result: storage.toResultJson(),
                        energy: 2400
                    }).id(`kubejs:immersiveengineering/metalpress/packing3x3/${raw ? 'raw_':''}${material}`)
                    storageCount.ie++
                }
            }
            if (global.loaded.Thermal_Loaded) {
                // Check if thermal multiservo press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'thermal:press' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('result').forEach(item => {
                        if (storageTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'thermal:press',
                        ingredients: [
                            ingotTag.withCount(9).toJson(),
                            Ingredient.of('thermal:press_packing_3x3_die').toJson(),
                        ],
                        result: [storage.toResultJson()],
                    }).id(`kubejs:thermal/machines/press/packing3x3/press_${raw ? 'raw_':''}${material}_packing`)
                    storageCount.thermal++
                }
            }
        }
    })
    console.log(`Added Raw Block Recipes - IE: ${storageCount.ie}, Thermal: ${storageCount.thermal}`)
})