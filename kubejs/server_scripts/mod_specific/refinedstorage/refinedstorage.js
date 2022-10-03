 onEvent('recipes', e => {
	e.shaped('extrastorage:iron_crafter', ['B B', 'PCP', 'B B'], {
    B: '#forge:storage_blocks/iron',
    P: 'refinedstorage:improved_processor',
    C: '#refinedstorage:crafter'
  })
  
  //Cable Tiers
  function caTier(tier, corners, processor, cables) {
    Utils.listOf(['importer', 'exporter', 'constructor', 'destructor', 'disk_manipulator', 'requester']).forEach(caType => {
      e.shaped(`cabletiers:${tier}_${caType}`, [`a a`, `bcb`, `a a`], {
        a: corners,
        b: processor,
        c: `${(caType == 'requester' && tier == 'elite') ? 'rsrequestify:' : cables}${caType}`
      })
    })
  }

  e.remove({ mod: 'cabletiers' })
  
  caTier(`elite`, `#forge:storage_blocks/iron`, `refinedstorage:improved_processor`, `refinedstorage:`)
  caTier(`ultra`, `#forge:storage_blocks/diamond`, `refinedstorage:advanced_processor`, `cabletiers:elite_`)
  caTier(`creative`, `#forge:storage_blocks/netherite`, `extradisks:withering_processor`, `cabletiers:ultra_`)
  
  //Creative Crafter
  e.shaped(`creativecrafter:creative_crafter`, [`BUB`, `PCP`, `BUB`], {
    B: `#forge:storage_blocks/netherite`,
    P: `extradisks:withering_processor`,
    C: `extrastorage:netherite_crafter`,
    U: `#forge:ingots/unobtainium`
  }).id(`kubejs:creativecrafter/creative_crafter`)
  
  //gold-netherite crafter temp till mod updates with proper tags
  modifyShaped(e, 'extrastorage:gold_crafter', 1, ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/gold',
    P: 'extrastorage:neural_processor',
    C: 'extrastorage:iron_crafter'
  })
  modifyShaped(e, 'extrastorage:diamond_crafter', 1, ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    C: 'extrastorage:gold_crafter'
  })
  modifyShaped(e, 'extrastorage:netherite_crafter', 1, ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/netherite',
    P: 'extrastorage:neural_processor',
    C: 'extrastorage:diamond_crafter'
  })
  e.shaped('extradisks:1024k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:256k_storage_part',
    b: '#forge:dusts/redstone',
    n: 'refinedstorage:quartz_enriched_iron'
  }).id('kubejs:1024k_storage_part')
  e.shaped('refinedstorage:4096k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'refinedstorage:1024k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:nuggets/allthemodium'
  })
  e.shaped('extradisks:4096k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1024k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:nuggets/allthemodium'
  })
  e.shaped('extradisks:16384k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'refinedstorage:4096k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/allthemodium'
  })
  e.shaped('extradisks:16384k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:4096k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  })
  e.shaped('extradisks:65536k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:16384k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/allthemodium'
  })
  e.shaped('extradisks:65536k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:16384k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  })
  e.shaped('extradisks:262144k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:65536k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/vibranium'
  })
  e.shaped('extradisks:262144k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:65536k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/vibranium'
  })
  e.shaped('extradisks:1048576k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:262144k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/unobtainium'
  })
  e.shaped('extradisks:1048576k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:262144k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/unobtainium'
  })
  e.shaped('extradisks:infinite_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1048576k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/unobtainium'
  })
  e.shaped('extradisks:infinite_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1048576k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/unobtainium'
  })
  removeRecipeByID(e, [
    'extradisks:part/1024k_storage_part',
    'refinedstorage:4096k_fluid_storage_part',
    'extradisks:part/4096k_storage_part',
    'extradisks:part/16384k_fluid_storage_part',
    'extradisks:part/16384k_storage_part',
    'extradisks:part/65536k_fluid_storage_part',
    'extradisks:part/65536k_storage_part',
    'extradisks:part/262144k_fluid_storage_part',
    'extradisks:part/262144k_storage_part',
    'extradisks:part/1048576k_fluid_storage_part',
    'extradisks:part/1048576k_storage_part',
    'extradisks:part/infinite_fluid_storage_part',
    'extradisks:part/infinite_storage_part',
    /^extrastorage:(?:part|disk|storage_block)\/.+/,
	'creativecrafter:creative_crafter',
    'creativewirelesstransmitter:creative_wireless_transmitter',
    'extrastorage:iron_crafter'
  ])
  e.remove({id: 'rsinfinitybooster:infinity_card'})
  e.shaped('rsinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
   U: '#forge:ingots/unobtainium',
   B: 'refinedstorage:range_upgrade',
   E: 'alltheores:enderium_plate',
   N: 'minecraft:netherite_ingot'
  })
})
