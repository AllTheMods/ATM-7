onEvent('recipes', e => {
 e.remove({id: 'aeinfinitybooster:infinity_card'})
 e.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
    U: '#forge:ingots/unobtainium',
    B: 'ae2:wireless_booster',
    E: 'alltheores:enderium_plate',
	N: 'minecraft:netherite_ingot'
})
e.shaped('ae2:calculation_processor_press', ['III', 'ISI', 'III'], {
    I: '#forge:ingots/iron',
	S: 'ae2:sky_stone_block'
})
e.shaped('ae2:engineering_processor_press', ['III', 'ISI', 'III'], {
    I: '#forge:ingots/iron',
	S: 'ae2:smooth_sky_stone_block'
})
e.shaped('ae2:logic_processor_press', ['III', 'ISI', 'III'], {
    I: '#forge:ingots/iron',
	S: 'ae2:sky_stone_brick'
})
e.shaped('ae2:silicon_press', ['III', 'ISI', 'III'], {
    I: '#forge:ingots/iron',
	S: 'ae2:sky_stone_small_brick'
})

e.recipes.mekanismCrushing('thermal:quartz_dust', 'minecraft:quartz')
e.recipes.immersiveengineeringCrusher('thermal:quartz_dust', 'minecraft:quartz')
e.recipes.createCrushing('thermal:quartz_dust', 'minecraft:quartz')
e.recipes.ftbic.macerating('thermal:quartz_dust', 'minecraft:quartz')
e.smelting('ae2:silicon','#forge:dusts/quartz').xp(0.35)
e.blasting('ae2:silicon','#forge:dusts/quartz').xp(0.35)

  
})
