onEvent('recipes', e => {
	//SAWING
	// 'inputItem is an ITEM TAG
	// 'outputItem' is an Array that must be formatting as follows '[itemID, amount (optional default 1)]'
	// 'outputExtra' is an Array that must be formatting as follows '[itemID, chance, amount (optional default 1)]
	function sawing (inputItem, outputItem, outputExtra) {
		let outputAmount = outputItem[1] || 1
		let outputExtraAmount = outputExtra [2] || 1
		
		e.custom({
			type: 'mekanism:sawing',
			input: {
				'ingredient': {
					'tag': inputItem
				}
			},
			mainOutput: {
				'item': outputItem[0],
				'count': outputAmount
			},
			secondaryOutput: {
				'item': outputExtra[0],
				'count': outputExtraAmount
			},
			secondaryChance: outputExtra[1]
		})
	}
	
	function sawingLogs(inputMod, inputItemName) {
		sawing(`${inputMod}:${inputItemName}_logs`, [`${inputMod}:${inputItemName}_planks`, 6], ['mekanism:sawdust', 0.25])
	}
	
	function sawingLogsBulk (inputMod, inputItemNames) {
		inputItemNames.forEach( itemName => {
			sawingLogs(inputMod, itemName)
		})
	}
	
	// AllTheModium Logs
	let logCollectionATM = [
		'ancient',
		'demonic',
		'soul'
	]
	sawingLogsBulk('allthemodium', logCollectionATM)
	
	// Ars Nouveau Logs
	sawing('forge:logs/archwood', ['ars_nouveau:archwood_planks', 6], ['mekanism:sawdust', 0.25])
	
	// Botania Logs
	let logsCollectionBotania = [
		'dreamwood',
		'livingwood'
	]
	sawingLogsBulk('botania', logsCollectionBotania)
	
	// BYG Logs
	sawing('byg:imbued_nightshade_logs', ['byg:nightshade_planks', 6], ['byg:therium_shard', 0.25])
	
	// EvilCraft Logs
	sawingLogs('evilcraft', 'undead')
	
	//Forbidden Arcanus Logs
	sawingLogs('forbidden_arcanus', 'cherrywood')
	sawing('forbidden_arcanus:edelwood_logs', ['forbidden_arcanus:edelwood_planks', 3], ['mekanism:sawdust', 0.15])
	sawing('forbidden_arcanus:fungyss_stems', ['forbidden_arcanus:fungys_planks', 6], ['mekanism:sawdust', 0.25])
	sawingLogs('forbidden_arcanus', 'mysterywood')
	
	// Hexerei Logs
	sawingLogs('hexerei', 'mahogany')
	sawingLogs('hexerei', 'willow')
	
	// Integrated Dynamics Logs
	sawingLogs('integrateddynamics', 'menril')
	
	// Nature's Aura Logs
	sawing('naturesaura:ancient_logs', ['naturesaura:ancient_planks', 3], ['mekanism:sawdust', 0.15])
	
	// Silent Gear Logs
	sawingLogs('silentgear', 'netherwood')
})

onEvent('tags.items', e => {
  // Create the #allthemodium:ancient_logs tag collection
  e.add('allthemodium:ancient_logs', 'allthemodium:ancient_log_0')
  e.add('allthemodium:ancient_logs', 'allthemodium:ancient_log_1')
  e.add('allthemodium:ancient_logs', 'allthemodium:ancient_log_2')
  e.add('allthemodium:ancient_logs', 'allthemodium:stripped_ancient_log')
  
  // Create the #allthemodium:demonic_logs tag collection
  e.add('allthemodium:demonic_logs', 'allthemodium:demonic_log')
  
  // Create the #allthemodium:soul_logs tag collection
  e.add('allthemodium:soul_logs', 'allthemodium:soul_log')
  e.add('allthemodium:soul_logs', 'allthemodium:soul_log_0')
  e.add('allthemodium:soul_logs', 'allthemodium:soul_log_1')
  e.add('allthemodium:soul_logs', 'allthemodium:soul_log_2')
  e.add('allthemodium:soul_logs', 'allthemodium:stripped_soul_log')
  
  // Create the #byg:imbued_nightshade_logs tag collection
  e.add('byg:imbued_nightshade_logs', 'byg:imbued_nightshade_log')
  
  // Create the #hexerei:mahogany_logs tag collection
  e.add('hexerei:mahogany_logs', 'hexerei:stripped_mahogany_wood')
  e.add('hexerei:mahogany_logs', 'hexerei:stripped_mahogany_log')
  e.add('hexerei:mahogany_logs', 'hexerei:mahogany_wood')
  e.add('hexerei:mahogany_logs', 'hexerei:mahogany_log')
  
  // Create the #hexerei:willow_logs tag collection
  e.add('hexerei:willow_logs', 'hexerei:stripped_willow_wood')
  e.add('hexerei:willow_logs', 'hexerei:stripped_willow_log')
  e.add('hexerei:willow_logs', 'hexerei:willow_wood')
  e.add('hexerei:willow_logs', 'hexerei:willow_log')
  
  // Create the #naturesaura:ancient_logs tag collection
  e.add('naturesaura:ancient_logs', 'naturesaura:ancient_log')
})