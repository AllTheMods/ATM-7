//priority: 997
onEvent('recipes', e => {
  // #region Metal Unification
  function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    e.replaceOutput(`#forge:dusts/${name}`, dustItem)
    e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)

    e.remove({ input: `#forge:ores/${name}`, type: 'immersiveengineering:crusher' })
    e.remove({ input: `#forge:ingots/${name}`, type: 'immersiveengineering:crusher' })
    e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:smelting' })
    e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:blasting' })
    e.remove({ id: `ae2:grinder/${name}_dust_ingot` })

    if (name !== 'iron' && name !== 'gold' && name !== 'azure_silver' && name !== 'crimson_iron') {
      e.remove({ input: `#forge:ores/${name}`, output: `mekanism:dust_${name}`, type: 'mekanism:enriching' })
      e.remove({ input: `mekanism:dirty_dust_${name}`, output: `mekanism:dust_${name}`, type: 'mekanism:enriching' })
      e.remove({ input: `#mekanism:clumps/${name}`, output: `mekanism:dirty_dust_${name}`, type: 'mekanism:crushing' })
      e.remove({ input: `#forge:ores/${name}`, output: `mekanism:clump_${name}`, type: 'mekanism:purifying' })
      e.remove({ input: `mekanism:shard_${name}`, output: `mekanism:clump_${name}`, type: 'mekanism:purifying' })
      e.remove({ input: `#forge:ores/${name}`, output: `mekanism:shard_${name}`, type: 'mekanism:injecting' })
      e.remove({ input: `#mekanism:crystals/${name}`, output: `mekanism:shard_${name}`, type: 'mekanism:injecting' })
    }

    e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    e.recipes.immersiveengineering.crusher({ secondaries: [], result: { base_ingredient: { item: dustItem } }, input: { tag: `forge:ingots/${name}` }, energy: 3000 })
    e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    e.replaceInput(dustItem, `#forge:dusts/${name}`)
    e.replaceInput(ingotItem, `#forge:ingots/${name}`)
    e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)
  }
  function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    e.replaceInput(dustItem, `#forge:dusts/${name}`)
    e.replaceInput(ingotItem, `#forge:ingots/${name}`)
    e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)

    e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    e.replaceOutput(`#forge:dusts/${name}`, dustItem)
    e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
  }
  //Vanilla MC
  unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget')
  unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget')

  //Multiple Mods
  unifyMetal('aluminum', 'alltheores:aluminum_ingot', 'alltheores:aluminum_dust', 'alltheores:aluminum_block', 'alltheores:aluminum_nugget')
  unifyMetal('copper', 'alltheores:copper_dust', 'alltheores:copper_nugget')
  unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget')
  unifyMetal('nickel', 'alltheores:nickel_ingot', 'alltheores:nickel_dust', 'alltheores:nickel_block', 'alltheores:nickel_nugget')
  unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget')
  unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget')
  unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget')
  unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget')
  unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget')
  unifyCraftMetal('bronze', 'alltheores:bronze_ingot', 'alltheores:bronze_dust', 'alltheores:bronze_block', 'alltheores:bronze_nugget')
  unifyCraftMetal('brass', 'alltheores:bronze_ingot', 'alltheores:bronze_dust', 'alltheores:bronze_block', 'alltheores:bronze_nugget')
  unifyCraftMetal('constantan', 'alltheores:constantan_ingot', 'alltheores:constantan_dust', 'alltheores:constantan_block', 'alltheores:constantan_nugget')
  unifyCraftMetal('electrum', 'alltheores:electrum_ingot', 'alltheores:electrum_dust', 'alltheores:electrum_block', 'alltheores:electrum_nugget')
  unifyCraftMetal('steel', 'alltheores:ingot_steel', 'alltheores:dust_steel', 'alltheores:block_steel', 'alltheores:nugget_steel')
  unifyMetal('osmium', 'alltheores:osmium_ingot', 'alltheores:osmium_dust', 'alltheores:osmium_block', 'alltheores:osmium_nugget')
 
  //Silent Gear
  unifyMetal('azure_silver', 'silentgear:azure_silver_ingot', 'silentgear:azure_silver_dust', 'silentgear:azure_silver_block', 'silentgear:azure_silver_nugget')
  unifyMetal('crimson_iron', 'silentgear:crimson_iron_ingot', 'silentgear:crimson_iron_dust', 'silentgear:crimson_iron_block', 'silentgear:crimson_iron_nugget')
  // #endregion Metal Unification
  // #region Plate Unification
  function plateCasting(material, coolingTime, result) {
    let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'brass', 'bronze', 'gold', 'iron']
    let fluid = alltheores.includes(material) ? { tag: `forge:molten_${material}`, amount: 144 } : { name: `tconstruct:molten_${material}`, amount: 144 }

    e.custom({
      type: 'tconstruct:casting_table',
      conditions: [
        {
          value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        }
      ],
      cast: { tag: 'tconstruct:casts/multi_use/plate' },
      fluid: fluid,
      result: { item: result },
      cooling_time: coolingTime
    }).id(`kubejs:smeltery/casting/metal/${material}/plate_gold_cast`)
    e.custom({
      type: 'tconstruct:casting_table',
      conditions: [
        {
          value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        }
      ],
      cast: { tag: 'tconstruct:casts/single_use/plate' },
      cast_consumed: true,
      fluid: fluid,
      result: { item: result },
      cooling_time: coolingTime
    }).id(`kubejs:smeltery/casting/metal/${material}/plate_sand_cast`)
  }

  function platePressing(material, result) {
    e.custom({
      type: 'immersiveengineering:metal_press',
      mold: { item: 'immersiveengineering:mold_plate' },
      result: { item: result },
      conditions: [
        {
          value: { tag: `forge:ingots/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        },
        {
          value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
          type: 'forge:not'
        }
      ],
      input: { tag: `forge:ingots/${material}` },
      energy: 2400
    }).id(`kubejs:metalpress/plate_${material}`)
  }

  function plateProcessing(types) {
    types.forEach(([material, coolingTime, result]) => {
      e.replaceInput(`alltheores:${material}_plate`, `#forge:plates/${material}`)
      e.replaceInput(`immersiveengineering:plate_${material}`, `#forge:plates/${material}`)
      e.replaceInput(material === 'gold' ? `create:${material}en_sheet` : `create:${material}_sheet`, `#forge:plates/${material}`)

      result = result ? result : `alltheores:${material}_plate`

      e.remove({ id: `immersiveengineering:crafting/plate_${material}_hammering` });
      e.shapeless(result, [`#forge:ingots/${material}`, '#misctags:immersive_engineering_hammer']).id(`kubejs:crafting/plate_${material}_hammering`);

      e.remove({ id: `create:pressing/${material}_ingot` })
      e.remove({ id: `createaddition:pressing/${material}_ingot` })
      e.recipes.create.pressing(result, `#forge:ingots/${material}`).id(`kubejs:pressing/${material}_ingot`)

      if (coolingTime !== null) {
        e.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_gold_cast` })
        e.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_sand_cast` })
        plateCasting(material, coolingTime, result)
      }

      e.remove({ id: `immersiveengineering:metalpress/plate_${material}` })

    })
  }

  plateProcessing([
    ['aluminum', 47],
    ['steel', 50],
    ['uranium', 50],
    ['iron', 60],
    ['gold', 57],
    ['copper', 50],
    ['tin', 39],
    ['lead', 43],
    ['silver', 60],
    ['nickel', 65],
    ['bronze', 57],
    ['electrum', 59],
    ['invar', 63],
    ['constantan', 64],
    ['signalum', null],
    ['lumium', null],
    ['enderium', null],
    ['brass', 57],
    ['zinc', 57],
  ])
  // #endregion Plate Unification
  // #region Tinkers Unification
  function tinkerMelting(material, type, typeValues, temperature, time, byproduct) {
    let recipe = {
      type: 'tconstruct:melting',
      ingredient: { tag: `forge:${type}/${material}` },
      result: { fluid: `tconstruct:molten_${material}`, amount: typeValues.amount },
      temperature: temperature,
      time: time * typeValues.multiplier
    }
    e.custom(type != 'ores' ? recipe : Object.assign({ byproducts: byproduct }, recipe)).id(`kubejs:melting/${type}/${material}`)
  }
  function tinkerCreateCompat(material, temperature, time, molten_namespace) {
    e.custom({
      type: 'tconstruct:melting',
      ingredient: { item: `create:crushed_${material}_ore` },
      result: { fluid: `${molten_namespace}:molten_${material}`, amount: 144 },
      temperature: temperature,
      time: time * 29.4
    }).id(`kubejs:melting/crushed_ore/${material}`)
  }
  function tinkerAlloys(entries) {
    entries.forEach(([output, outputAmount, temperature, inputs]) => {
      e.remove({ id: `tconstruct:smeltery/alloys/molten_${output}` })
      e.custom({
        type: 'tconstruct:alloy',
        inputs: inputs,
        result: { fluid: `tconstruct:molten_${output}`, amount: outputAmount },
        temperature: temperature
      }).id(`kubejs:melting/alloys/${output}`)
    })
  }
  function unifyTinkers(entries) {
    let meltingTypes = ['block', 'can', 'coin', 'dust', 'gear', 'ingot', 'nugget', 'ore', 'plates', 'rod', 'sheetmetal']
    let meltingTypeValues = {
      storage_blocks: { amount: 1296, multiplier: 88.125 },
      dusts: { amount: 144, multiplier: 21.75 },
      gears: { amount: 576, multiplier: 58.8 },
      ingots: { amount: 144, multiplier: 29.4 },
      nuggets: { amount: 16, multiplier: 10.0 },
      ores: { amount: 288, multiplier: 44.1 },
      plates: { amount: 144, multiplier: 29.4 },
      rods: { amount: 72, multiplier: 5.88 },
      sheetmetals: { amount: 144, multiplier: 29.4 }
    }
    let meltingParts = ['broad_axe_head', 'broad_blade', 'hammer_head', 'large_plate', 'pickaxe_head', 'repair_kit', 'small_axe_head', 'small_blade', 'tool_binding', 'tool_handle', 'tough_handle']

    entries.forEach(([material, temperature, time, types, byproduct]) => {
      e.replaceInput(`tconstruct:${material}_ingot`, `alltheores:${material}_ingot`)
      e.replaceInput(`tconstruct:${material}_block`, `alltheores:${material}_block`)
      e.replaceOutput(`tconstruct:${material}_ingot`, `alltheores:${material}_ingot`)
      e.replaceOutput(`tconstruct:${material}_block`, `alltheores:${material}_block`)

      tinkerCreateCompat(material, temperature, time, 'alltheores');

      meltingTypes.forEach(meltingType => {
        e.remove({ id: `tconstruct:smeltery/melting/metal/${material}/${meltingType}` })
        for (let type in meltingTypeValues) if (types.includes(type)) tinkerMelting(material, type, meltingTypeValues[type], temperature, time, byproduct)
      })
      meltingParts.forEach(meltingPart => e.remove({ id: `tconstruct:tools/parts/melting/${meltingPart}/tconstruct/${material}` }))
    })
  }
  function tinkerAlloyMelting(entries) {
    entries.forEach(([input, outputItem, outputBlock, outputNugget]) => {
      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/block` })

      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_gold_cast` })
      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_sand_cast` })

      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_gold_cast` })
      e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_sand_cast` })

      e.custom({
        type: 'tconstruct:casting_basin',
        fluid: { tag: `tconstruct:molten_${input}`, amount: 1296 },
        result: { item: `${outputBlock}` },
        cooling_time: 171
      }).id(`kubejs:smeltery/casting/metal/${input}/block`)

      e.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/ingot' },
        fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
        result: { item: `${outputItem}` },
        cooling_time: 57
      }).id(`kubejs:smeltery/casting/metal/${input}/ingot_gold_cast`)
      e.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/ingot' },
        cast_consumed: true,
        fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
        result: { item: `${outputItem}` },
        cooling_time: 57
      }).id(`kubejs:smeltery/casting/metal/${input}/ingot_sand_cast`)

      e.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/nugget' },
        fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
        result: { item: `${outputNugget}` },
        cooling_time: 19
      }).id(`kubejs:smeltery/casting/metal/${input}/nugget_gold_cast`)
      e.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/nugget' },
        cast_consumed: true,
        fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
        result: { item: `${outputNugget}` },
        cooling_time: 19
      }).id(`kubejs:smeltery/casting/metal/${input}/nugget_sand_cast`)
    })
  }

  tinkerAlloyMelting([
    ['bronze', 'alltheores:bronze_ingot', 'alltheores:bronze_block', 'alltheores:bronze_nugget'],
    ['brass', 'alltheores:brass_ingot', 'alltheores:brass_block', 'alltheores:brass_nugget'],
	['constantan', 'alltheores:constantan_ingot', 'alltheores:constantan_block', 'alltheores:constantan_nugget'],
    ['electrum', 'alltheores:electrum_ingot', 'alltheores:electrum_block', 'alltheores:electrum_nugget']
  ])

  unifyTinkers([
    [
      'aluminum',
      425,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'plates', 'rods', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
    ],
    [
      'copper',
      500,
      1.7,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_gold', amount: 16 }]
    ],
    [
      'lead',
      330,
      1.4,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_silver', amount: 48 }]
    ],
    [
      'nickel',
      950,
      2.2,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_platinum', amount: 16 }]
    ],
    [
      'osmium',
      975,
      2.2,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
    ],
    [
      'platinum',
      970,
      2.2,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'tconstruct:molten_gold', amount: 48 }]
    ],
    [
      'silver',
      790,
      2.0,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_lead', amount: 48 }]
    ],
    [
      'tin',
      225,
      1.3,
      ['storage_blocks', 'dusts', 'gears', 'ingots', 'nuggets', 'ores', 'plates'],
      [{ fluid: 'tconstruct:molten_copper', amount: 48 }]
    ],
    [
      'uranium',
      830,
      2.0,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'plates', 'sheetmetals'],
      [{ fluid: 'tconstruct:molten_lead', amount: 48 }]
    ],
    [
      'zinc',
      420,
      1.6,
      ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
      [{ fluid: 'tconstruct:molten_tin', amount: 48 }]
    ]
  ])

  tinkerCreateCompat('iron', 800, 60, 'tconstruct');
  tinkerCreateCompat('gold', 700, 57, 'tconstruct');

  tinkerAlloys([
    [
      'brass', 288, 605, [
        { tag: 'forge:molten_copper', amount: 144 },
        { tag: 'forge:molten_zinc', amount: 144 }
      ]
    ],
    [
      'bronze', 576, 700, [
        { tag: 'forge:molten_copper', amount: 432 },
        { tag: 'forge:molten_tin', amount: 144 }
      ]
    ],
    [
      'constantan', 288, 920, [
        { tag: 'forge:molten_copper', amount: 144 },
        { tag: 'forge:molten_nickel', amount: 144 }
      ]
    ],
    [
      'electrum', 288, 760, [
        { tag: 'tconstruct:molten_gold', amount: 144 },
        { tag: 'forge:molten_silver', amount: 144 }
      ]
    ],
    [
      'hepatizon', 288, 1400, [
        { tag: 'forge:molten_copper', amount: 288 },
        { tag: 'tconstruct:molten_cobalt', amount: 144 },
        { tag: 'tconstruct:molten_obsidian', amount: 1000 }
      ]
    ],
    [
      'invar', 432, 900, [
        { tag: 'tconstruct:molten_iron', amount: 288 },
        { tag: 'forge:molten_nickel', amount: 144 }
      ]
    ],
    [
      'pewter', 288, 400, [
        { tag: 'tconstruct:molten_iron', amount: 144 },
        { tag: 'forge:molten_lead', amount: 144 }
      ]
    ],
    [
      'rose_gold', 576, 550, [
        { tag: 'forge:molten_copper', amount: 432 },
        { tag: 'tconstruct:molten_gold', amount: 144 }
      ]
    ],
    [
      'tinkers_bronze', 432, 700, [
        { tag: 'forge:molten_copper', amount: 432 },
        { tag: 'tconstruct:molten_glass', amount: 1000 }
      ]
    ]
  ])

  // #endregion Tinkers Unification
  e.replaceInput('ae2:certus_quartz_dust', '#forge:dusts/certus_quartz')
  e.replaceInput('minecraft:stick', '#forge:rods/wooden')
  e.replaceInput('immersiveengineering:coal_coke', '#forge:coal_coke')
  e.replaceOutput('immersivepetroleum:bitumen', 'thermal:bitumen')
  e.replaceOutput('immersiveengineering:dust_sulfur', 'thermal:sulfur_dust')
  e.replaceOutput('ae2:nether_quartz_dust', 'thermal:quartz_dust')
  e.replaceOutput('thermal:coal_coke', 'immersiveengineering:coal_coke')
  e.replaceOutput('thermal:coal_coke_block', 'immersiveengineering:coke')
  e.replaceOutput('createaddition:diamond_grit', 'thermal:diamond_dust')
  e.remove({id: 'beyond_earth:iron_plate'})
  
})
