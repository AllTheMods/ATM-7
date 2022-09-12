onEvent('recipes', e => {
    function gardenTier1(crop, soil, qte) { e.custom({ "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:" + crop + "_seeds" }, "soil": { "item": soil }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:" + crop + "_crop" }, "results": [{ "item": "mysticalagriculture:" + crop + "_essence", "count": qte }, { "item": "mysticalagriculture:fertilized_essence", "count": 1 }] }) }
    var cropT1 = [
        "inferium",
        "air",
        "earth",
        "fire",
        "water",
        "dirt",
        "wood",
        "ice",
        "stone",
        "deepslate"
    ]
    cropT1.forEach(C => { gardenTier1(C, "mysticalagriculture:inferium_farmland", 2) })
    cropT1.forEach(C => { gardenTier1(C, "mysticalagriculture:prudentium_farmland", 3) })
    cropT1.forEach(C => { gardenTier1(C, "mysticalagriculture:tertium_farmland", 4) })
    cropT1.forEach(C => { gardenTier1(C, "mysticalagriculture:imperium_farmland", 5) })
    cropT1.forEach(C => { gardenTier1(C, "mysticalagriculture:supremium_farmland", 6) })
    cropT1.forEach(C => { gardenTier1(C, "mysticalagradditions:insanium_farmland", 7) })
    cropT1.forEach(C => { gardenTier1(C, "kubejs:magical_soil", 8) })

    function gardenTier2(crop, soil, qte) { e.custom({ "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:" + crop + "_seeds" }, "soil": { "item": soil }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:" + crop + "_crop" }, "results": [{ "item": "mysticalagriculture:" + crop + "_essence", "count": qte }, { "item": "mysticalagriculture:fertilized_essence", "count": 1 }] }) }
    var cropT2 = [
        "aluminum",
        "chicken",
        "coal",
        "copper",
        "coral",
        "cow",
        "dye",
        "fish",
        "honey",
        "nature",
        "nether",
        "pig",
        "saltpeter",
        "sheep",
        "slime",
        "squid",
        "turtle",
        "amethyst",
        "silicon",
        "sulfur",
        "mystical_flower",
        "limestone",
        "menril"
    ]
    cropT2.forEach(C => { gardenTier2(C, "mysticalagriculture:prudentium_farmland", 3) })
    cropT2.forEach(C => { gardenTier2(C, "mysticalagriculture:tertium_farmland", 4) })
    cropT2.forEach(C => { gardenTier2(C, "mysticalagriculture:imperium_farmland", 5) })
    cropT2.forEach(C => { gardenTier2(C, "mysticalagriculture:supremium_farmland", 6) })
    cropT2.forEach(C => { gardenTier2(C, "mysticalagradditions:insanium_farmland", 7) })
    cropT2.forEach(C => { gardenTier2(C, "kubejs:magical_soil", 8) })

    function gardenTier3(crop, soil, qte) { e.custom({ "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:" + crop + "_seeds" }, "soil": { "item": soil }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:" + crop + "_crop" }, "results": [{ "item": "mysticalagriculture:" + crop + "_essence", "count": qte }, { "item": "mysticalagriculture:fertilized_essence", "count": 1 }] }) }
    var cropT3 = [
        "certus_quartz",
        "creeper",
        "glowstone",
        "iron",
        "lead",
        "nether_quartz",
        "obsidian",
        "prismarine",
        "rabbit",
        "redstone",
        "silver",
        "skeleton",
        "spider",
        "tin",
        "zinc",
        "zombie",
        "crimson_iron",
        "azure_silver",
        "sky_stone",
        "amethyst_bronze"
    ]
    cropT3.forEach(C => { gardenTier3(C, "mysticalagriculture:tertium_farmland", 4) })
    cropT3.forEach(C => { gardenTier3(C, "mysticalagriculture:imperium_farmland", 5) })
    cropT3.forEach(C => { gardenTier3(C, "mysticalagriculture:supremium_farmland", 6) })
    cropT3.forEach(C => { gardenTier3(C, "mysticalagradditions:insanium_farmland", 7) })
    cropT3.forEach(C => { gardenTier3(C, "kubejs:magical_soil", 8) })

    function gardenTier4(crop, soil, qte) { e.custom({ "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:" + crop + "_seeds" }, "soil": { "item": soil }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:" + crop + "_crop" }, "results": [{ "item": "mysticalagriculture:" + crop + "_essence", "count": qte }, { "item": "mysticalagriculture:fertilized_essence", "count": 1 }] }) }
    var cropT4 = [
        "blaze",
        "end",
        "enderman",
        "experience",
        "ghast",
        "gold",
        "lapis_lazuli",
        "nickel",
        "osmium",
        "uranium",
        "fluorite",
        "cobalt"
    ]
    cropT4.forEach(C => { gardenTier4(C, "mysticalagriculture:imperium_farmland", 5) })
    cropT4.forEach(C => { gardenTier4(C, "mysticalagriculture:supremium_farmland", 6) })
    cropT4.forEach(C => { gardenTier4(C, "mysticalagradditions:insanium_farmland", 7) })
    cropT4.forEach(C => { gardenTier4(C, "kubejs:magical_soil", 8) })

    function gardenTier5(crop, soil, qte) { e.custom({ "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:" + crop + "_seeds" }, "soil": { "item": soil }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:" + crop + "_crop" }, "results": [{ "item": "mysticalagriculture:" + crop + "_essence", "count": qte }, { "item": "mysticalagriculture:fertilized_essence", "count": 1 }] }) }
    var cropT5 = [
        "diamond",
        "emerald",
        "netherite",
        "wither_skeleton",
        "platinum",
        "uraninite"
    ]
    cropT5.forEach(C => { gardenTier5(C, "mysticalagriculture:supremium_farmland", 6) })
    cropT5.forEach(C => { gardenTier5(C, "mysticalagradditions:insanium_farmland", 7) })
    cropT5.forEach(C => { gardenTier5(C, "kubejs:magical_soil", 8) })

    function gardenTierMagic(crop, soil, qte) { e.custom({ "type": "immersiveengineering:cloche", "input": { "item": "mysticalagriculture:" + crop + "_seeds" }, "soil": { "item": soil }, "time": 50, "render": { "type": "crop", "block": "mysticalagriculture:" + crop + "_crop" }, "results": [{ "item": "mysticalagriculture:" + crop + "_essence", "count": qte }, { "item": "mysticalagriculture:fertilized_essence", "count": 1 }] }) }
    var cropTMagic = [
        "allthemodium",
        "vibranium",
        "unobtainium"
    ]
    cropTMagic.forEach(C => { gardenTierMagic(C, "kubejs:magical_soil", 8) })

    function cloche(output, amount, seed, soil, render, time) {
        e.custom({
            type: "immersiveengineering:cloche",
            results: [{
                item: output,
                count: amount
            }],
            input: Ingredient.of(seed),
            soil: Ingredient.of(soil),
            time: time,
            render: {
                type: "crop",
                block: render
            }
        }).id(`kubejs:cloche/${seed.replace(':', '/')}`)
    }

    function insolator(output, input, id) {
        e.custom({
            "type": "thermal:insolator",
            "ingredient": input,
            "result": output
        }).id(id)
    }

    //#region FUNCTIONS
    function tier(types, time, soil, rCount) {
        types.forEach(type => {
            cloche(`mysticalagriculture:${type}_essence`, rCount, `mysticalagriculture:${type}_seeds`, soil, `mysticalagriculture:${type}_crop`, time);
            insolator([Item.of(`mysticalagriculture:${type}_essence`), Item.of(`mysticalagriculture:${type}_seeds`)], Item.of(`mysticalagriculture:${type}_seeds`), `kubejs:thermal/insolator_${type}_seeds`)
        })
    }

    function regular(output, amount, seed, crop) {
        cloche(output, amount, seed, 'minecraft:dirt', crop, 600);
    }

    function essenceCircle(result, essenceType) {
        e.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
    }

    //#endregion

    essenceCircle('4x alltheores:osmium_ingot', 'osmium');
    essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
    essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
    essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
    essenceCircle('6x silentgear:azure_silver_ingot', 'azure_silver')
    essenceCircle('6x silentgear:crimson_iron_ingot', 'crimson_iron')

    //#region CROPS
    //Tier 1 Crops
    //Tier 2 Crops
    //Tier 3 Crops
    //Tier 4 Crops
    //Tier 5 Crops
    //Tier 6 Crops
    tier(['nether_star'], 50, 'mysticalagradditions:nether_star_crux', 8)
    tier(['dragon_egg'], 50, 'mysticalagradditions:dragon_egg_crux', 8)
        //Magical Tier

    //Regular crops
    regular('silentgear:flax_fiber', 2, 'silentgear:flax_seeds', 'silentgear:flax_plant');


})
