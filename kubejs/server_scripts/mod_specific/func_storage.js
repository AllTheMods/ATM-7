//replace the default recipe with one that respects the planks tag
onEvent('recipes', e => {
    e.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
    e.shaped('functionalstorage:oak_1', ['PPP', 'PCP', 'PPP'], {
        P: '#minecraft:planks',
        C: '#forge:chests/wooden'
    })
})
