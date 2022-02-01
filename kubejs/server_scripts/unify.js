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
  unifyMetal('copper', 'minecraft:copper_ingot', 'alltheores:copper_dust', 'minecraft:copper_block', 'alltheores:copper_nugget')
  unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget')
  unifyMetal('nickel', 'alltheores:nickel_ingot', 'alltheores:nickel_dust', 'alltheores:nickel_block', 'alltheores:nickel_nugget')
  unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget')
  unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget')
  unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget')
  unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget')
  unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget')
  unifyMetal('constantan', 'alltheores:constantan_ingot', 'alltheores:constantan_dust', 'alltheores:constantan_block', 'alltheores:constantan_nugget')
  unifyMetal('signalum', 'alltheores:signalum_ingot', 'alltheores:signalum_dust', 'alltheores:signalum_block', 'alltheores:signalum_nugget')
  unifyMetal('invar', 'alltheores:invar_ingot', 'alltheores:invar_dust', 'alltheores:invar_block', 'alltheores:invar_nugget')
  unifyMetal('bronze', 'alltheores:bronze_ingot', 'alltheores:bronze_dust', 'alltheores:bronze_block', 'alltheores:bronze_nugget')
  unifyMetal('electrum', 'alltheores:electrum_ingot', 'alltheores:electrum_dust', 'alltheores:electrum_block', 'alltheores:electrum_nugget')
  unifyMetal('lumium', 'alltheores:lumium_ingot', 'alltheores:lumium_dust', 'alltheores:lumium_block', 'alltheores:lumium_nugget')
  unifyMetal('enderium', 'alltheores:enderium_ingot', 'alltheores:enderium_dust', 'alltheores:enderium_block', 'alltheores:enderium_nugget')
  unifyMetal('brass', 'alltheores:brass_ingot', 'alltheores:brass_dust', 'alltheores:brass_block', 'alltheores:brass_nugget')

  //Mekanism
  unifyMetal('osmium', 'alltheores:osmium_ingot', 'alltheores:osmium_dust', 'alltheores:osmium_block', 'alltheores:osmium_nugget')

  //Silent Gear
  unifyMetal('azure_silver', 'silentgear:azure_silver_ingot', 'silentgear:azure_silver_dust', 'silentgear:azure_silver_block', 'silentgear:azure_silver_nugget')
  unifyMetal('crimson_iron', 'silentgear:crimson_iron_ingot', 'silentgear:crimson_iron_dust', 'silentgear:crimson_iron_block', 'silentgear:crimson_iron_nugget')

  //Craft only metals
  unifyCraftMetal('steel', 'alltheores:steel_ingot', 'alltheores:steel_dust', 'alltheores:steel_block', 'alltheores:steel_nugget')

  // #endregion Metal Unification
  // #region Plate Unification
  function plateCasting(material, coolingTime, result) {
    let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iron', 'zinc']
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
      e.replaceInput(`immersiveengineering:plate_${material}`, `#forge:plates/${material}`)
      e.replaceInput(material === 'gold' ? `create:${material}en_sheet` : `create:${material}_sheet`, `#forge:plates/${material}`)

      result = result ? result : `alltheores:${material}_plate`
	  
	  e.remove({ id: `immersiveengineering:crafting/plate_${material}_hammering` });
	  e.shapeless(result, [`2x #forge:ingots/${material}`, '#misctags:immersive_engineering_hammer']).id(`kubejs:crafting/plate_${material}_hammering`);
      e.remove({ id: `create:pressing/${material}_ingot` })
      e.remove({ id: `createaddition:pressing/${material}_ingot` })
      e.recipes.create.pressing(result, `#forge:ingots/${material}`).id(`kubejs:pressing/${material}_ingot`)

    })
  }

  plateProcessing([
    ['aluminum', 47],
	['zinc', 47],
	['iron', 47],
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
    ['brass', 57,],
    ['zinc', 57,],
  ])
  // #endregion Plate Unification
  e.replaceInput('ae2:certus_quartz_dust', '#forge:dusts/certus_quartz')
  e.replaceInput('minecraft:stick', '#forge:rods/wooden')
  e.replaceInput('immersiveengineering:coal_coke', '#forge:coal_coke')
  e.replaceOutput('ae2:nether_quartz_dust', 'thermal:quartz_dust')
  e.remove({id: 'beyond_earth:iron_plate'})
})
