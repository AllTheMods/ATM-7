onEvent('recipes', e => {
  modifyShaped(e, 'immersiveengineering:sawdust', 6, ['   ', 'SSS', 'SSS'], {
    S: '#forge:dusts/wood'
  })

  removeRecipeByID(e, [
    'immersiveengineering:crafting/paper_from_sawdust',
  ])
})
