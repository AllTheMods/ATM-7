//priority:450
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes 
onEvent('recipes', event => {
    console.log('Finishing Unifying on Rods')
    let rodTags = global.auTags.filter(function (val) {
        return /forge:rods/.test(val)
    })
    let rodCount = {
        create: 0,
        ftbic: 0,
        ie: 0,
        thermal: 0
    }
    rodTags.forEach(rodTagString => {
        let material = rodTagString.replace('forge:rods/', '')
        let rodTag = Ingredient.of(`#${rodTagString}`)
        let rod = AlmostUnified.getPreferredItemForTag(rodTagString)
        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
        if (ingotTag.isEmpty()) {
            ingotTag = Ingredient.of(`#forge:gems/${material}`)
        }
        if (!ingotTag.isEmpty()) {
            if (global.loaded.CreateAdd_Loaded) {
                // Check if create additions rolling recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'createaddition:rolling' }, recipe => {
                    let recipeJson = recipe.json
                    if (rodTag.test(Ingredient.of(recipeJson.get('result')))) {
                        count++
                    }
                })
                if (count == 0) {
                    event.custom({
                        type: 'createaddition:rolling',
                        input: ingotTag.toJson(),
                        result: rod.withCount(2).toResultJson()
                    }).id(`kubejs:createaddition/rolling/${material}_ingot`)
                    rodCount.create++
                }
            }
            if (global.loaded.FTBIC_Loaded) {
                // Check if ftbic extruding recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'ftbic:extruding' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('outputItems').forEach(item => {
                        if (rodTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'ftbic:extruding',
                        inputItems: [{ "count": 1, "ingredient": ingotTag.toJson() }],
                        outputItems: [rod.withCount(2).toResultJson()]
                    }).id(`kubejs:ftbic/extruding/ingots/${material}_to_${material}_rod`)
                    rodCount.ftbic++
                }
            }
            if (global.loaded.IE_Loaded) {
                // Check if ie metal press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
                    let recipeJson = recipe.json
                    let result = recipeJson.get('result')
                    if (rodTag.test(Ingredient.of(result.get('base_ingredient')))) {
                        count++
                    }
                })
                if (count == 0) {
                    event.custom({
                        type: 'immersiveengineering:metal_press',
                        mold: 'immersiveengineering:mold_rod',
                        input: ingotTag.toJson(),
                        result: {
                            count: 2,
                            base_ingredient: rod.toResultJson()
                        },
                        energy: 2400
                    }).id(`kubejs:immersiveengineering/metalpress/rod_${material}`)
                    rodCount.ie++
                }
            }
            /*
            if (global.loaded.Thermal_Loaded) {
                // add blast chiller recipes? cross check with tconstruct
            }*/
        }
    })
    console.log(`Added Rod Recipes - CreateAdditions: ${rodCount.create}, FTBIC: ${rodCount.ftbic}, IE: ${rodCount.ie}, Thermal: ${rodCount.thermal}`)
})