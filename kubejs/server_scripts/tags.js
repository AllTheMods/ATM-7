//priority: 1000
onEvent('tags.items', e => {
  e.add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
  e.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
  e.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
  e.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
  e.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
  e.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])
  e.add('misctags:immersive_engineering_hammer', 'immersiveengineering:hammer')
  e.add('misctags:immersive_engineering_wirecutter', 'immersiveengineering:wirecutter')

  e.add('forge:ores/quartz', ['byg:blue_nether_quartz_ore', 'byg:brimstone_nether_quartz_ore'])
  e.add('forge:ores/gold', ['byg:blue_nether_gold_ore', 'byg:brimstone_nether_gold_ore'])

  atmMetals.forEach(metal => e.add(`forge:storage_blocks/raw_${metal}`, `allthemodium:raw_${metal}_block`));
  e.add('forge:rods/metal', atoMetals.concat(vanillaMetals, atoAlloys).map(metal => `alltheores:${metal}_rod`));
  e.add('forge:rods/metal', atmMetals.map(metal => `allthemodium:${metal}_rod`));
  e.add('forge:rods/all_metal', '#forge:rods/metal');

  e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')
})
onEvent('tags.blocks', e => {
  e.add('minecraft:climbable', ['minecraft:chain', /additionallanterns:.*_chain/])
})
onEvent('tags.entity_types', e => {
  e.add('mob_grinding_utils:noswab', [/productivebees:.+/, 'artifacts:mimic',])
})
