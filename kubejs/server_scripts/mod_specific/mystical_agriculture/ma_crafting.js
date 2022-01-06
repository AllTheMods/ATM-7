onEvent('recipes', e => {
  [
    'apatite',
    'rubber',
    'bronze',
    'brass',
    'graphite',
    'sky_stone',
    'quartz_enriched_iron',
    'steel',
    'constantan',
    'electrum',
    'invar',
    'mithril',
    'tungsten',
    'titanium',
    'chrome',
    'ruby',
    'sapphire',
    'hop_graphite',
    'fluix',
    'iridium',
  ].forEach(name => {
    ['seeds', 'essence'].forEach(type => {
      e.remove({ output: `mysticalagriculture:${name}_${type}` })
      e.remove({ input: `mysticalagriculture:${name}_${type}` })
    })
  })
  e.remove({ id: 'mysticalagriculture:augment/flight' })
  maInfusion(e, 'mysticalagriculture:flight_augment', 'mysticalagriculture:unattuned_augment', 'allthetweaks:nether_star_block', 'allthemodium:unobtainium_block', 'allthetweaks:nether_star_block', 'allthemodium:unobtainium_block', 'allthetweaks:nether_star_block', 'allthemodium:unobtainium_block', 'allthetweaks:nether_star_block', 'allthemodium:unobtainium_block',)
})
