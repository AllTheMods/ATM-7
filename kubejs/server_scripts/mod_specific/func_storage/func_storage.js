//Remove all functional-storage added recipes and replace them with recipes that use tags for x1, x2 and x4 drawers.
onEvent('recipes', e => {  
    e.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
    e.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})
    e.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})
    e.shaped('functionalstorage:oak_1', ['PPP', 'PCP', 'PPP'], {
        P: '#minecraft:planks',
        C: '#forge:chests/wooden'
    })
    e.shaped('functionalstorage:oak_2', ['PCP', 'PPP', 'PCP'], {
        P: '#minecraft:planks',
        C: '#forge:chests/wooden'
    })
    e.shaped('functionalstorage:oak_4', ['CPC', 'PPP', 'CPC'], {
        P: '#minecraft:planks',
        C: '#forge:chests/wooden'
    })
})
