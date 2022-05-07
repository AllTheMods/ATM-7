onEvent('recipes', e => {
	//SOIL FUNCTION
	function soil(inputSoil, inputTag, inputTickModifier, inputDisplay) {
		inputDisplay = inputDisplay || inputSoil
		e.custom({
			type: 'bonsaitrees3:soil',
			tickModifier: inputTickModifier,
			soil: {'item': inputSoil},
			compatibleSoilTags: [ inputTag ],
			display: {'block': inputDisplay}
		}).id(`kubejs:bonsaitrees3/soil/${inputSoil.replace(':', '/')}`)
	}
	
	//SOILS
	// BYG Soils
	soil('byg:bulbis_phycelium', 'bulbis_phycelium', 1.0)
	soil('byg:embur_nylium', 'embur_nylium', 1.0)
	soil('byg:ether_phylium', 'ether_phylium', 1.0)
	soil('byg:imparius_phylium', 'imparius_phylium', 1.0)
	soil('byg:mycelium_netherrack', 'mycelium_netherrack', 1.0)
	soil('byg:nightshade_phylium', 'nightshade_phylium', 1.0)
	soil('byg:overgrown_netherrack', 'overgrown_netherrack', 1.0)
	soil('byg:shulkren_phylium', 'shulkren_phylium', 1.0)
	soil('byg:sythian_nylium', 'sythian_nylium', 1.0)
	soil('byg:warped_soul_sand', 'warped_soul_sand', 1.0)
	// Minecraft Soils
	soil('minecraft:dirt', 'dirt', 1.1)
	soil('minecraft:grass_block', 'grass', 1.0)
	soil('minecraft:mycelium', 'mycelium', 1.0)
	soil('minecraft:netherrack', 'netherrack', 1.1)
	soil('minecraft:sand', 'sand', 1.0)
	soil('minecraft:water_bucket', 'water', 1.0, 'minecraft:water')
	
	// BONSAI FUNCTIONS
	function bonsaiBuildResults (results) {
		let tempResults = []
		results.forEach(result => {
			let silkTouch = result[3] || false
			let bees = result[4] || false
			
			tempResults.push({
				'rolls': result[0],
				'chance': result[1],
				'result': {
					'item': result[2]
				},
				'requiresSilkTouch': silkTouch,
				'requiresBees': bees
			})
		})
		return tempResults
	}
	
	// 'results' is an Array of Arrays. Sub-Arrays must be arranged as '[Rolls, Chance, Item, SilkTouch, Bees]' Silk Touch and Bees are optional (default = fasle)
	// 'soilTags' is a string Array
	function bonsai(inputItem, results, soilTags) {
		// Set default soilTags
		soilTags = soilTags || ['grass', 'dirt']
		//results = bonsaiBuildResults(results)
		
		// Creates Bonsai Pot Recipe
		e.custom({
			type: 'bonsaitrees3:sapling',
			'sapling': {
				'item': inputItem
			},
			'drops': bonsaiBuildResults(results),
			'compatibleSoilTags': soilTags
		}).id(`kubejs:bonsaitrees3/sapling/${inputItem.replace(':', '/')}`)
	}
	
	function bonsaiDouble(inputItems, results, soilTags) {
		// Set default soilTags
		soilTags = soilTags || ['grass', 'dirt']
		//results = bonsaiBuildResults(results)
		
		//Creates Bonsai Pot Recipe
		e.custom({
			type: 'bonsaitrees3:sapling',
			'sapling': {
				'item': inputItems[0],
				'item': inputItems[1]
			},
			'drops': bonsaiBuildResults(results),
			'compatibleSoilTags': soilTags
		}).id(`kubejs:bonsaitrees3/sapling/${inputItems[0].replace(':', '/')}`)
	}
	
	function bonsaiTriple(inputItems, results, soilTags) {
		// Set default soilTags
		soilTags = soilTags || ['grass', 'dirt']
		//results = bonsaiBuildResults(results)
		
		//Creates Bonsai Pot Recipe
		e.custom({
			type: 'bonsaitrees3:sapling',
			'sapling': {
				'item': inputItems[0],
				'item': inputItems[1],
				'item': inputItems[2]
			},
			'drops': bonsaiBuildResults(results),
			'compatibleSoilTags': soilTags
		}).id(`kubejs:bonsaitrees3/sapling/${inputItems[0].replace(':', '/')}`)
	}
	
	function bonsaiStandard (inputName, inputMod) {
		bonsai(`${inputMod}:${inputName}_sapling`, [[1, 0.05, `${inputMod}:${inputName}_sapling`], [1, 0.75, `${inputMod}:${inputName}_log`], [3, 0.2, 'minecraft:stick'], [2, 0.2, `${inputMod}:${inputName}_leaves`, true]])
	}
	
	function bonsaiStandardBulk (inputNames, inputMod) {
		inputNames.forEach(inputName => {
			bonsaiStandard(inputName, inputMod)
		})
	}
	
	// BONSAI POT RECIPES
	// BYG Standard
	let standardBygBonsai = [
		'aspen',
		'blue_enchanted',
		'cika',
		'cypress',
		'ebony',
		'fir',
		'green_enchanted',
		'mahogany',
		'maple',
		'pine',
		'rainbow_eucalyptus',
		'redwood',
		'willow',
		'zelkova'
	]
	bonsaiStandardBulk(standardBygBonsai, 'byg')
	//BYG Non-Standard
	bonsai('byg:araucaria_sapling', [[1, 0.05, 'byg:araucaria_sapling'], [1, 0.75, 'byg:pine_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:araucaria_leaves', true]])
	bonsai('byg:baobab_sapling', [[1, 0.05, 'byg:baobab_sapling'], [1, 0.75, 'byg:baobab_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:baobab_leaves', true], [1, 0.05, 'byg:baobab_fruit', false, true]])
	bonsai('byg:blue_spruce_sapling', [[1, 0.05, 'byg:blue_spruce_sapling'], [1, 0.75, 'minecraft:spruce_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:blue_spruce_leaves', true]])
	bonsai('byg:brown_birch_sapling', [[1, 0.05, 'byg:brown_birch_sapling'], [1, 0.75, 'minecraft:birch_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:brown_birch_leaves', true]])
	bonsai('byg:brown_oak_sapling', [[1, 0.05, 'byg:brown_oak_sapling'], [1, 0.75, 'minecraft:oak_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:brown_oak_leaves', true]])
	bonsai('byg:brown_zelkova_sapling', [[1, 0.05, 'byg:brown_zelkova_sapling'], [1, 0.75, 'byg:zelkova_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:brown_zelkova_leaves', true]])
	bonsaiDouble(['byg:bulbis_anomaly', 'byg:bulbis_oddity'], [[2, 0.2, 'byg:bulbis_anomaly'], [2, 0.2, 'byg:bulbis_oddity'], [1, 0.75, 'byg:bulbis_wood'], [2, 0.18, 'byg:bulbis_shell', true], [1, 0.05, 'byg:purple_shroomlight', true]], ['bulbis_phycelium'])
	bonsai('byg:death_cap', [[3, 0.2, 'byg:death_cap'], [1, 0.75, 'minecraft:mushroom_stem', true], [2, 0.2, 'byg:death_cap_mushroom_block', true]], ['mycelium_netherrack'])
	bonsai('byg:embur_wart', [[3, 0.2, 'byg:embur_wart'], [1, 0.75, 'byg:embur_pedu'], [2, 0.18, 'byg:embur_gel_block', true], [1, 0.05, 'byg:embur_gel_branch', true], [1, 0.05, 'byg:pollen_block', true, true], [1, 0.05, 'byg:pollen_dust', false, true], [1, 0.05, 'byg:embur_gel_vines', true], [1, 0.05, 'byg:embur_gel_ball']], ['embur_nylium'])
	bonsai('byg:ether_sapling', [[1, 0.05, 'byg:ether_sapling'], [1, 0.75, 'byg:ether_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:ether_leaves', true], [1, 0.05, 'byg:ether_foliage', true], [1, 0.05, 'byg:ether_bulbs', false, true]], ['ether_phylium'])
	bonsai('byg:fungal_imparius', [[3, 0.2, 'byg:fungal_imparius'], [1, 0.75, 'byg:fungal_imparius_stem'], [2, 0.18, 'byg:fungal_imparius_block', true], [1, 0.05, 'byg:fungal_imparius_filament_block', true], [1, 0.05, 'byg:fungal_imparius_filament', true]], ['imparius_phylium'])
	bonsai('byg:green_mushroom', [[1, 0.75, 'byg:white_mushroom_stem', true], [3, 0.2, 'byg:green_mushroom'], [2, 0.2, 'byg:green_mushroom_block', true]], ['mycelium'])
	bonsai('byg:holly_sapling', [[1, 0.05, 'byg:holly_sapling'], [1, 0.75, 'byg:holly_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:holly_leaves', true], [1, 0.05, 'byg:holly_berry_leaves', true, true], [1, 0.05, 'minecraft:sweet_berries', false, true]])
	bonsai('byg:imparius_mushroom', [[3, 0.2, 'byg:imparius_mushroom'], [1, 0.75, 'byg:imparius_stem'], [2, 0.18, 'byg:imparius_mushroom_block', true], [1, 0.05, 'byg:imparius_mushroom_block'], [1, 0.05, 'byg:imparius_vine', true]], ['imparius_phylium'])
	bonsaiTriple(['byg:indigo_jacaranda_sapling', 'byg:indigo_jacaranda_bush', 'byg:flowering_indigo_jacaranda_bush'], [[1, 0.05, 'byg:indigo_jacaranda_sapling'], [1, 0.75, 'byg:jacaranda_log'], [3, 0.2, 'minecraft:stick'], [1, 0.18, 'byg:indigo_jacaranda_leaves', true], [1, 0.05, 'byg:flowering_indigo_jacaranda_leaves', true, true]])
	bonsaiTriple(['byg:jacaranda_sapling', 'byg:jacaranda_bush', 'byg:flowering_jacaranda_bush'], [[1, 0.05, 'byg:jacaranda_sapling'], [1, 0.75, 'byg:jacaranda_log'], [3, 0.2, 'minecraft:stick'], [1, 0.18, 'byg:jacaranda_leaves', true], [1, 0.05, 'byg:flowering_jacaranda_leaves', true, true]])
	bonsai('byg:joshua_sapling', [[1, 0.05, 'byg:joshua_sapling'], [1, 0.75, 'minecraft:oak_log'], [3, 0.2, 'minecraft:stick'], [1, 0.18, 'byg:joshua_leaves', true], [1, 0.05, 'byg:ripe_joshua_leaves', true, true], [1, 0.05, 'byg:joshua_fruit', false, true]])
	bonsai('byg:lament_sapling', [[1, 0.05, 'byg:lament_sapling'], [1, 0.75, 'byg:lament_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:lament_leaves', true], [1, 0.05, 'minecraft:shroomlight', true]], ['netherrack', 'overgrown_netherrack'])
	bonsai('byg:nightshade_sapling', [[1, 0.05, 'byg:nightshade_sapling'], [1, 0.75, 'byg:nightshade_log'], [1, 0.05, 'byg:imbued_nightshade_log'], [3, 0.2, 'minecraft:stick'], [1, 0.2, 'byg:nightshade_leaves', true], [1, 0.1, 'byg:flowering_nightshade_leaves', true]], ['nightshade_phylium'])
	bonsai('byg:orange_birch_sapling', [[1, 0.05, 'byg:orange_birch_sapling'], [1, 0.75, 'minecraft:birch_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:orange_birch_leaves', true]])
	bonsai('byg:orange_oak_sapling', [[1, 0.05, 'byg:orange_oak_sapling'], [1, 0.75, 'minecraft:birch_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:orange_oak_leaves', true]])
	bonsai('byg:orange_spruce_sapling', [[1, 0.05, 'byg:orange_spruce_sapling'], [1, 0.75, 'minecraft:birch_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:orange_spruce_leaves', true]])
	bonsai('byg:orchard_sapling', [[1, 0.05, 'byg:orchard_sapling'], [1, 0.75, 'minecraft:oak_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:orchard_leaves', true], [1, 0.05, 'byg:flowering_orchard_leaves', true, true], [1, 0.05, 'byg:ripe_orchard_leaves', true, true], [1, 0.05, 'minecraft:apple', false, true]])
	bonsai('byg:palm_sapling', [[1, 0.01, 'byg:palm_sapling'], [1, 0.75, 'byg:palm_log'], [3, 0.2, 'minecraft:stick'], [1, 0.2, 'byg:palm_leaves', true]], ['sand'])
	bonsai('byg:palo_verde_sapling', [[1, 0.05, 'byg:palo_verde_sapling'], [1, 0.75, 'byg:palo_verde_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:palo_verde_leaves', true], [1, 0.05, 'byg:flowering_palo_verde_leaves', true, true]])
	bonsai('byg:pink_cherry_sapling', [[1, 0.05, 'byg:pink_cherry_sapling'], [1, 0.75, 'byg:cherry_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:pink_cherry_leaves'], [1, 0.05, 'byg:pink_cherry_foliage', true]])
	bonsaiDouble(['byg:purple_bulbis_anomaly', 'byg:purple_bulbis_oddity'], [[2, 0.2, 'byg:purple_bulbis_anomaly'], [2, 0.2, 'byg:purple_bulbis_oddity'], [1, 0.75, 'byg:bulbis_wood'], [2, 0.18, 'byg:purple_bulbis_shell', true], [1, 0.05, 'byg:purple_shroomlight', true]], ['bulbis_phycelium'])
	bonsai('byg:red_birch_sapling', [[1, 0.05, 'byg:red_birch_sapling'], [1, 0.75, 'minecraft:birch_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:red_birch_leaves', true]])
	bonsai('byg:red_maple_sapling', [[1, 0.05, 'byg:red_maple_sapling'], [1, 0.75, 'byg:maple_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:red_maple_leaves', true]])
	bonsai('byg:red_oak_sapling', [[1, 0.05, 'byg:red_oak_sapling'], [1, 0.75, 'minecraft:birch_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:red_oak_leaves', true]])
	bonsai('byg:red_spruce_sapling', [[1, 0.05, 'byg:red_spruce_sapling'], [1, 0.75, 'minecraft:birch_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:red_spruce_leaves', true]])
	bonsai('byg:shulkren_fungus', [[3, 0.2, 'byg:shulkren_fungus'], [1, 0.75, 'byg:white_mushroom_stem', true], [2, 0.18, 'byg:shulkren_wart_block', true], [1, 0.05, 'byg:purple_shroomlight', true], [1, 0.05, 'byg:shulkren_vine', true]], ['shulkren_phylium'])
	bonsai('byg:silver_maple_sapling', [[1, 0.05, 'byg:silver_maple_sapling'], [1, 0.75, 'byg:maple_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:silver_maple_leaves', true]])
	bonsai('byg:skyris_sapling', [[1, 0.05, 'byg:skyris_sapling'], [1, 0.75, 'byg:skyris_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:skyris_leaves', true], [1, 0.05, 'byg:green_apple_skyris_leaves', true, true], [1, 0.05, 'byg:green_apple', false, true]])
	bonsai('byg:soul_shroom', [[3, 0.2, 'byg:soul_shroom'], [1, 0.75, 'byg:soul_shroom_stem', true], [2, 0.18, 'byg:soul_shroom_block', true], [1, 0.05, 'byg:soul_shroom_spore_end', true]], ['mycelium'])
	bonsai('byg:sythian_fungus', [[3, 0.2, 'byg:sythian_fungus'], [1, 0.75, 'byg:sythian_stem', true], [2, 0.18, 'byg:sythian_wart_block', true], [1, 0.05, 'byg:hanging_sythian_roots', true], [1, 0.05, 'minecraft:shroomlight', true]], ['sythian_nylium'])
	bonsai('byg:warped_coral', [[1, 0.05, 'byg:warped_coral', true], [1, 0.75, 'byg:warped_coral_block', true]], ['warped_soul_sand'])
	bonsai('byg:weeping_milkcap', [[3, 0.2, 'byg:weeping_milkcap'], [1, 0.75, 'minecraft:mushroom_stem', true], [2, 0.2, 'byg:weeping_milkcap_mushroom_block', true]], ['mycelium'])
	bonsai('byg:white_cherry_sapling', [[1, 0.05, 'byg:white_cherry_sapling'], [1, 0.75, 'byg:cherry_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:white_cherry_leaves', true], [1, 0.05, 'byg:white_cherry_foliage', true]])
	bonsai('byg:witch_hazel_sapling', [[1, 0.05, 'byg:witch_hazel_sapling'], [1, 0.75, 'byg:witch_hazel_log'], [3, 0.2, 'minecraft:stick'], [1, 0.18, 'byg:witch_hazel_leaves', true], [1, 0.05, 'byg:blooming_witch_hazel_leaves', true, true]])
	bonsai('byg:withering_oak_sapling', [[1, 0.05, 'byg:withering_oak_sapling'], [1, 0.75, 'byg:withering_oak_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'byg:withering_oak_leaves', true], [1, 0.05, 'byg:arisian_bloom_branch', true, true]], ['netherrack', 'overgrown_netherrack'])
	bonsai('byg:wood_blewit', [[3, 0.2, 'byg:wood_blewit'], [1, 0.75, 'byg:brown_mushroom_stem', true], [2, 0.2, 'byg:wood_blewit_mushroom_block', true]], ['mycelium'])
	bonsai('byg:yellow_birch_sapling', [[1, 0.05, 'byg:yellow_birch_sapling'], [1, 0.75, 'minecraft:birch_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:yellow_birch_leaves', true]])
	bonsai('byg:yellow_spruce_sapling', [[1, 0.05, 'byg:yellow_spruce_sapling'], [1, 0.75, 'minecraft:birch_log'], [3, 0.2, 'minecraft:stick'], [2, 0.2, 'byg:yellow_spruce_leaves', true]])
	// Forbidden Arcanus
	bonsai('forbidden_arcanus:cherrywood_sapling', [[1, 0.05, 'forbidden_arcanus:cherrywood_sapling'], [1, 0.7, 'forbidden_arcanus:thin_cherrywood_log'], [1, 0.1, 'forbidden_arcanus:cherrywood_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'forbidden_arcanus:cherrywood_leaves', true], [1, 0.05, 'forbidden_arcanus:cherry_flower_vines', true, true], [1, 0.05, 'forbidden_arcanus:cherrywood_leaf_carpet', true]])
	bonsai('forbidden_arcanus:mysterywood_sapling', [[1, 0.05, 'forbidden_arcanus:mysterywood_sapling'], [1, 0.75, 'forbidden_arcanus:mysterywood_log'], [3, 0.2, 'minecraft:stick'], [2, 0.18, 'forbidden_arcanus:mysterywood_leaves', true], [1, 0.05, 'forbidden_arcanus:nuggety_mysterywood_leaves', true, true]])
	// Nature's Aura
	bonsaiStandard('ancient', 'naturesaura')
})