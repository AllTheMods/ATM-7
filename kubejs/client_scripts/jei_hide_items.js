onEvent('jei.hide.items', e => {
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
  ].forEach(type => {
    e.hide(`mysticalagriculture:${type}_seeds`);
    e.hide(`mysticalagriculture:${type}_essence`);
  })
})
