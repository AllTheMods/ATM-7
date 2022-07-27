onEvent('worldgen.remove', e => {
  e.removeOres(ore => {
    ore.blocks = [
      'ftbic:tin_ore',
      'ftbic:deepslate_tin_ore',
      'ftbic:lead_ore',
      'ftbic:deepslate_lead_ore',
      'ftbic:uranium_ore',
      'ftbic:deepslate_uranium_ore',
      'ftbic:aluminum_ore',
      'ftbic:deepslate_aluminum_ore',
      'thermal:tin_ore',
      'thermal:deepslate_tin_ore',
      'thermal:lead_ore',
      'thermal:deepslate_lead_ore',
      'thermal:silver_ore',
      'thermal:deepslate_silver_ore',
      'thermal:nickel_ore',
      'thermal:deepslate_nickel_ore'
    ]
  })
})

onEvent('worldgen.add', event => {
  event.addOre((ore) => {
    ore.id = "kubejs:mining_certus" // optional
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'ae2:quartz_ore')
    ore.addTarget('minecraft:deepslate', 'ae2:deepslate_quartz_ore')
    ore.size(7)     // ores per cluster
    ore.count(20)   // clusters per chunk, can also be a range eg ore.count(15,20)
    ore.squared()
    ore.triangleHeight(-34, 36)
  })
  
    event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_apatite"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:apatite_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_apatite_ore')
    ore.size(7)
    ore.count([4,12])
    ore.squared()
    ore.triangleHeight(-34, 60)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_sulfur"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:sulfur_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_sulfur_ore')
    ore.size(6)
    ore.count([4,8])
    ore.squared()
    ore.triangleHeight(-34, 36)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_niter"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:niter_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_niter_ore')
    ore.size(6)
    ore.count([4,8])
    ore.squared()
    ore.triangleHeight(-34, 36)
  })

  event.addOre((ore) => {
    ore.id = "kubejs:mining_thermal_cinnabar"
    ore.biomes = ['allthemodium:mining']
    ore.addTarget('minecraft:stone', 'thermal:cinnabar_ore')
    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_cinnabar_ore')
    ore.size(6)
    ore.count([3,9])
    ore.squared()
    ore.triangleHeight(-34, 36)
  })
})
