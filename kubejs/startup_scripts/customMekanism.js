onEvent('mekanism.slurry.registry', event => {
	event.create("dirty_cobalt", "dirty").color(0x0043A5).ore('forge:ores/cobalt')
	event.create("clean_cobalt", "clean").color(0x0043A5).ore('forge:ores/cobalt')
})

onEvent('item.registry',event => {
    event.create('clump_cobalt').displayName('Cobalt Clump')
    event.create('crystal_cobalt').displayName('Cobalt Crystal')
    event.create('dirty_dust_cobalt').displayName('Dirty Cobalt Dust')
    event.create('shard_cobalt').displayName('Cobalt Shard')
})