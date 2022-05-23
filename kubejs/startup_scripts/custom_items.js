// priority: 0

onEvent('item.registry', event => {
	// Register new items here
	event.create('cobalt_dust').displayName('Cobalt Dust')
})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create('magical_soil').displayName('§bMagical Soil').material('grass').hardness(0.6);
})