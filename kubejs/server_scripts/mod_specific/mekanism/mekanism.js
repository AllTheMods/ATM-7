onEvent('recipes', e => {
  e.shaped('mekanism:digital_miner', ['AUA', 'LRL', 'TST'], {
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    A: '#mekanism:alloys/atomic',
    S: 'mekanism:steel_casing',
    U: '#forge:ingots/allthemodium'
  }).id(`kubejs:mekanism/digital_miner`)
  e.shaped('mekanism:atomic_disassembler', ['RER', 'RUR', ' V '], {
    E: 'mekanism:energy_tablet',
    R: '#mekanism:alloys/reinforced',
    U: '#forge:circuits/ultimate',
    V: '#forge:ingots/vibranium'
  }).id(`kubejs:mekanism/atomic_disassembler`)
  e.shaped('mekanism:robit', [' S ', 'ERE', 'OPO'], {
    R: 'mekanism:alloy_atomic',
    S: '#forge:ingots/steel',
    E: 'mekanism:energy_tablet',
    O: 'mekanism:ingot_refined_obsidian',
    P: 'mekanism:personal_chest'
  }).id(`kubejs:mekanism/robit`)
  e.shaped(Item.of('mekanism:mekasuit_helmet', {HideFlags: 2}), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_helmet'
  }).id(`kubejs:mekanism/mekasuit_helmet`)
  e.shaped(Item.of('mekanism:mekasuit_bodyarmor', {HideFlags: 2}), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_chestplate'
  }).id(`kubejs:mekanism/mekasuit_bodyarmor`)
  e.shaped(Item.of('mekanism:mekasuit_pants', {HideFlags: 2}), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_leggings'
  }).id(`kubejs:mekanism/mekasuit_pants`)
  e.shaped(Item.of('mekanism:mekasuit_boots', {HideFlags: 2}), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_boots'
  }).id(`kubejs:mekanism/mekasuit_boots`)

  removeRecipeByID(e, [
    'mekanism:digital_miner',
    'mekanism:atomic_disassembler',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    'mekanism:robit',
  ])
  removeRecipeByOutput(e, [
    'mekanism:upgrade_anchor'
  ])
})
