onEvent('recipes', e => {
  function pressure(inputs, result, rCount, pressure) {
    e.recipes.pneumaticcraft.pressure_chamber({
      inputs: inputs,
      pressure: pressure,
      results: [{
        item: result,
        count: rCount
      }]
    }).id(`kubejs:pressure/${result.replace(':', '/')}`)
  }
  
///# Botania
  e.shaped('botania:creative_pool', ['RMR', 'MSM', 'RMR'], {
    S: 'allthetweaks:atm_star',
    M: 'botania:mana_pool',
    R: '#botania:runes'
  }).id('kubejs:botania/creative_pool')

///# Create
  e.recipes.create.mechanical_crafting('create:creative_motor', ['CLC', 'HSH', 'LGL'], {
    C: 'create:cogwheel',
    L: 'create:large_cogwheel',
    H: 'create:shaft',
    S: 'allthetweaks:atm_star',
    G: 'create:gearbox'
  })
  e.recipes.create.mixing('create:creative_blaze_cake', [
    'thermal:chocolate_cake',
    'allthetweaks:atm_star',
    'create_confectionery:honey_candy'
  ]).superheated().processingTime(6000).id('kubejs:create/creative_blaze_cake')

///#Mekanism
  e.shaped('mekanism:creative_energy_cube', ['ATA', 'UCU', 'ATA'], {
    A: 'mekanism:alloy_atomic',
    T: 'mekanism:energy_tablet',
    U: 'allthemodium:unobtainium_block',
    C: 'mekanism:ultimate_energy_cube'
  }).id('kubejs:mekanism/creative_energy_cube')
  e.recipes.powah.energizing({
    ingredients: [
      Ingredient.of('mekanism:creative_energy_cube',).toJson(),
      Ingredient.of('mekanism:creative_energy_cube',).toJson(),
      Ingredient.of('allthetweaks:atm_star').toJson(),
      Ingredient.of('mekanism:creative_energy_cube',).toJson(),
      Ingredient.of('mekanism:creative_energy_cube',).toJson(),
    ],
    energy: 2147483647,
    result: Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}').toResultJson()
  }).id(`kubejs:energizing/mekanism_creative_energy_cube`)
  
  ///# Universal Grid
    e.shaped('universalgrid:creative_wireless_universal_grid', ['ABA', 'CBD', 'ABA'], {
        A: 'allthemodium:unobtainium_ingot',
        B: 'refinedstorage:quartz_enriched_iron',
        C: 'refinedstorageaddons:creative_wireless_crafting_grid',
        D: 'universalgrid:wireless_universal_grid'
    }).id('kubejs:universalgrid/creative_wireless_universal_grid')

})
