//priority:500
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes 
onEvent('recipes', event => {
    console.log('Finishing Unifying on Plates')
    let plateTags = global.auTags.filter(function (val) {
        return /forge:plates/.test(val)
    })
    let plateCount = {
        create: 0,
        ftbic: 0,
        ie: 0,
        thermal: 0
    }
    plateTags.forEach(plateTagString => {
        let material = plateTagString.replace('forge:plates/', '')
        if (material == 'obsidian') { return }
        let plateTag = Ingredient.of(`#${plateTagString}`)
        let plate = AlmostUnified.getPreferredItemForTag(plateTagString)
        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
        if (ingotTag.isEmpty()) {
            ingotTag = Ingredient.of(`#forge:gems/${material}`)
        }
        if (!ingotTag.isEmpty()) {
            if (global.loaded.Create_Loaded) {
                // Check if create press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'create:pressing' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('results').forEach(item => {
                        if (plateTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'create:pressing',
                        ingredients: [ingotTag.toJson()],
                        results: [plate.withCount(1).toResultJson()]
                    }).id(`kubejs:create/pressing/${material}_ingot`)
                    plateCount.create++
                }
            }
            if (global.loaded.FTBIC_Loaded) {
                // Check if ftbic rolling recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'ftbic:rolling' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('outputItems').forEach(item => {
                        if (plateTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'ftbic:rolling',
                        inputItems: [{ "count": 1, "ingredient": ingotTag.toJson() }],
                        outputItems: [plate.withCount(1).toResultJson()]
                    }).id(`kubejs:ftbic/rolling/ingots/${material}_to_${material}_plate`)
                    plateCount.ftbic++
                }
            }
            if (global.loaded.IE_Loaded) {
                // Check if ie metal press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
                    let recipeJson = recipe.json
                    if (plateTag.test(Ingredient.of(recipeJson.get('result')))) {
                        count++
                    }
                })
                if (count == 0) {
                    event.custom({
                        type: 'immersiveengineering:metal_press',
                        mold: 'immersiveengineering:mold_plate',
                        input: ingotTag.toJson(),
                        result: plate.toResultJson(),
                        energy: 2400
                    }).id(`kubejs:immersiveengineering/metalpress/plate_${material}`)
                    plateCount.ie++
                }
            }
            if (global.loaded.Thermal_Loaded) {
                // Check if thermal multiservo press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'thermal:press' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('result').forEach(item => {
                        if (plateTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'thermal:press',
                        ingredient: ingotTag.toJson(),
                        result: [plate.toResultJson()],
                    }).id(`kubejs:thermal/machines/press/press_${material}_ingot_to_plate`)
                    plateCount.thermal++
                }
            }
        }
    })
    console.log(`Added Plate Recipes - Create: ${plateCount.create}, FTBIC: ${plateCount.ftbic}, IE: ${plateCount.ie}, Thermal: ${plateCount.thermal}`)
})