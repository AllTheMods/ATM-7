//priority: 997
onEvent('recipes', e => {
  let oreOverride = {
    iron: 'minecraft',
    gold: 'minecraft',
    copper: 'minecraft',
    allthemodium: 'allthemodium',
    vibranium: 'allthemodium',
    unobtainium: 'allthemodium',
    crimson_iron: 'silentgear',
    azure_silver: 'silentgear',
    iesnium: 'occultism',
  }

  let craftOverride = {
    allthemodium: 'allthemodium',
    vibranium: 'allthemodium',
    unobtainium: 'allthemodium',
    compressed_iron: 'pneumaticcraft',
    crimson_iron: 'silentgear',
    azure_silver: 'silentgear',
    iesnium: 'occultism',
  }
  function mekUnifyOres(metal, type) {
    let input = '';
    let inputCount = 1;
    let output = '';
    let outputCount = 1;

    if (type === 'ingot') {
      input = `#forge:ingots/${metal}`;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      e.remove({id: `mekanism:processing/${metal}/dust/from_ingot`})

      e.custom({
        "type": "mekanism:crushing",
        "input": {
          "ingredient": Ingredient.of(input)
        },
        "output": Ingredient.of(output)
      }).id(`kubejs:mekanism/crushing/${type}_${metal}`)
      return;
    }

    if (type === 'ore') {
      input = `#forge:ores/${metal}`;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      outputCount = 2;
      
      e.remove({id: `mekanism:processing/${metal}/dust/from_ore`})
    }

    if (type === 'raw_ore') {
      input = `#forge:raw_ores/${metal}`;
      inputCount = 3;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      outputCount = 4;

      e.remove({id: `mekanism:processing/${metal}/dust/from_raw_ore`})
    }

    if (type === 'dirty_dust') {
      input = `#mekanism:dirty_dusts/${metal}`;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      
      e.remove({id: `mekanism:processing/${metal}/dust/from_dirty_dust`})
    }

    e.custom({
      "type": "mekanism:enriching",
      "input": {
        "amount": inputCount,
        "ingredient": Ingredient.of(input)
      },
      "output": {
        "item": output,
        "count": outputCount,
      }
    }).id(`kubejs:mekanism/enriching/${metal}/dust/from_${type}`)
  }

  // unify ores for Create crushing wheel
  function createUnifyOres(metal, type) {
    let time = 250;
    let input = '';
    let outputs = [];

    if (type === 'ore') {
      time = 350;
      input = `#forge:ores/${metal}`;
      let out = `${oreOverride[metal] ?? 'alltheores'}:raw_${metal}`;
      outputs.push({
        item: out
      });
      outputs.push({
        item: out,
        chance: 0.33
      });
      outputs.push({
        item: "create:experience_nugget",
        chance: 0.75
      });

      e.remove({id: `create:crushing/${metal}_ore`});
      e.remove({id: `create:crushing/nether_${metal}_ore`});
      e.remove({id: `create:crushing/deepslate_${metal}_ore`});
    }

    if (type === 'raw_block') {
      input = `#forge:storage_blocks/raw_${metal}`;
      outputs.push({
        item: `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`,
        count: 18,
      });
      outputs.push({
        item: "create:experience_nugget",
        chance: 0.75,
        count: 9,
      });

      e.remove({id: `create:crushing/raw_${metal}_block`});
    }

    if (type === 'raw_ore') {
      input = `#forge:raw_ores/${metal}`;
      outputs.push({
        item: `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`,
        count: 2
      });

      e.remove({id: `create:crushing/raw_${metal}`});
      e.remove({id: `create:crushing/raw_${metal}_ore`});
    }

    if (type === 'ingot') {
      input = `#forge:ingots/${metal}`;
      outputs.push({
        item: `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`
      });
    }

    if (type === 'dust') {
      return;
    }

    e.custom({
      "type": "create:crushing",
      "ingredients": [
        Ingredient.of(input)
      ],
      "results": outputs,
      "processingTime": time
    }).id(`kubejs:crushing/${type}_${metal}`)
  }

  // unify plates for Create press
  function createPressing(metal) {
    let output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_plate`

    e.remove({id: `create:pressing/${metal}_ingot`});
    e.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "tag": `forge:ingots/${metal}`
        }
      ],
      "results": [
        {
          "item": output
        }
      ]
    }).id(`kubejs:pressing/${metal}_ingot`)
  }

  function ieUnifyOres(input, type) {
    let furnaceTime = 100;
    let furnaceEnergy = 51200;
    let furnaceSecondaries = [];
    let crusherEnergy = 3000;
    let crusherSecondaries = [];
    let inputIngredient = '';
    let crusherOutput = '';
    let furnaceOutput = ''
    let outputCount = 1;

    if (type === 'ore') {
      furnaceTime = 200;
      furnaceEnergy = 102400;
      crusherEnergy = 6000;
      inputIngredient = `#forge:ores/${input}`;
      crusherOutput = `${oreOverride[input] ?? 'alltheores'}:raw_${input}`;
      crusherSecondaries.push({
        chance: 0.33,
        output: Ingredient.of(crusherOutput)
      })
      furnaceOutput = crusherOutput;
      furnaceSecondaries.push({
        chance: 0.50,
        output: Ingredient.of(furnaceOutput)
      })

      e.remove({id: `immersiveengineering:crafting/hammercrushing_${input}`});
      e.shapeless(crusherOutput, [inputIngredient, '#alltheores:ore_hammers'])
        .id(`kubejs:hammercrushing/${input}_ore`)
    }

    if (type === 'raw_block') {
      furnaceTime = 900;
      furnaceEnergy = 230400;
      crusherEnergy = 54000;
      inputIngredient = `#forge:storage_blocks/raw_${input}`;
      crusherOutput = `${craftOverride[input] ?? 'alltheores'}:${input}_dust`;
      furnaceOutput = `${oreOverride[input] ?? 'alltheores'}:${input}_ingot`;
      outputCount = 18;
    }

    if (type === 'raw_ore') {
      furnaceEnergy = 25600;
      crusherEnergy = 6000;
      inputIngredient = `#forge:raw_ores/${input}`;
      crusherOutput = `${craftOverride[input] ?? 'alltheores'}:${input}_dust`;
      furnaceOutput = `${oreOverride[input] ?? 'alltheores'}:${input}_ingot`;
      outputCount = 2;
    }

    if (type === 'ingot') {
      inputIngredient = `#forge:ingots/${input}`;
      crusherOutput = `${craftOverride[input] ?? 'alltheores'}:${input}_dust`;
    }

    if (type === 'dust') {
      inputIngredient = `#forge:dusts/${input}`;
      furnaceOutput = `${oreOverride[input] ?? 'alltheores'}:${input}_ingot`;
    }

    if (crusherOutput !== '') {
      e.remove({id: `immersiveengineering:crusher/${type}_${input}`})
      e.custom({
        "type": "immersiveengineering:crusher",
        "secondaries": crusherSecondaries,
        "result": {
          "count": outputCount,
          "base_ingredient": Ingredient.of(crusherOutput)
        },
        "input": Ingredient.of(inputIngredient),
        "energy": crusherEnergy
      }).id(`kubejs:crusher/${type}_${input}`);
    }

    if (furnaceOutput !== '') {
      e.remove({id: `immersiveengineering:arcfurnace/${type}_${input}`})
      e.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [],
        "secondaries": furnaceSecondaries,
        "results": [{
          "count": outputCount,
          "base_ingredient": Ingredient.of(furnaceOutput)
        }],
        "input": Ingredient.of(inputIngredient),
        "time": furnaceTime,
        "energy": furnaceEnergy
      }).id(`kubejs:arcfurnace/${type}_${input}`);
    }
  }

  function ieUnifyPress(input, type) {
    let output = `${craftOverride[input] ?? 'alltheores'}:${input}_${type}`
    let inputCount = 1;

    if (type === 'gear') {
      inputCount = 4;
    }

    if (type === 'plate') {
      e.remove({id: `immersiveengineering:crafting/plate_${input}_hammering`});
      e.shapeless(output, [`2x #forge:ingots/${input}`, '#misctags:immersive_engineering_hammer'])
        .id(`kubejs:crafting/plate_${input}_hammering`);
    }

    e.remove({id: `immersiveengineering:metalpress/${type}_${input}`})
    e.custom({
      "type": "immersiveengineering:metal_press",
      "mold": `immersiveengineering:mold_${type}`,
      "result": Ingredient.of(output),
      "input": {
        "count": inputCount,
        "base_ingredient": {
          "tag": `forge:ingots/${input}`
        }
      },
      "energy": 2400
    }).id(`kubejs:metalpress/${type}_${input}`)
  }

  function occultismUnifyCrusher(input, type) {
    let outputCount = 2;
    let ignoreMultiplyer = false;
    let time = 200;

    if (type === 'ingot') {
      outputCount = 1;
      ignoreMultiplyer = true;
      e.remove({ id: `occultism:crushing/${input}_dust_from_ingot` });
    }

    if (type === 'ore') {
      time = 300;
      e.remove({ id: `occultism:crushing/${input}_dust` });
    }

    if (type === 'raw_ore') {
      e.remove({ id: `occultism:crushing/${input}_dust_from_raw` });
    }

    e.custom({
      "type": "occultism:crushing",
      "ingredient": Ingredient.of(`#forge:${type}s/${input}`),
      "result": Item.of(`${craftOverride[input] ?? 'alltheores'}:${input}_dust`, outputCount),
      "crushing_time": time,
      "ignore_crushing_multiplier": ignoreMultiplyer
    }).id(`kubejs:occultcrushing/${input}_dust_from_${type}`);
  }

  function blastingUnifyOres(ore) {
    //find all dust to ingot recipes, remove, and replace with a single one
    e.remove({type:"minecraft:blasting", output:`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`,id:`/_dust/`})
    e.blasting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:dusts/${ore}`).xp(0.2).id(`kubejs:blasting/${ore}_ingot_from_dust`)
    e.remove({type:"minecraft:smelting", output:`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`,id:`/_dust/`})
    e.smelting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:dusts/${ore}`).xp(0.2).id(`kubejs:smelting/${ore}_ingot_from_dust`)
    //find all ore to ingot recipes, remove, and replace with a single one
    e.remove({type:"minecraft:blasting", output:`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`,id:`/_ore/`})
    e.blasting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:ores/${ore}`).xp(1.0).id(`kubejs:blasting/${ore}_ingot_from_ore`)
    e.remove({type:"minecraft:smelting", output:`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`,id:`/_ore/`})
    e.smelting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:ores/${ore}`).xp(1.0).id(`kubejs:smelting/${ore}_ingot_from_ore`)
  }

  atoMetals.concat(vanillaMetals, atmMetals).forEach(ore => {
    ['ore', 'raw_ore', 'raw_block', 'ingot', 'dust'].forEach(type => ieUnifyOres(ore, type));
    ['ore', 'raw_ore', 'raw_block', 'ingot'].forEach(type => createUnifyOres(ore, type));
    ['ore', 'raw_ore', 'ingot'].forEach(type => occultismUnifyCrusher(ore, type));
    ['plate', 'gear', 'rod'].forEach(type => ieUnifyPress(ore, type));
    createPressing(ore)
    blastingUnifyOres(ore)
  });

  atoAlloys.forEach(alloy => {
    ['plate', 'gear', 'rod'].forEach(type => ieUnifyPress(alloy, type))
    mekUnifyOres(alloy, 'ingot')
    createPressing(alloy)
  })

  vanillaMetals.concat(mekanismMetals).forEach(ore => {
    ['ore', 'raw_ore', 'ingot', 'dirty_dust'].forEach(type => mekUnifyOres(ore, type));
  });

  mekanismMetals.forEach(metal => {
    removeRecipeByID(e, [
      `mekanism:processing/${metal}/raw_storage_blocks/from_raw`,
      `mekanism:processing/${metal}/raw/from_raw_block`,
      `mekanism:processing/${metal}/storage_blocks/from_ingots`,
      `mekanism:processing/${metal}/ingot/from_block`,
      `mekanism:processing/${metal}/nugget/from_ingot`,
    ])
    e.remove({output: `mekanism:ingot_${metal}`})
  });

  // Mek alloys overlapping with ATO
  ['steel', 'bronze'].forEach(metal => {
    removeRecipeByID(e, [
      `mekanism:nuggets/${metal}`,
      `mekanism:storage_blocks/${metal}`,
      `mekanism:processing/${metal}/ingot/from_nuggets`,
      `mekanism:processing/${metal}/ingot/from_block`,
      `mekanism:processing/${metal}/ingot/from_dust_smelting`,
      `mekanism:processing/${metal}/ingot/from_dust_blasting`,
      `mekanismtools:${metal}/nugget_from_smelting`,
      `mekanismtools:${metal}/nugget_from_blasting`,
    ])
  });

  immersiveMetals.forEach(metal => {
    e.remove({id: `immersiveengineering:crafting/raw_${metal}_to_raw_block_${metal}`})
    e.remove({id: `immersiveengineering:crafting/raw_block_${metal}_to_raw_${metal}`})
  });

  immersiveMetals.concat(immersiveAlloys).forEach(metal => {
    e.remove({id: `immersiveengineering:crafting/ingot_${metal}_to_storage_${metal}`})
    e.remove({id: `immersiveengineering:crafting/storage_${metal}_to_ingot_${metal}`})
    e.remove({id: `immersiveengineering:crafting/ingot_${metal}_to_nugget_${metal}`})
    e.remove({output: `immersiveengineering:ingot_${metal}`})
  });

  ['crimson_iron', 'azure_silver', 'iesnium'].forEach(ore => {
    ['ore', 'raw_ore', 'ingot', 'dust'].forEach(type => ieUnifyOres(ore, type));
    ['ore', 'raw_ore', 'ingot'].forEach(type => createUnifyOres(ore, type));
    ['ore', 'raw_ore', 'ingot'].forEach(type => mekUnifyOres(ore, type));    
    ['ore', 'raw_ore', 'ingot'].forEach(type => occultismUnifyCrusher(ore, type));
  });

  ['crimson_iron', 'azure_silver'].forEach(ore => {
    ieUnifyOres(ore, 'raw_block');
    createUnifyOres(ore, 'raw_block');
  });

  e.custom({
    "type": "immersiveengineering:crusher",
    "secondaries": [],
    "result": {
      "count": 3,
      "base_ingredient": Ingredient.of('ae2:certus_quartz_dust')
    },
    "input": Ingredient.of('#forge:ores/certus_quartz'),
    "energy": 6000
  }).id(`kubejs:crusher/ore_certus_quartz`);

  e.custom({
    "type": "immersiveengineering:crusher",
    "secondaries": [],
    "result": {
      "count": 3,
      "base_ingredient": Ingredient.of('forbidden_arcanus:arcane_crystal')
    },
    "input": Ingredient.of('#forbidden_arcanus:arcane_crystal_ores'),
    "energy": 6000
  }).id(`kubejs:crusher/ore_arcane_crystal`);

  e.custom({
    "type": "immersiveengineering:crusher",
    "secondaries": [],
    "result": {
      "count": 1,
      "base_ingredient": Ingredient.of('forbidden_arcanus:xpetrified_orb')
    },
    "input": Ingredient.of('#forge:ores/xpetrified_ore'),
    "energy": 6000
  }).id(`kubejs:crusher/ore_xpetrified`);

  ieUnifyPress('compressed_iron', 'gear');

  // temporary fix to allow using any steel dust
  e.smelting('alltheores:steel_ingot', '#forge:dusts/steel');
  e.remove({id: 'alltheores:steel_ingot_from_dust'})
  e.blasting('alltheores:steel_ingot', '#forge:dusts/steel');
  e.remove({id: 'alltheores:steel_ingot_from_dust_blasting'})

  // temporary for missing recipes
  e.shapeless('allthemodium:unobtainium_ingot', '9x #forge:nuggets/unobtainium');
  e.remove({id: 'allthemodium:main/unobtainium_nugget_from_unobtainium_ingot'})

  removeRecipeByID(e, [
    'immersiveengineering:crusher/nether_gold',
    'immersiveengineering:crafting/nugget_steel_to_ingot_steel',
    'immersiveengineering:crafting/ingot_steel_to_storage_steel',
    'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
    'immersiveengineering:crafting/copper_ingot_to_nugget_copper',
    'biggerreactors:crafting/uranium_block',
    'biggerreactors:crafting/uranium_ingot',
    'biggerreactors:smelting/uranium_ingot',
    'occultism:crafting/silver_block',
    'occultism:crafting/silver_nugget',
    `mekanism:processing/steel/ingot_to_dust`,
    'create:crafting/materials/copper_ingot',
    'create:crafting/materials/copper_nugget',
    'create:blasting/zinc_ingot_from_ore',
    'create:smelting/zinc_ingot_from_ore',
    'create:crafting/materials/raw_zinc',
    'create:crafting/materials/raw_zinc_block',
    'create:crafting/materials/zinc_block_from_compacting',
    'create:crafting/materials/zinc_ingot_from_compacting',
    'create:crafting/materials/zinc_ingot_from_decompacting',
    'create:crafting/materials/zinc_nugget_from_decompacting',
    'create:crafting/materials/brass_block_from_compacting',
    'create:crafting/materials/brass_ingot_from_compacting',
    'create:crafting/materials/brass_ingot_from_decompacting',
    'create:crafting/materials/brass_nugget_from_decompacting',
    'allthemodium:mek_processing/allthemodium/ingot/from_dust_smelting',
    'allthemodium:mek_processing/vibranium/ingot/from_dust_smelting',
    'allthemodium:mek_processing/unobtainium/ingot/from_dust_smelting',
  ]);

  removeRecipeByOutput(e, [
    'immersiveengineering:stick_iron',
    'immersiveengineering:stick_steel',
    'immersiveengineering:stick_aluminum',
    'silentgear:iron_rod',
    'occultism:silver_ingot',
  ]);
})
