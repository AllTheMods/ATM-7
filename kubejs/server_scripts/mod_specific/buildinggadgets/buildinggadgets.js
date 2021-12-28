onEvent('recipes', event => {
 event.remove({id: 'buildinggadgets:gadget_exchanging'})
 event.shaped('buildinggadgets:gadget_exchanging', ['iri', 'dld', 'iai'], {
    i: '#forge:ingots/iron',
    r: '#forge:dusts/redstone',
    l: '#forge:gems/lapis',
    d: '#forge:gems/diamond',
    a: '#forge:nuggets/allthemodium'
  })
})

