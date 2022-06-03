onEvent('recipes', e => {
  e.remove({id: 'tiab:time_in_a_bottle'})
  e.shaped('tiab:time_in_a_bottle', ['UUU', 'DCD', 'LBL'], {
     U: '#forge:ingots/unobtainium',
     D: 'botania:mana_diamond',
     L: 'minecraft:lapis_lazuli',
     C: 'productivebees:upgrade_time',
     B: 'minecraft:experience_bottle'
 })
 })
