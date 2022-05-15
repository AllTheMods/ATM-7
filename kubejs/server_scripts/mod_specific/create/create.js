onEvent('recipes', e => {
  e.recipes.create.mechanical_crafting('create:creative_motor', ['CLC', 'HSH', 'LGL'], {
    C: 'create:cogwheel',
    L: 'create:large_cogwheel',
    H: 'create:shaft',
    S: 'allthetweaks:atm_star',
    G: 'create:gearbox'
  })

  e.recipes.create.mixing('create:creative_blaze_cake', [
    'createaddition:chocolate_cake',
    'allthetweaks:atm_star',
    'createaddition:honey_cake'
  ]).superheated().processingTime(6000).id('kubejs:create/creative_blaze_cake')
})
