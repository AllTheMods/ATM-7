onEvent('recipes', e => {
  //#region RECIPES
  //#region Dragon Soul
  e.shaped('allthetweaks:dragon_soul', ['CDA', 'SNI', 'BSE'], {
    A: 'occultism:soul_gem',
    C: 'forbidden_arcanus:dark_soul',
    D: 'forbidden_arcanus:arcane_dragon_egg',
    N: 'allthemodium:piglich_heart',
    B: 'minecraft:dragon_breath',
    S: 'botania:dragonstone',
    E: 'forbidden_arcanus:golden_dragon_scale',
    I: [Item.of('blue_skies:nature_arc', '{ArcLevel:2}'),Item.of('blue_skies:nature_arc', '{ArcLevel:1}')]
  }).id('kubejs:allthetweaks/dragon_soul')
  //#endregion
  
  //#region Dimensional Seed
  maInfusion(e, 'allthetweaks:dimensional_seed',
      'allthecompressed:emerald_block_5x',
      'allthecompressed:blackstone_block_6x',
      'allthecompressed:end_stone_block_5x',
      'allthecompressed:netherrack_block_6x',
      'allthecompressed:clay_block_5x',
      'allthecompressed:soul_sand_block_4x',
      'allthecompressed:red_sand_block_4x',
      'allthecompressed:red_sand_block_4x',
      'allthecompressed:obsidian_block_5x')
  //#endregion
  
  //#region Withers Compass
  e.shaped('allthetweaks:withers_compass', ['DCD', 'ABA', 'DED'], {
    A: 'mekanism:module_gravitational_modulating_unit',
    B: 'ars_nouveau:glyph_wither',
    C: 'allthecompressed:nether_star_block_2x',
    D: Item.of('apotheosis:potion_charm', { Damage: 0, Potion: "apotheosis:strong_wither" }),
    E: 'mekanism:module_gravitational_modulating_unit'
  }).id('kubejs:allthetweaks/withers_compass')
  //#endregion
  
  //#region Philosopher's Fuel
  e.shaped('allthetweaks:philosophers_fuel', ['ABC', 'DEF', 'GHI'], {
    A: 'mysticalagradditions:insanium_coal_block',
    B: Item.of('ftbic:quad_uranium_fuel_rod', '{Damage:0}'),
    C: 'mekanism:pellet_antimatter',
    D: 'evilcraft:piercing_vengeance_focus',
    E: 'mysticalagriculture:supremium_furnace',
    F: Item.of('elementalcraft:jewel', '{elementalcraft:{jewel:"elementalcraft:phoenix"}}'),
    G: 'allthecompressed:uranium_block_5x',
    H: 'twilightforest:carminite_block',
    I: 'ftbic:nuclear_reactor'
  }).id('kubejs:allthetweaks/philosophers_fuel')
  //#endregion
  
  //#region Improbable Probaility Device
  e.shaped('allthetweaks:improbable_probability_device', ['AAB', 'CGE', 'FDF'], {
    A: 'computercraft:monitor_advanced',
    B: 'mekanismgenerators:module_solar_recharging_unit',
    C: ['extradisks:1048576k_storage_part', 'extradisks:1048576k_fluid_storage_part', 'megacells:cell_component_256m'],
    D: 'forbidden_arcanus:eternal_obsidian_skull',
    E: Item.of('apotheosis:potion_charm', { Damage: 0, Potion: "apotheosis:strong_knowledge" }),
    F: 'allthecompressed:enderium_block_3x',
    G: 'ftbic:nuke'
  }).id('kubejs:allthetweaks/improbable_probability_device')
  //#endregion
  
  //#region Nexium Emitter
  e.shaped('allthetweaks:nexium_emitter', ['A B', ' CF', 'GED'], {
    A: 'powah:player_transmitter_nitro',
    B: ['ae2:wireless_terminal', 'ae2:wireless_crafting_terminal', 'refinedstorageaddons:wireless_crafting_grid', 'refinedstorage:wireless_grid', 'refinedstorage:wireless_fluid_grid'],
    C: 'mekanism:supercharged_coil',
    D: 'ftbic:ev_solar_panel',
    E: 'ae2:singularity',
    F: 'mekanismgenerators:module_solar_recharging_unit',
    G: 'ftbic:overclocked_heat_vent'
  }).id('kubejs:allthetweaks/nexium_emitter')
  //#endregion

  //#region Pulsating Black Hole
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
  pressure([
    {'type': 'pneumaticcraft:stacked_item', 'item':'mekanism:pellet_antimatter','count': 1},
    {'type': 'pneumaticcraft:stacked_item', 'item':'forbidden_arcanus:quantum_catcher','count': 1},
    {'type': 'pneumaticcraft:stacked_item', 'item':'ftbic:nuke','count': 1},
    {'type': 'pneumaticcraft:stacked_item', 'item':'botania:black_hole_talisman','count': 1},
    {'type': 'pneumaticcraft:stacked_item', 'item':'allthecompressed:unobtainium_block_3x','count': 1},
    {'type': 'pneumaticcraft:stacked_item', 'item':'bloodmagic:sigilofsuppression','count': 1},
    {'type': 'pneumaticcraft:stacked_item', 'item':'industrialforegoing:infinity_nuke','count': 1},
    {'type': 'pneumaticcraft:stacked_item', 'item':'ae2:quantum_ring','count': 1},
    {'type': 'pneumaticcraft:stacked_item', 'item':'ftbic:antimatter','count': 1}
  ], 'allthetweaks:pulsating_black_hole', 1, 4.9)
  //#endregion
  
  //#region Oblivion Shard
  e.shaped('allthetweaks:oblivion_shard', [' AB', 'ACA', 'BA '], {
    A: 'allthemodium:unobtainium_block',
    C: 'naturesaura:end_flower',
    B: 'forbidden_arcanus:dark_nether_star_block'
  }).id('kubejs:allthetweaks/oblivion_shard')
  //#endregion
  
  //#region Creative Essence
  e.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
  }).id('kubejs:allthetweaks/creative_essence')
  //#endregion
  
  //#region Patrick Star
  e.recipes.create.mechanical_crafting('allthetweaks:patrick_star', [
    '    B    ',
    '   BCA   ',
    'BBBGCABBB',
    'ACGCGGGCA',
    ' AAGGGBA ',
    '  EDDDE  ',
    ' EFEDEFE ',
    'BEDD DDEB',
    'AAA   AAA'
  ], {
    A: 'minecraft:magenta_concrete',
    B: 'minecraft:pink_concrete',
    C: 'minecraft:pink_concrete_powder',
    D: 'minecraft:green_concrete',
    E: 'minecraft:green_concrete_powder',
    F: 'minecraft:lime_concrete',
    G: 'minecraft:magenta_concrete_powder'
  }).id('kubejs:allthetweaks/patrick_star')
  //#endregion
  //#region ATM Star
  e.recipes.create.mechanical_crafting('allthetweaks:atm_star', [
    '    A    ',
    '   AJA   ',
    'AAAJFJAAA',
    'AJJCDEJJA',
    ' ANBIHMA ',
    '  AKGLA  ',
    ' AJJAJJA ',
    'AJJA AJJA',
    'AAA   AAA'
  ], {
    A: 'allthemodium:unobtainium_allthemodium_alloy_block',
    B: 'allthetweaks:nexium_emitter',
    C: 'allthetweaks:dragon_soul',
    D: 'allthetweaks:withers_compass',
    E: 'allthetweaks:pulsating_black_hole',
    F: 'allthetweaks:oblivion_shard',
    G: 'allthetweaks:improbable_probability_device',
    H: 'allthetweaks:dimensional_seed',
    I: 'allthetweaks:patrick_star',
    J: 'allthecompressed:nether_star_block_3x',
    K: 'allthetweaks:philosophers_fuel',
    L: 'mysticalagradditions:creative_essence',
    M: 'mythicbotany:muspelheim_rune',
    N: 'mythicbotany:nidavellir_rune'
  }).id('kubejs:allthetweaks/atm_star')
  //#endregion
  //#endregion

  e.recipes.create.mechanical_crafting('allthetweaks:atm_star',[
    '    S    ',
    '   SSS   ',
    'SSSSSSSSS',
    'SSSSSSSSS',
    ' SSSPSSS ',
    '  SSSSS  ',
    ' SSSSSSS ',
    'SSSS SSSS',
    'SSS   SSS'
  ], {
    S: 'allthetweaks:atm_star_shard',
    P: 'allthetweaks:patrick_star',
  }).id('kubejs:allthetweaks/atm_shard_star')

})
