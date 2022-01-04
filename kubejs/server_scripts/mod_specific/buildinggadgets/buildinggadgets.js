onEvent('recipes', e => {
  modifyShaped(e, 'buildinggadgets:gadget_exchanging', 1, ['IRI', 'DLD', 'IAI'], {
    I: '#forge:ingots/iron',
    R: '#forge:dusts/redstone',
    L: '#forge:gems/lapis',
    D: '#forge:gems/diamond',
    A: '#forge:nuggets/allthemodium'
  })
})
