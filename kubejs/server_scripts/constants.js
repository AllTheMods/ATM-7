//priority: 1000
let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
let maDisabledSeeds = ['apatite', 'rubber', 'ruby', 'sapphire', 'basalz', 'blazing_crystal', 'blitz', 'blizz', 'brass', 'bronze', 'compressed_iron', 'constantan', 'chrome', 'electrum', 'elementium', 'ender_biotite', 'energized_steel', 'fluix', 'graphite', 'hop_graphite', 'invar', 'iridium', 'manasteel', 'niotic_crystal', 'nitro_crystal', 'quartz_enriched_iron', 'refined_glowstone', 'refined_obsidian', 'rock_crystal', 'rubber', 'signalum', 'silicon', 'spirited_crystal', 'starmetal', 'steel', 'sulfur', 'terrasteel', 'titanium', 'tungsten', 'mithril', 'tinkers_bronze', 'ironwood', 'steeleaf', 'pig_iron', 'slimesteel', 'rose_gold', 'queens_slime', 'manyullyn', 'fiery_ingot', 'knightmetal', 'hepatizon', 'lumium', 'enderium']
let vanillaMetals = ['iron', 'gold', 'copper']
let atoMetals = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel']
let atoAlloys = ['steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass']
let atmMetals = ['allthemodium', 'vibranium', 'unobtainium']
let immersiveMetals = ['aluminum', 'lead', 'nickel', 'silver', 'uranium']
let immersiveAlloys = ['steel', 'electrum', 'constantan']
let mekanismMetals = ['osmium', 'lead', 'tin', 'uranium']
let mekanismAlloys = ['steel', 'refined_obsidian', 'refined_glowstone', 'bronze']
let ftbicMetals = ['tin', 'lead', 'uranium', 'iridium', 'aluminum']
let ftbicAlloys = ['enderium', 'bronze']
let thermalMetals = ['tin', 'lead', 'silver', 'nickel']
let thermalAlloys = ['bronze', 'electrum', 'invar', 'constantan', 'signalum', 'lumium', 'enderium']

let modifyShaped = (e, result, count, pattern, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shaped' })
  e.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
let modifyShapeless = (e, result, count, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  e.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}
let modifySmelt = (e, result, ingredients) => {
  e.remove({ output: result, type: 'minecraft:smelting' })
  e.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}
let removeRecipeByID = (e, recipes) => {
  recipes.forEach(recipe => {
    e.remove({ id: recipe })
  })
}
let removeRecipeByOutput = (e, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      e.remove({ type: recipe[1], output: recipe[0] })
    } else {
      e.remove({ output: recipe })
    }
  })
}
let woodcutting = (e, entries) => {
  entries.forEach(([input, output, count]) => {
    e.custom({
      type: "corail_woodcutter:woodcutting",
      ingredient: { item: input },
      result: output,
      count: count
    }).id(`kubejs:woodcutting/${output.replace(':', '/')}`)
  })
}

let maInfusion = (e, output, middle, item1, item2, item3, item4, item5, item6, item7, item8) => {
  e.recipes.mysticalagriculture.infusion({
    input: { item: middle },
    ingredients: [
      { item: item1 },
      { item: item2 },
      { item: item3 },
      { item: item4 },
      { item: item5 },
      { item: item6 },
      { item: item7 },
      { item: item8 }
    ],
    result: { item: output }
  }).id(`kubejs:mainfusion/${output.replace(':', '/')}`)
}

let energize = (e, ingredient, result, power, count) => {
  e.recipes.powah.energizing({
    ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
    energy: power,
    result: Item.of(result, count ? count : 1).toResultJson()
  }).id(`kubejs:energizing/${result.replace(':', '/')}`)
}
