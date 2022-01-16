onEvent('jei.hide.items', e => {
  //#region consts
  let refined = ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
  let typeFirst = ['mekanism', 'immersiveengineering']
  let enviroStonesMats = ['basalt', 'hardened_stone', 'granodiorite', 'marble', 'pumice', 'travertine']
  //#endregion
  //#region functions
  function hideMetal(mod, name, types) {
    types.forEach(type => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }
  function hideStuff(mod, type, names) {
    names.forEach(name => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }
  //#endregion

  e.hide([
    /extrastorage:disk_.+/,
    /extrastorage:block_.+/,
    /extrastorage:storagepart_.+/,
	'beyond_earth:iron_plate'
  ])

  //#region hideMetal
  hideMetal('immersiveengineering', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'aluminum', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'steel', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'electrum', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'constantan', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('mekanism', 'copper', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'tin', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'uranium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'lead', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'osmium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('create', 'copper', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('create', 'zinc', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('thermal', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  //#endregion
  //#region hideStuff
  hideStuff('thermal', 'dust', ['iron', 'gold'])
  hideStuff('immersiveengineering', 'dust', ['iron', 'gold', 'sulfur', 'wood'])
  hideStuff('immersiveengineering', 'plate', ['iron', 'gold', 'copper', 'lead', 'silver', 'nickel', 'constantan', 'electrum', 'steel', 'uranium', 'aluminum'])
  hideStuff('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
  hideStuff('mekanism', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('appliedenergistics2', 'dust', ['nether_quartz', 'ender', 'iron', 'gold'])
  hideStuff('create', 'sheet', ['iron', 'golden', 'copper'])
  hideStuff('iceandfire', 'ore', ['silver', 'copper'])
  hideStuff('tmechworks', 'ore', ['aluminum', 'copper'])
  hideStuff('solarflux', 'sp', [6, 7, 8])
  hideStuff('quark', 'crate', ['apple', 'carrot', 'beetroot', 'potato'])
  hideStuff('quark', 'block', ['bamboo', 'charcoal', 'sugar_cane'])
  hideStuff('mysticalagriculture', 'seeds', ['apatite', 'rubber', 'ruby', 'sapphire', 'basalz', 'blazing_crystal', 'blitz', 'blizz', 'brass', 'bronze', 'compressed_iron', 'constantan', 'chrome', 'electrum', 'elementium', 'ender_biotite', 'energized_steel', 'fluix', 'graphite', 'hop_graphite', 'invar', 'iridium', 'manasteel', 'niotic_crystal', 'nitro_crystal', 'quartz_enriched_iron', 'refined_glowstone', 'refined_obsidian', 'rock_crystal', 'rubber', 'signalum', 'silicon', 'sky_stone', 'spirited_crystal', 'starmetal', 'steel', 'sulfur', 'terrasteel', 'titanium', 'tungsten', 'mithril', 'tinkers_bronze', 'ironwood', 'steeleaf', 'pig_iron', 'slimesteel', 'rose_gold', 'queens_slime', 'manyullyn', 'fiery_ingot', 'knightmetal', 'hepatizon', 'lumium', 'enderium'])
  hideStuff('mysticalagriculture', 'essence', ['apatite', 'rubber', 'ruby', 'sapphire', 'basalz', 'blazing_crystal', 'blitz', 'blizz', 'brass', 'bronze', 'compressed_iron', 'constantan', 'chrome', 'electrum', 'elementium', 'ender_biotite', 'energized_steel', 'fluix', 'graphite', 'hop_graphite', 'invar', 'iridium', 'manasteel', 'niotic_crystal', 'nitro_crystal', 'quartz_enriched_iron', 'refined_glowstone', 'refined_obsidian', 'rock_crystal', 'rubber', 'signalum', 'silicon', 'sky_stone', 'spirited_crystal', 'starmetal', 'steel', 'sulfur', 'terrasteel', 'titanium', 'tungsten', 'mithril', 'tinkers_bronze', 'ironwood', 'steeleaf', 'pig_iron', 'slimesteel', 'rose_gold', 'queens_slime', 'manyullyn', 'fiery_ingot', 'knightmetal', 'hepatizon', 'lumium', 'enderium'])
  //#endregion
})
