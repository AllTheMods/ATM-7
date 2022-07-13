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
        // ores per cluster
        ore.size(7)
        // clusters per chunk
        // can also be a range   ore.count(15,20)
        ore.count(20)
        ore.squared()
        ore.triangleHeight(-34, 36)
    })
})
