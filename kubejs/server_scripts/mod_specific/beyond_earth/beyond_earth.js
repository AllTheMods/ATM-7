onEvent('recipes', e => {
  e.remove({id: 'beyond_earth:steel_ingot'})
  e.remove({id: 'beyond_earth:steel_ingot_from_nugget'})
  e.remove({id: 'beyond_earth:steel_ingot_blasting'})
  e.shapeless('beyond_earth:compressed_steel', '2x #forge:plates/steel')
})
