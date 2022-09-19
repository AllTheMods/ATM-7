//priority:350
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes 
onEvent('recipes', event => {
    console.log('Finishing Unifying on Wires')
    let wireTags = global.auTags.filter(function (val) {
        return /forge:wires/.test(val)
    })
    let wireCount = {
        create: 0,
        ftbic: 0,
        ie: 0,
        thermal: 0
    }
    wireTags.forEach(wireTagString => {
        let material = wireTagString.replace('forge:wires/', '')
        let wireTag = Ingredient.of(`#${wireTagString}`)
        let wire = AlmostUnified.getPreferredItemForTag(wireTagString)
        if (global.loaded.CreateAdd_Loaded) {
            let plateTag = Ingredient.of(`#forge:plates/${material}`)
            if (!plateTag.isEmpty()) {
                // Check if create additions rolling recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'createaddition:rolling' }, recipe => {
                    let recipeJson = recipe.json
                    if (wireTag.test(Ingredient.of(recipeJson.get('result')))) {
                        count++
                    }
                })
                if (count == 0) {
                    event.custom({
                        type: 'createaddition:rolling',
                        input: plateTag.toJson(),
                        result: wire.withCount(2).toResultJson()
                    }).id(`kubejs:createaddition/rolling/${material}_plate`)
                    wireCount.create++
                }
            }
        }
        if (global.loaded.FTBIC_Loaded) {
            let rodTag = Ingredient.of(`#forge:rods/${material}`)
            if (!rodTag.isEmpty()) {
                // Check if ftbic extruding recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'ftbic:extruding' }, recipe => {
                    let recipeJson = recipe.json
                    recipeJson.get('outputItems').forEach(item => {
                        if (wireTag.test(Item.of(item))) {
                            count++
                        }
                    })
                })
                if (count == 0) {
                    event.custom({
                        type: 'ftbic:extruding',
                        inputItems: [{ "count": 1, "ingredient": rodTag.toJson() }],
                        outputItems: [wire.withCount(2).toResultJson()]
                    }).id(`kubejs:ftbic/extruding/rods/${material}_to_${material}_wire`)
                    wireCount.ftbic++
                }
            }
        }
        if (global.loaded.IE_Loaded) {
            let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
            if (!ingotTag.isEmpty()) {
                // Check if ie metal press recipe exists and add it if not
                let count = 0
                event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
                    let recipeJson = recipe.json
                    let result = recipeJson.get('result')
                    if (wireTag.test(Ingredient.of(result.get('base_ingredient')))) {
                        count++
                    }
                })
                if (count == 0) {
                    event.custom({
                        type: 'immersiveengineering:metal_press',
                        mold: 'immersiveengineering:mold_wire',
                        input: ingotTag.toJson(),
                        result: {
                            count: 2,
                            base_ingredient: wire.toResultJson()
                        },
                        energy: 2400
                    }).id(`kubejs:immersiveengineering/metalpress/wire_${material}`)
                    wireCount.ie++
                }
            }
        }

    })
    console.log(`Added Wire Recipes - CreateAdditions: ${wireCount.create}, FTBIC: ${wireCount.ftbic}, IE: ${wireCount.ie}`)
})

onEvent('tags.items', event => {
    event.add('forge:wires/aluminum', 'ftbic:aluminum_wire')
    event.add('forge:wires/copper', 'ftbic:copper_wire')
    event.add('forge:wires/gold', 'ftbic:gold_wire')
    event.add('forge:wires/enderium', 'ftbic:enderium_wire')
})