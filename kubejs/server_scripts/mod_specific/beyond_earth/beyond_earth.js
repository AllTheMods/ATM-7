onEvent('recipes', e => {
  e.remove({output: 'beyond_earth:steel_ingot'})
  e.shapeless('beyond_earth:steel_ingot', '4x #forge:ingots/steel')
  e.shapeless('beyond_earth:compressed_steel', '4x #forge:plates/steel')
  })
  