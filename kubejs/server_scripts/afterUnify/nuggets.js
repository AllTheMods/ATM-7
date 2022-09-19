//priority:650
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes 
onEvent('recipes', event => {
    console.log('Finishing Unifying on Nuggets')
    let nuggetTags = global.auTags.filter(function (val) {
        return /forge:nuggets/.test(val)
    })
    let nuggetCount = {
        ie: 0,
        thermal: 0
    }
    nuggetTags.forEach(nuggetTagString => {
        let material = nuggetTagString.replace('forge:nuggets/', '')
        let nuggetTag = Ingredient.of(`#${nuggetTagString}`)
        let nugget = AlmostUnified.getPreferredItemForTag(nuggetTagString)
        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
        if (!ingotTag.isEmpty()) {
            if (global.loaded.IE_Loaded) {
                // Check if ie metal press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
                    let recipeJson = recipe.json
                    if (nuggetTag.test(Ingredient.of(recipeJson.get('result')))) {
                        count++
                    }
                })
                if (count == 0) {
                    event.custom({
                        type: 'immersiveengineering:metal_press',
                        mold: 'immersiveengineering:mold_unpacking',
                        input: ingotTag.toJson(),
                        result: nugget.withCount(9).toResultJson(),
                        energy: 2400
                    }).id(`kubejs:immersiveengineering/metalpress/unpacking/nugget_${material}`)
                    nuggetCount.ie++
                }
            }
            if (global.loaded.Thermal_Loaded) {
                // Check if thermal multiservo press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'thermal:press' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('result').forEach(item => {
                        if (nuggetTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'thermal:press',
                        ingredients: [
                            ingotTag.toJson(),
                            Ingredient.of('thermal:press_unpacking_die').toJson(),
                        ],
                        result: [nugget.withCount(9).toResultJson()],
                    }).id(`kubejs:thermal/machines/press/unpacking/press_${material}_nugget_unpacking`)
                    nuggetCount.thermal++
                }
            }
        }
    })
    console.log(`Added Nugget Recipes - IE: ${nuggetCount.ie}, Thermal: ${nuggetCount.thermal}`)
})