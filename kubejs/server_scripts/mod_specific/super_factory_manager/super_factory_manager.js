onEvent('recipes', event => {
 event.remove({id: 'sfm:manager'})
 event.shaped('sfm:manager', [
    'NCN',
    'CRC',
    'NCN'
  ], {
    C: 'sfm:cable',
    N: 'minecraft:netherite_ingot',
    R: 'advancedperipherals:redstone_integrator',
  })
  })