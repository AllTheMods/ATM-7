onEvent('recipes', e => {
	// Mekanism Sulpher stackable into BGY Brimstone and interoperable with BYG Brim Dust
	e.shapeless('byg:brimstone', ['9x #forge:dusts/sulfur'])
	e.shapeless('9x mekanism:dust_sulfur', ['byg:brimstone'])
	e.custom({type: 'mekanism:oxidizing', input: { 'ingredient': {'item': 'byg:brimstone'}}, output: { 'gas': 'mekanism:sulfur_dioxide', 'amount': 900}})
	e.custom({type: 'mekanism:gas_conversion', input: { 'ingredient': {'item': 'byg:brimstone'}}, output: { 'gas': 'mekanism:sulfuric_acid', 'amount': 18}})
	e.replaceInput({}, 'byg:brim_powder', '#forge:dusts/sulfur')
	e.remove({type: 'minecraft:stonecutting', output: 'byg:brim_powder'})
	
	// Changes the output of the 'Coal/Charcoal Block => 9x Sulfur' to instead be 'Coal/Charcoal Block => 1x Brimstone'
	e.remove({id: 'mekanism:reaction/coal_gasification/blocks_coals'})
	
	e.custom({
		type: 'mekanism:reaction',
		itemInput: {
			'ingredient': [{
				'tag': 'forge:storage_blocks/coal'
			},
			{
				'tag': 'forge:storage_blocks/charcoal'
			}]
		},
		fluidInput: {
			'amount': 1000,
			'tag': 'minecraft:water'
		},
		gasInput: {
			'amount': 1000,
			'gas': 'mekanism:oxygen'
		},
		duration: 900,
		itemOutput: {
			'item': 'byg:brimstone',
			'count': 1
		},
		gasOutput: {
			'gas': 'mekanism:hydrogen',
			'amount': 1000
		}
	}).id('mekanism:reaction/coal_gasification/blocks_coals')
})

onEvent('tags.items', e => {
  // Get the #forge:dusts/sulfur tag collection and add Brim Powder to it
  e.add('forge:dusts/sulfur', 'byg:brim_powder')
  e.add('forge:storage_blocks', 'byg:brimstone')
  e.add('forge:storage_blocks/sulfur', 'byg:brimstone')
})