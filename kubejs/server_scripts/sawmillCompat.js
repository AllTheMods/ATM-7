// known tag fixes
onEvent('tags.items', e => {
    if (Platform.isLoaded('allthemodium')) {
        e.add('allthemodium:ancient_logs', ['allthemodium:ancient_log_0', 'allthemodium:ancient_log_1', 'allthemodium:ancient_log_2', 'allthemodium:stripped_ancient_log'])
        e.add('allthemodium:demonic_logs', ['allthemodium:demonic_log', 'allthemodium:stripped_demonic_log'])
        e.add('allthemodium:soul_logs', ['allthemodium:soul_log', 'allthemodium:soul_log_0', 'allthemodium:soul_log_1', 'allthemodium:soul_log_2', 'allthemodium:stripped_soul_log'])
    }
    if (Platform.isLoaded('hexerei')) {
        e.add('hexerei:mahogany_logs', ['hexerei:mahogany_log', 'hexerei:mahogany_wood', 'hexerei:stripped_mahogany_log', 'hexerei:stripped_mahogany_wood'])
        e.add('hexerei:willow_logs', ['hexerei:willow_log', 'hexerei:willow_wood', 'hexerei:stripped_willow_log', 'hexerei:stripped_willow_wood'])
    }
    if (Platform.isLoaded('naturesaura')) {
        e.add('naturesaura:ancient_logs', ['naturesaura:ancient_log', 'naturesaura:ancient_bark'])
    }
})

onEvent('recipes', e => {
    let CorailWoodcutterLoaded = Platform.isLoaded('corail_woodcutter')
    let ImmersiveEngineeringLoaded = Platform.isLoaded('immersiveengineering')
    let IE_KubeJS = Platform.isLoaded('kubejs_immersive_engineering')
    let MekanismLoaded = Platform.isLoaded('mekanism')
    let Mek_KubeJS = Platform.isLoaded('kubejs_mekanism')
    let CreateLoaded = Platform.isLoaded('create')
    let Create_KubeJS = Platform.isLoaded('kubejs_create')
    let ThermalExpansionLoaded = Platform.isLoaded('thermal_expansion')
    let Thermal_KubeJS = Platform.isLoaded('kubejs_thermal')

    function processInfo(input) {
        let inTag = input.tag.toString().split(":")
        let inMod = inTag[0]
        if (inMod == 'forge') {
            let inLogs = Ingredient.of(input).stacks
            inMod = inLogs[0].mod
        }
        let inLog = inTag[1].split('_')
        let prefix = "null"
        if (inLog.length == 2) {
            prefix = inLog[0]
        } else if (inLog.length > 2) {
            prefix = inLog.slice(0, -1).join('_')
        } else if (inLog[0].contains('logs/')) {
            prefix = inLog[0].split("/")[1]
        }
        return [inMod, prefix];
    }

    function addRecipeCorailWoodCutting(input, output, count, id) {
        e.custom({
            type: "corail_woodcutter:woodcutting",
            ingredient: input,
            result: output,
            count: count
        }).id(id)
        return;
    }

    function addCorailWoodcutter(input, output) {
        let corail = {
            boat: { planks: 0, logs: 1 },
            button: { planks: 1, logs: 4 },
            door: { planks: 1, logs: 4 },
            fence: { planks: 1, logs: 4 },
            fence_gate: { planks: 0, logs: 1 },
            planks: { planks: 0, logs: 4 },
            pressure_plate: { planks: 1, logs: 4 },
            slab: { planks: 2, logs: 8 },
            stairs: { planks: 1, logs: 4 },
            trapdoor: { planks: 1, logs: 4 }
        };
        if (e.countRecipes({ type: "corail_woodcutter:woodcutting", input: input }) > 3) {
            return;
        }
        let parsed = processInfo(input)
        let outMod = output.mod
        let outPrefix = output.item.toString().slice(0, -7);
        ['boat', 'button', 'door', 'fence', 'fence_gate', 'planks', 'pressure_plate', 'slab', 'stairs', 'trapdoor'].forEach(item => {
            let outItem = `${outMod}:${outPrefix}_${item}`
            if (Item.of(outItem).isEmpty()) {
                if (outMod == 'allthemodium') {
                    if (item == 'slab') {
                        outItem = `${outMod}:${outPrefix}_wooden_${item}s`
                    } else if (item == 'trapdoor') {
                        outItem = `${outMod}:${outPrefix}_trap_door`
                    } else {
                        outItem = `${outMod}:${outPrefix}_wooden_${item}`
                    }
                    if (Item.of(outItem).isEmpty()) { return; }
                } else {
                    return;
                }
            }
            let outCount = corail[item].logs * (output.count / 4)
            if (outCount < 1) { return; }
            addRecipeCorailWoodCutting(input, outItem, outCount, `kubejs:woodcutting/${parsed[0]}/${outPrefix}_${item}_from_${parsed[1]}_log`)
            outCount = corail[item].planks * (output.count / 4)
            if (outCount < 1 || parsed[0] != outMod) { return; }
            addRecipeCorailWoodCutting(output, outItem, outCount, `kubejs:woodcutting/${parsed[0]}/${outPrefix}_${item}_from_${parsed[1]}_planks`)
        })
        return;
    }

    function addMekanismSawing(input, output) {
        let mekoutput = output.copy()
        mekoutput.count = 1.5 * mekoutput.count
        let parsed = processInfo(input)
        let id = `kubejs:sawing/${parsed[0]}/log/${parsed[1]}`
        if (Mek_KubeJS) {
            if (e.countRecipes({ type: 'mekanism:sawing', input: input }) > 0) {
                return;
            }
            e.recipes.mekanismSawing(mekoutput, input, Item.of('mekanism:sawdust').withChance(1.5 / mekoutput.count)).id(id)
        } else {
            if (parsed[0] == 'minecraft') {
                if (e.countRecipes({ type: 'mekanism:sawing', id: `/log\/${parsed[1]}/` }) > 0) {
                    return;
                }
            } else {
                if (e.countRecipes({ type: 'mekanism:sawing', id: `/${parsed[0]}\/sawing\/log\/${parsed[1]}/` }) > 0) {
                    return;
                }
            }
            e.custom({
                "type": "mekanism:sawing",
                "input": { "ingredient": input },
                "mainOutput": mekoutput,
                "secondaryOutput": {
                    "tag": "forge:dusts/wood"
                },
                "secondaryChance": 1.5 / mekoutput.count
            }).id(id)
        }
    }

    function addRecipeImmersiveEngineeringSawmill(input, output, secondary, stripped, energy, id) {
        e.custom({
            "type": "immersiveengineering:sawmill",
            "secondaries": secondary,
            "result": output,
            "energy": energy,
            "input": input,
            "stripped": stripped
        }).id(id)
    }

    function addRecipeImmersiveEngineeringSawmillStripped(input, output, secondary, energy, id) {
        e.custom({
            "type": "immersiveengineering:sawmill",
            "secondaries": secondary,
            "result": output,
            "input": input,
            "energy": energy
        }).id(id)
    }

    function addImmersiveEngineeringSawing(input, output) {
        let ieoutput = output.copy()
        ieoutput.count = 1.5 * ieoutput.count
        let parsed = processInfo(input)
        if (IE_KubeJS) {
            if (e.countRecipes({ type: 'immersiveengineering:sawmill', input: input }) > 0) { return; }
        } else {
            if (e.countRecipes({ type: 'immersiveengineering:sawmill', id: `/sawmill\/${parsed[1]}_log/` }) > 0) { return; }
        }
        let id1 = `kubejs:sawmill/${parsed[0]}/${parsed[1]}_log`
        let id2 = `kubejs:sawmill/${parsed[0]}/stripped_${parsed[1]}_log`
        let secondary1 = [
            { "output": { "tag": "forge:dusts/wood" }, "stripping": false },
            { "output": { "tag": "forge:dusts/wood" }, "stripping": true }
        ]
        let secondary2 = [{ "output": { "tag": "forge:dusts/wood" }, "stripping": false }]
        let tag = Ingredient.of(input).stacks
        let logs = []
        let stripped = []
        tag.forEach(wood => {
            if (wood.toString().contains('stripped')) {
                stripped.push(wood)
            } else {
                logs.push(wood)
            }
        })
        if (stripped.length == 0) {
            if (IE_KubeJS) {
                e.recipes.immersiveengineeringSawmill(ieoutput, logs, secondary2).energy(800).id(id2)
            } else {
                addRecipeImmersiveEngineeringSawmillStripped(logs, ieoutput, secondary2, 800, id2)
            }
        } else if (parsed[0] == 'ars_nouveau') {
            ['red', 'blue', 'purple', 'green'].forEach(color => {
                let logs2 = []
                logs.forEach(log => {
                    if (log.toString().contains(color)) { logs2.push(log) }
                })
                let stripped2 = []
                stripped.forEach(log => {
                    if (log.toString().contains(color)) { stripped2.push(log) }
                })
                let id1 = `kubejs:sawmill/${parsed[0]}/${color}_${parsed[1]}_log`
                let id2 = `kubejs:sawmill/${parsed[0]}/stripped_${color}_${parsed[1]}_log`
                if (IE_KubeJS) {
                    e.recipes.immersiveengineeringSawmill(ieoutput, logs2, secondary1, stripped2[0]).energy(1600).id(id1)
                    e.recipes.immersiveengineeringSawmill(ieoutput, stripped2, secondary2).energy(800).id(id2)
                } else {
                    addRecipeImmersiveEngineeringSawmill(logs2, ieoutput, secondary1, stripped2[0], 1600, id1)
                    addRecipeImmersiveEngineeringSawmillStripped(stripped2, ieoutput, secondary2, 800, id2)
                }
            })
        } else {
            if (IE_KubeJS) {
                e.recipes.immersiveengineeringSawmill(ieoutput, logs, secondary1, stripped[0]).energy(1600).id(id1)
                e.recipes.immersiveengineeringSawmill(ieoutput, stripped, secondary2).energy(800).id(id2)
            } else {
                addRecipeImmersiveEngineeringSawmill(logs, ieoutput, secondary1, stripped[0], 1600, id1)
                addRecipeImmersiveEngineeringSawmillStripped(stripped, ieoutput, secondary2, 800, id2)
            }
        }
    }

    function addRecipeCreateCutting(input, output, time, id) {
        e.custom({
            "type": "create:cutting",
            "ingredients": input,
            "results": output,
            "processingTime": time
        }).id(id)
    }

    function addCreateCutting(input, output) {
        let createOutput = output.copy()
        createOutput.count = 1.5 * createOutput.count
        let parsed = processInfo(input)
        let id1 = `kubejs:cutting/${parsed[0]}/${parsed[1]}_log`
        let id2 = `kubejs:cutting/${parsed[0]}/stripped_${parsed[1]}_log`
        if (Create_KubeJS) {
            if (e.countRecipes({ type: 'create:cutting', input: input }) > 0) { return; }
        } else {
            if (e.countRecipes({ type: 'create:cutting', id: `/cutting\/${parsed[1]}_[log|stem]/` }) > 0) { return; }
        }
        let tag = Ingredient.of(input).stacks
        let logs = []
        let stripped = []
        tag.forEach(wood => {
            if (wood.toString().contains('stripped')) {
                stripped.push(wood)
            } else {
                logs.push(wood)
            }
        })
        if (stripped.length == 0) {
            if (Create_KubeJS) {
                e.recipes.createCutting(createOutput, logs).processingTime(50).id(id1)
            } else {
                addRecipeCreateCutting(logs, [createOutput], 50, id1)
            }
        } else if (stripped.length == 1) {
            if (Create_KubeJS) {
                e.recipes.createCutting(stripped, logs).processingTime(50).id(id1)
                e.recipes.createCutting(createOutput, stripped).processingTime(50).id(id2)
            } else {
                addRecipeCreateCutting(logs, stripped, 50, id1)
                addRecipeCreateCutting(stripped, [createOutput], 50, id2)
            }
        } else {
            if (Create_KubeJS) {
                e.recipes.createCutting(createOutput, stripped).processingTime(50).id(id2)
            } else {
                addRecipeCreateCutting(stripped, [createOutput], 50, id2)
            }
            logs.forEach(log => {
                let logitem = log.item.toString()
                stripped.forEach(strip => {
                    let match = `stripped_${logitem}`
                    if (parsed[0] == 'botania' && logitem.contains('glimmering')) {
                        match = `glimmering_stripped_${logitem.slice(11)}`
                    }
                    if (strip.item.toString() == match) {
                        if (Create_KubeJS) {
                            e.recipes.createCutting(strip, log).processingTime(50).id(`kubejs:cutting/${parsed[0]}/${logitem}`)
                        } else {
                            addRecipeCreateCutting([log], [strip], 50, `kubejs:cutting/${parsed[0]}/${logitem}`)
                        }
                    }
                })
            })
        }
    }

    function addThermalSawing(input, output) {
        let thermalOutput = output.copy()
        thermalOutput.count = 1.5 * thermalOutput.count
        let parsed = processInfo(input)
        let id = `kubejs:thermal/sawmill/${parsed[0]}/${parsed[1]}_log`
        if (Thermal_KubeJS) {
            if (e.countRecipes({ type: 'thermal:sawmill', input: input }) > 0) { return; }
            e.recipes.thermal.sawmill([thermalOutput, Item.of(`#forge:dusts/wood`).withChance(1.25)], input).energy(1000).id(id)
        } else {
            let found = false
            e.forEachRecipe({type: 'thermal:sawmill'}, recipe => {
                recipeId = recipe.getId()
                regex = new RegExp(`${parsed[1]}_[log|stem]`)
                if (regex.test(recipeId)) {
                    if (parsed[0] == 'minecraft') {
                        found = true
                        return;
                    }
                    regex2 = new RegExp(parsed[0])
                    if (regex2.test(recipeId)) {
                        found = true
                    }
                }
            })
            if (found) {return;}
            e.custom({
                "type": "thermal:sawmill",
                "ingredient": input,
                "result": [
                    thermalOutput,
                    Item.of(`#forge:dusts/wood`).withChance(1.25)
                    ],
                "energy": 1000,
            }).id(id)
        }
    }

    let planks = Ingredient.of('#minecraft:planks').stacks
    planks.forEach(plank => {
        if (plank.getMod() === 'chipped') {
            return;
        }
        e.forEachRecipe({ type: 'minecraft:crafting_shapeless', output: plank }, recipe => {
            let inputIngredient = recipe.inputItems[0]
            if (inputIngredient.tag === undefined) {
                return;
            }
            let outputItem = recipe.outputItems[0]
            if (CorailWoodcutterLoaded) {
                addCorailWoodcutter(inputIngredient, outputItem)
            }
            if (MekanismLoaded) {
                addMekanismSawing(inputIngredient, outputItem)
            }
            if (ImmersiveEngineeringLoaded) {
                addImmersiveEngineeringSawing(inputIngredient, outputItem)
            }
            if (CreateLoaded) {
                addCreateCutting(inputIngredient, outputItem)
            }
            if(ThermalExpansionLoaded) {
                addThermalSawing(inputIngredient, outputItem)
            }
        });
    });

    let customOut = {
        "naturesaura:ancient": 2
    };
    // fix plank recipes we added tags to
    let customWoods = []
    if (Platform.isLoaded('allthemodium')) {
        customWoods = customWoods.concat(['allthemodium:ancient', 'allthemodium:demonic', 'allthemodium:soul'])
    }
    if (Platform.isLoaded('hexerei')) {
        customWoods = customWoods.concat(['hexerei:mahogany', 'hexerei:willow'])
    }
    if (Platform.isLoaded('naturesaura')) {
        customWoods = customWoods.concat(['naturesaura:ancient'])
    }
    customWoods.forEach(wood => {
        e.remove({ type: 'minecraft:crafting_shapeless', output: `${wood}_planks` })
        e.shapeless(`${customOut[wood] ?? '4'}x ${wood}_planks`, [`#${wood}_logs`])
        if (CorailWoodcutterLoaded) {
            addCorailWoodcutter(Ingredient.of(`#${wood}_logs`), Ingredient.of(`${wood}_planks`).withCount(`${customOut[wood] ?? '4'}`))
        }
        if (MekanismLoaded) {
            addMekanismSawing(Ingredient.of(`#${wood}_logs`), Ingredient.of(`${wood}_planks`).withCount(`${customOut[wood] ?? '4'}`))
        }
        if (ImmersiveEngineeringLoaded) {
            addImmersiveEngineeringSawing(Ingredient.of(`#${wood}_logs`), Ingredient.of(`${wood}_planks`).withCount(`${customOut[wood] ?? '4'}`))
        }
        if (CreateLoaded) {
            addCreateCutting(Ingredient.of(`#${wood}_logs`), Ingredient.of(`${wood}_planks`).withCount(`${customOut[wood] ?? '4'}`))
        }
        if (ThermalExpansionLoaded) {
            addThermalSawing(Ingredient.of(`#${wood}_logs`), Ingredient.of(`${wood}_planks`).withCount(`${customOut[wood] ?? '4'}`))
        }
    })

})