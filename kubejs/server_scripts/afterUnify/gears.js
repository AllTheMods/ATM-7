//priority:400
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes 
onEvent('recipes', event => {
    console.log('Finishing Unifying on Gears')
    let gearTags = global.auTags.filter(function (val) {
        return /forge:gears/.test(val)
    })
    let gearCount = {
        ftbic: 0,
        ie: 0,
        thermal: 0
    }
    gearTags.forEach(gearTagString => {
        let material = gearTagString.replace('forge:gears/', '')
        let gearTag = Ingredient.of(`#${gearTagString}`)
        let gear = AlmostUnified.getPreferredItemForTag(gearTagString)
        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
        if (ingotTag.isEmpty()) {
            ingotTag = Ingredient.of(`#forge:gems/${material}`)
        }
        if (!ingotTag.isEmpty()) {
            if (global.loaded.IE_Loaded) {
                // Check if ie metal press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
                    let recipeJson = recipe.json
                    if (gearTag.test(Ingredient.of(recipeJson.get('result')))) {
                        count++
                    }
                })
                if (count == 0) {
                    event.custom({
                        type: 'immersiveengineering:metal_press',
                        mold: 'immersiveengineering:mold_gear',
                        input: {
                            count: 4,
                            base_ingredient: ingotTag.toJson()
                        },
                        result: gear.toResultJson(),
                        energy: 2400
                    }).id(`kubejs:immersiveengineering/metalpress/gear_${material}`)
                    gearCount.ie++
                }
            }
            if (global.loaded.Thermal_Loaded) {
                // Check if thermal multiservo press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'thermal:press' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('result').forEach(item => {
                        if (gearTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'thermal:press',
                        ingredients: [
                            ingotTag.withCount(4).toJson(),
                            Ingredient.of('thermal:press_gear_die').toJson(),
                        ],
                        result: [gear.toResultJson()],
                    }).id(`kubejs:thermal/machines/press/press_${material}_ingot_to_gear`)
                    gearCount.thermal++
                }
            }
        }
        if (global.loaded.FTBIC_Loaded) {
            let plateTag = Ingredient.of(`#forge:plates/${material}`)
            if (!plateTag.isEmpty()) {
                // Check if ftbic extruding recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'ftbic:extruding' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('outputItems').forEach(item => {
                        if (gearTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'ftbic:extruding',
                        inputItems: [{ "count": 4, "ingredient": plateTag.toJson() }],
                        outputItems: [gear.withCount(1).toResultJson()]
                    }).id(`kubejs:ftbic/extruding/ingots/${material}_to_${material}_gear`)
                    gearCount.ftbic++
                }
            }
        }
    })
    console.log(`Added Gear Recipes - FTBIC: ${gearCount.ftbic}, IE: ${gearCount.ie}, Thermal: ${gearCount.thermal}`)
})