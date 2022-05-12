onEvent('recipes', e => {
    // add atm ores to botania's orechid and orechid ignem

    // ore : weight
    let orechidStone = {
/*      existing
        "coal_ore":67415,
        "copper_ore":7000,
        "diamond_ore":883,
        "emerald_ore":1239,
        "gold_ore":2647,
        "iron_ore":29371,
        "lapis_ore":1079,
        "redstone_ore":7654,*/
        "allthemodium_ore": 201
    }

    let orechidDeepslate = {
/*      existing
        "deepslate_coal_ore":75,
        "deepslate_copper_ore":75,
        "deepslate_diamond_ore":100,
        "deepslate_emerald_ore":50,
        "deepslate_gold_ore":125,
        "deepslate_iron_ore":175,
        "deepslate_lapis_ore":175,
        "deepslate_redstone_ore":150,*/
        "allthemodium_slate_ore": 25
    }

    let orechidNetherack = {
/*      existing
        "ancient_debris":148,
        "nether_gold_ore":3635,
        "nether_quartz_ore":19600,*/
        "vibranium_ore": 55
        // could add in the rest of the ato nether varieties
    };

    function addOrechid(type, stone, block, weight,id) {
        e.custom({
            "type": type,
            "input": stone,
            "output": {
                "type": "block",
                "block": `allthemodium:${block}`,
            },
            "weight": weight
        }).id(id)
    }

    for (block in orechidStone) {
        addOrechid("botania:orechid","minecraft:stone",block,orechidStone[block],`kubejs:orechid/${block}`)
    }

    for (block in orechidDeepslate) {
        addOrechid("botania:orechid","minecraft:deepslate",block,orechidDeepslate[block],`kubejs:orechid/${block}`)
    }

    for (block in orechidNetherack) {
        addOrechid("botania:orechid_ignem","minecraft:netherrack",block,orechidNetherack[block],`kubejs:orechid_ignem/${block}`)
    }

  })