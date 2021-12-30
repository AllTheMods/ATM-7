onEvent('recipes', event => {
 event.remove({id: 'explorerscompass:explorers_compass'})
 event.shaped('explorerscompass:explorerscompass', [
    'NAN',
    'ACA',
    'NAN'
  ], {
    A: 'allthemodium:allthemodium_ingot',
    N: 'minecraft:netherite_ingot',
    C: 'naturescompass:naturescompass',
  })
  })
