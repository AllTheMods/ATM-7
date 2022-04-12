onEvent('recipes', e => {
  function cloche(output, amount, seed, soil, render, time) {
    e.custom({
        type: "immersiveengineering:cloche",
        results: [
          {
            item: output,
            count: amount
          }
        ],
        input: Ingredient.of(seed),
        soil: Ingredient.of(soil),
        time: time,
        render: {
          type: "crop",
          block: render
        }
      }).id(`kubejs:cloche/${seed.replace(':', '/')}`)
  }

  //#region FUNCTIONS
  function tier(types, time, soil, rCount) {
    types.forEach(type => {
      cloche(`mysticalagriculture:${type}_essence`, rCount, `mysticalagriculture:${type}_seeds`, soil, `mysticalagriculture:${type}_crop`, time);
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

  //#region CROPS
  //Tier 1 Crops
  tier([
    'inferium',
    'air',
    'earth',
    'fire',
    'water',
    'dirt',
    'wood',
    'ice',
    'stone',
    'deepslate',
  ], 1000, '#misctags:farmland/tier1', 2)
  //Tier 2 Crops
  tier([
    'aluminum',
    'chicken',
    'coal',
    'copper',
    'coral',
    'cow',
    'dye',
    'fish',
    'honey',
    'nature',
    'nether',
    'pig',
    'saltpeter',
    'sheep',
    'slime',
    'squid',
    'turtle',
    'amethyst',
    'silicon',
    'sulfur',
  ], 1750, '#misctags:farmland/tier2', 2)
  //Tier 3 Crops
  tier([
    'certus_quartz',
    'creeper',
    'glowstone',
    'iron',
    'lead',
    'nether_quartz',
    'obsidian',
    'prismarine',
    'rabbit',
    'redstone',
    'silver',
    'skeleton',
    'spider',
    'tin',
    'zinc',
    'zombie',
  ], 2500, '#misctags:farmland/tier3', 2)
  //Tier 4 Crops
  tier([
    'blaze',
    'end',
    'enderman',
    'experience',
    'ghast',
    'gold',
    'lapis_lazuli',
    'nickel',
    'osmium',
  ], 3250, '#misctags:farmland/tier4', 2)
  //Tier 5 Crops
  tier([
    'diamond',
    'emerald',
    'netherite',
    'wither_skeleton',
    'platinum',
    'uranium',
  ], 4000, '#misctags:farmland/tier5', 2)
  //Tier 6 Crops
  tier(['nether_star'], 4750, 'mysticalagradditions:nether_star_crux', 2)
  tier(['dragon_egg'], 4750, 'mysticalagradditions:dragon_egg_crux', 2)

  //Regular crops
  regular('silentgear:flax_fiber', 2, 'silentgear:flax_seeds', 'silentgear:flax_plant');
})
