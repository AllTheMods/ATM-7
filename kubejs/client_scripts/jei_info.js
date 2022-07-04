onEvent('jei.information', e => {

  e.add('thermal:bitumen', ['Byproduct of refining Oil in a Distillation Tower'])
  e.add('mekanism:creative_energy_cube', ['To fill the Cube you have to get 2x Ultimate Induction Providers, 2x filled Ultimate Energy Cubes and an ATM Star.',
    '',
    'You must build a multiblock structure in a horizontal line by placing the Creative Cube down with the Providers on either sides and the Ultimate Cubes at the end.',
    '',
    'All you have to do now, is to make sure your cubes are filled, after which you can Shift + RClick the Creative Cube with the Star.'])

  e.add('enderchests:ender_chest', [
    'Cross-dimensional wireless item transfer to any chest on the same channel.',
    'Use dye on the colored bars to set the channel.',
    'Sneak + right-click with a diamond to switch to private channel.',
    'Sneak + right-click with an ender pearl or eye of ender to increase inventory size.',
  ])

  e.add('endertanks:ender_tank', [
    'Cross-dimensional wireless fluid transfer to any tank on the same channel.',
    'Use dye on the colored bars to set the channel.',
    'Sneak + right-click with a diamond to switch to private channel.',
    'Sneak + right-click with an ender pearl or eye of ender to increase tank size.',
  ])
})