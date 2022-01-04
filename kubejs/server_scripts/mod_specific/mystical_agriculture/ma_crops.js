onEvent('recipes', e => {
  //#region FUNCTIONS
  function tier(types, time, soil, rCount) {
    types.forEach(type => {
      e.recipes.immersiveengineering.cloche(Item.of(`mysticalagriculture:${type}_essence`, rCount), `mysticalagriculture:${type}_seeds`, soil, `mysticalagriculture:${type}_crop`).time(time).id(`kubejs:immersiveengineering/cloche/${type}`)
    })
  }

  function regular(results, seed, crop) {
    e.recipes.immersiveengineering.cloche(results, Item.of(seed), 'minecraft:dirt', crop).time(600).id(`kubejs:immersiveengineering/cloche/${seed.replace(':', '/')}`)
  }

  //#endregion

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
  tier([
    'dragon_egg',
    'nether_star',
  ], 4750, '#misctags:farmland/tier6', 2)

  //Regular crops
  regular(Item.of('silentgear:flax_fiber', 2), 'silentgear:flax_seeds', 'silentgear:flax_plant')
})
