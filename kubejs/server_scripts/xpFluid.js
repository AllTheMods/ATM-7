onEvent('recipes', event => {
    let fluidList = Fluid.getTypes()
    let xpFluid = []
    fluidList.forEach(id => {
        let flu = Fluid.of(id)
        if (flu.hasTag('forge:experience')) { xpFluid.push(id) }
    })
    xpFluid.sort()
    let woolOrder = [
        'minecraft:orange_wool',
        'minecraft:magenta_wool',
        'minecraft:light_blue_wool',
        'minecraft:yellow_wool',
        'minecraft:lime_wool',
        'minecraft:pink_wool',
        'minecraft:gray_wool',
        'minecraft:light_gray_wool',
        'minecraft:cyan_wool',
        'minecraft:purple_wool',
        'minecraft:blue_wool',
        'minecraft:brown_wool',
        'minecraft:green_wool',
        'minecraft:red_wool',
        'minecraft:black_wool'
    ]
    for (var i in xpFluid) {
        if (Platform.isLoaded('thermal_expansion')) {
            let recipe = {
                type: "thermal:brewer",
                ingredients: [
                    { fluid_tag: "forge:experience", amount: 250 },
                    { item: woolOrder[i] }
                ],
                result: { fluid: xpFluid[i], amount: 250 }
            }
            event.custom(recipe).id(`kubejs:thermal/brewer/xp_conv_${i}`)
        }
        if (Platform.isLoaded('create')) {
            let recipe = {
                type: "create:mixing",
                ingredients: [
                    { fluidTag: "forge:experience", amount: 250 },
                    { item: woolOrder[i] }
                ],
                results: [{ fluid: xpFluid[i], amount: 250 }]
            }
            event.custom(recipe).id(`kubejs:create/mixing/xp_conv_${i}`)
        }
        if (Platform.isLoaded('pneumaticcraft')) {
            let recipe = {
                type: "pneumaticcraft:thermo_plant",
                item_input: { item: woolOrder[i] },
                fluid_input: {
                    type: "pneumaticcraft:fluid",
                    tag: "forge:experience",
                    amount: 250
                },
                fluid_output: { fluid: xpFluid[i], amount: 250 },
                pressure: 2.0,
                speed: 1,
                air_use_multiplier: 1.0,
                exothermic: false
            }
            event.custom(recipe).id(`kubejs:pneumaticcraft/thermo_plant/xp_conv_${i}`)
        }
    }
})