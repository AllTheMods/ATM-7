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
