//priority: 1000
onEvent('tags.blocks', e => {
  e.add('allthemodium:other_te_whitelist', ['mekanism:teleporter', 'waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone', '#waystones:sharestones'])
  e.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
})

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
  e.add('forge:ores/inferium',['mysticalagradditions:nether_inferium_ore','mysticalagradditions:end_inferium_ore'])

  e.add('forge:storage_blocks/raw_crimson_iron', 'silentgear:raw_crimson_iron_block');
  e.add('forge:raw_ores/crimson_iron', 'silentgear:raw_crimson_iron');
  e.add('forge:raw_materials/crimson_iron', 'silentgear:raw_crimson_iron');
  e.add('forge:dusts/crimson_iron', 'silentgear:crimson_iron_dust');
  e.add('forge:storage_blocks/raw_azure_silver', 'silentgear:raw_azure_silver_block');
  e.add('forge:raw_ores/azure_silver', 'silentgear:raw_azure_silver');
  e.add('forge:raw_materials/azure_silver', 'silentgear:raw_azure_silver');
  e.add('forge:dusts/azure_silver', 'silentgear:azure_silver_dust');
  e.add('forge:raw_ores/cobalt', 'tconstruct:raw_cobalt');
  e.add('forge:dusts/cobalt', 'kubejs:cobalt_dust');

  e.add('forge:raw_ores/iridium', 'ftbic:iridium_chunk');
  e.remove('forge:silicon', 'ftbic:silicon')

  e.add('forge:melons','minecraft:melon_slice')

  // fix raw block crafting for other mods
  e.add('forge:raw_ores/zinc', 'create:raw_zinc')
  mekanismMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `mekanism:raw_${metal}`))
  immersiveMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `immersiveengineering:raw_${metal}`))

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
