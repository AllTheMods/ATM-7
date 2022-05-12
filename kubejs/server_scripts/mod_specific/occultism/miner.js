onEvent('recipes', e => {
    // add atm ores to dimensional mineshaft

    // ore : weight
    let atmOres = {
        allthemodium: 100,
        vibranium: 40,
        unobtainium: 15
    };

    for (ore in atmOres) {
        e.custom({
            "type": "occultism:miner",
            "ingredient": {
                        "tag": "occultism:miners/ores"
            },
            "result": {
                "item": `allthemodium:${ore}_ore`
            },
            "weight": atmOres[ore]
        })
    }; 
  })