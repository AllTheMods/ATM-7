onEvent('recipes', e => {
 e.remove({id: 'aeinfinitybooster:infinity_card'})
 e.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
    U: '#forge:ingots/unobtainium',
    B: 'ae2:wireless_booster',
    E: 'alltheores:enderium_plate',
	N: 'minecraft:netherite_ingot'
})
})