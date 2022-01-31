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

  e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')
})
onEvent('tags.blocks', e => {
  e.add('minecraft:climbable', ['minecraft:chain', /additionallanterns:.*_chain/])
})
onEvent('tags.entity_types', e => {
  e.add('mob_grinding_utils:noswab', [/productivebees:.+/, 'artifacts:mimic',])
})
