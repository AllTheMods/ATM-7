onEvent('recipes', event => {
 event.remove({id: 'angelring:itemdiamondring'})
 event.remove({id: 'angelring:itemring'})
 event.shaped('angelring:itemdiamondring', [
    'DND',
    'VEU',
    'DAD'
  ], {
    D: '#forge:storage_blocks/diamond',
    N: '#forge:storage_blocks/netherite',
    V: '#forge:storage_blocks/vibranium',
    U: '#forge:storage_blocks/unobtainium',
    A: '#forge:storage_blocks/allthemodium',
    E: '#forge:elytra'
  })
 event.shaped('angelring:itemring', [
    'CAC',
    'ARA',
    'DGD'
  ], {
    C: 'allthecompressed:allthemodium_block_1x',
    A: '#forge:storage_blocks/unobtainium',
    R: 'angelring:itemdiamondring',
    D: '#forge:nether_stars',
    G: '#forge:storage_blocks/unobtainium'
  })
  })