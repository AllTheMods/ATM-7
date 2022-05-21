onEvent('recipes', e => {

    let endOres = {
        "mysticalagradditions:end_prosperity_ore":0.064,
        "mysticalagradditions:end_inferium_ore":0.09,
        "silentgear:azure_silver_ore":0.03,
        "rftoolsbase:dimensionalshard_end":0.055,
        "deepresonance:resonating_ore_end":0.025,
        "alltheores:aluminum_end_ore":0.095,
        "alltheores:lead_end_ore":0.095,
        "alltheores:nickel_end_ore":0.095,
        "alltheores:osmium_end_ore":0.095,
        "alltheores:platinum_end_ore":0.04,
        "alltheores:silver_end_ore":0.07,
        "alltheores:tin_end_ore":0.095,
        "alltheores:uranium_end_ore":0.055,
        "alltheores:zinc_end_ore":0.095,
        "allthemodium:unobtainium_ore":0.001
    }
    let endSpawns = []
    for (key in endOres) {
        endSpawns.push({"chance":endOres[key],"output":Item.of(key)})
    }
    e.custom({
        "type": "immersiveengineering:mineral_mix",
        "ores": endSpawns,
        "dimensions": ["minecraft:the_end"],
        "weight": 50,
        "fail_chance": 0.05
    }).id("kubejs:compat/immersiveengineering/endium")

    
    let netherOres = {
        "mysticalagradditions:nether_prosperity_ore":0.045, 
        "mysticalagradditions:nether_inferium_ore":0.06, 
        "silentgear:crimson_iron_ore":0.04,
        "rftoolsbase:dimensionalshard_nether":0.037,
        "deepresonance:resonating_ore_nether":0.019,
        "alltheores:aluminum_nether_ore":0.065,
        "alltheores:lead_nether_ore":0.065,
        "alltheores:nickel_nether_ore":0.065,
        "alltheores:osmium_nether_ore":0.065,
        "alltheores:platinum_nether_ore":0.028,
        "alltheores:silver_nether_ore":0.046,
        "alltheores:tin_nether_ore":0.065,
        "alltheores:uranium_nether_ore":0.037,
        "alltheores:zinc_nether_ore":0.065,
        "allthemodium:vibranium_ore":0.0015,
        "minecraft:ancient_debris":0.003,
        "byg:emeraldite_ore":0.0445,
        "minecraft:nether_gold_ore":0.074,
        "minecraft:nether_quartz_ore":0.150,
        "tconstruct:cobalt_ore":0.025
    }
    let netherSpawns = []
    for (key in netherOres) {
        netherSpawns.push({"chance":netherOres[key],"output":Item.of(key)})
    }
    e.custom({
        "type": "immersiveengineering:mineral_mix",
        "ores": netherSpawns,
        "dimensions": ["minecraft:the_nether"],
        "weight": 50,
        "fail_chance": 0.05
    }).id("kubejs:compat/immersiveengineering/netherum")
    // remove current nether mineral veins
    e.remove({id:"immersiveengineering:mineral/ancient_debris"})
    e.remove({id:"immersiveengineering:mineral/mephitic_quarzite"})
})

