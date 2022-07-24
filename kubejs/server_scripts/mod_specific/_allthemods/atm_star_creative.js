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
  
///# AE2 
  energize(e, ['ae2:dense_energy_cell', 'allthetweaks:atm_star'], 'ae2:creative_energy_cell', '2147483647')

///# Ars Noveau 
  e.shaped(Item.of('ars_nouveau:creative_spell_book', {
    mode: 0,
    spells: 'intangible,ignite,flare,strength,craft,cold_snap,rune,snare,slowfall,freeze,split,crush,smelt,summon_steed,accelerate,summon_vex,lightning,grow,dampen,touch,invisibility,extract,delay,light,duration_down,exchange,place_block,summon_wolves,shield,conjure_water,cut,harm,interact,blink,amplify,phantom_block,fell,extend_time,heal,leap,redstone_signal,pierce,harvest,fortune,break,pickup,launch,dispel,haste,ender_inventory,pull,explosion,fangs,aoe,gravity,self,aquatic,projectile,wither,gust'
  }),
    ['BSG', 'GGE', 'EER'],
    {
      B: 'ars_nouveau:archmage_spell_book',
      S: 'allthetweaks:atm_star',
      G: 'ars_nouveau:source_gem_block',
      E: 'minecraft:ender_eye',
      R: 'tombstone:soul_receptacle'
    }
  )

  e.shaped('ars_nouveau:creative_source_jar', ['GMG', 'GSG', 'GGG'], {
    G: '#forge:glass',
    S: 'allthetweaks:atm_star',
    M: 'ars_nouveau:source_gem_block'
  })
  
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
    'createaddition:chocolate_cake',
    'allthetweaks:atm_star',
    'create_confectionery:honey_candy'
  ]).superheated().processingTime(6000).id('kubejs:create/creative_blaze_cake')
    energize(e, [
    Item.of('create:flywheel').toJson(),
    Item.of('createaddition:alternator').toJson(),
    Item.of('allthetweaks:atm_star').toJson()
  ], 'createaddition:creative_energy', 2147483647)

///# Integrated Dynamics 
  energize(e, [
    'integrateddynamics:energy_battery',
    'integrateddynamics:energy_battery',
    'allthetweaks:atm_star',
    'integrateddynamics:energy_battery',
    'integrateddynamics:energy_battery'
  ], 'integrateddynamics:energy_battery_creative', 2147483647)

  ///# IronJetpacks
  e.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:creative"}'), [
    ' A ',
    'BCB',
    ' A '
  ], {
    A: '#forge:storage_blocks/redstone',
    B: 'allthemodium:unobtainium_block',
    C: 'powah:battery_nitro'
  })
  e.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}'), [
    'ABA',
    'BCB',
    'ADA'
  ], {
    A: 'allthemodium:unobtainium_block',
    B: 'powah:nitro_crystal_block',
    C: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:creative"}'),
    D: 'ironfurnaces:unobtainium_furnace'
  })
  e.shaped(Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:creative"}'), [
   'ACA',
   'BDB',
   'AEA'
  ], {
   A: 'allthemodium:unobtainium_block',
   B: 'mekanism:sps_casing',
   C: 'industrialforegoing:mycelial_reactor',
   D: 'mekanism:ultimate_induction_cell',
   E: 'powah:reactor_nitro'
  })
  e.shaped(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:creative"}'), [
    'ACA',
    'BFB',
    'DED'
  ], {
    A: 'mysticalagradditions:creative_essence',
    B: 'allthemodium:vibranium_allthemodium_alloy_block',
    C: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:creative"}'),
    D: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}'),
    E: 'allthetweaks:atm_star',
    F: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:unobtainium"}')
  })
  
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
  
///# Powah 
  energize(e, ['powah:energy_cell_nitro', 'powah:energy_cell_nitro', 'allthetweaks:atm_star', 'powah:energy_cell_nitro', 'powah:energy_cell_nitro'], 'powah:energy_cell_creative', '2147483647')

///# Pnc 
  pressure([
    {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:advanced_pressure_tube','count': 64},
    {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:electrostatic_compressor','count': 1},
    {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:advanced_pressure_tube',  'count': 64},
    {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:flux_compressor','count': 1},
    {'type': 'pneumaticcraft:stacked_item','item': 'allthetweaks:atm_star','count': 1},
    {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:advanced_air_compressor','count': 1},
    {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:advanced_pressure_tube','count': 64},
    {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:advanced_liquid_compressor','count': 1},
    {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:advanced_pressure_tube','count': 64}
  ], 'pneumaticcraft:creative_compressor', 1, 4.9)

  pressure([
  {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:compressed_iron_block','count': 64},
  {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:compressed_iron_block','count': 64},
  {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:compressed_iron_block','count': 64},
  {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:compressed_iron_block','count': 64},
  {'type': 'pneumaticcraft:stacked_item','item': 'allthetweaks:atm_star','count': 1},
  {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:compressed_iron_block','count': 64},
  {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:compressed_iron_block','count': 64},
  {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:compressed_iron_block','count': 64},
  {'type': 'pneumaticcraft:stacked_item','item': 'pneumaticcraft:compressed_iron_block','count': 64}
  ], 'pneumaticcraft:creative_compressed_iron_block', 1, 4.9)

///# Refined storage 
  energize(e, ['refinedstorage:wireless_grid'], 'refinedstorage:creative_wireless_grid', '2147483647')
  energize(e, ['refinedstorage:wireless_fluid_grid'], 'refinedstorage:creative_wireless_fluid_grid', '2147483647')
  energize(e, ['refinedstorage:wireless_crafting_monitor'], 'refinedstorage:creative_wireless_crafting_monitor', '2147483647')
  energize(e, ['refinedstorageaddons:wireless_crafting_grid'], 'refinedstorageaddons:creative_wireless_crafting_grid', '2147483647')
  energize(e, ['refinedstorage:portable_grid'], 'refinedstorage:creative_portable_grid', '2147483647')
  energize(e, ['refinedstorage:controller', 'allthetweaks:atm_star'], 'refinedstorage:creative_controller', '2147483647')

  ///# Universal Grid
    e.shaped('universalgrid:creative_wireless_universal_grid', ['ABA', 'CBD', 'ABA'], {
        A: 'allthemodium:unobtainium_ingot',
        B: 'refinedstorage:quartz_enriched_iron',
        C: 'refinedstorageaddons:creative_wireless_crafting_grid',
        D: 'universalgrid:wireless_universal_grid'
    }).id('kubejs:universalgrid/creative_wireless_universal_grid')

})
