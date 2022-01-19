onEvent('recipes', e => {
  e.remove({id: 'immersiveengineering:smelting/ingot_steel_from_dust'})
  e.remove({id: 'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting'})
  e.remove({id: 'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting'})
  e.remove({id: 'immersiveengineering:crafting/nugget_steel_to_ingot_steel'})
  e.remove({id: 'immersiveengineering:crafting/storage_steel_to_ingot_steel'})
  e.remove({id: 'immersiveengineering:crusher/nether_wart'})
  e.remove({id: 'immersiveengineering:crafting/concrete2'})
  e.remove({id: 'immersiveengineering:cloche'})
  e.shaped('immersiveengineering:cloche', ['GEG', 'G G', 'TRT'], {
    G: '#forge:glass',
    E: 'immersiveengineering:electron_tube',
    T: '#forge:treated_wood',
    R: 'immersiveengineering:logic_unit'
  })
  //immersiveengineeringCrusher
  e.recipes.immersiveengineeringCrusher('3x alltheores:iron_dust', '#forge:ores/iron')
  e.recipes.immersiveengineeringCrusher('3x alltheores:gold_dust', '#forge:ores/gold')
  e.recipes.immersiveengineeringCrusher('3x alltheores:copper_dust', '#forge:ores/copper')
  e.recipes.immersiveengineeringCrusher('3x alltheores:silver_dust', '#forge:ores/silver')
  e.recipes.immersiveengineeringCrusher('3x alltheores:lead_dust', '#forge:ores/lead')
  e.recipes.immersiveengineeringCrusher('3x alltheores:tin_dust', '#forge:ores/tin')
  e.recipes.immersiveengineeringCrusher('3x alltheores:uranium_dust', '#forge:ores/uranium')
  e.recipes.immersiveengineeringCrusher('3x alltheores:zinc_dust', '#forge:ores/zinc')
  e.recipes.immersiveengineeringCrusher('3x alltheores:aluminum_dust', '#forge:ores/aluminum')
  e.recipes.immersiveengineeringCrusher('3x alltheores:nickel_dust', '#forge:ores/nickel')
  e.recipes.immersiveengineeringCrusher('3x alltheores:osmium_dust', '#forge:ores/osmium')
  e.recipes.immersiveengineeringCrusher('3x alltheores:platinum_dust', '#forge:ores/platinum')
  e.recipes.immersiveengineeringCrusher('1x allthemodium:allthemodium_dust', '#forge:ores/allthemodium')
  e.recipes.immersiveengineeringCrusher('1x allthemodium:vibranium_dust', '#forge:ores/vibranium')
  e.recipes.immersiveengineeringCrusher('1x allthemodium:unobtainium_dust', '#forge:ores/unobtainium')
})
