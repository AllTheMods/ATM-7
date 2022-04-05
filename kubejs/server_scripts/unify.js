//priority: 997
onEvent('recipes', e => {
  let oreOverride = {
    iron: 'minecraft',
    gold: 'minecraft',
    copper: 'minecraft',
    allthemodium: 'allthemodium',
    vibranium: 'allthemodium',
    unobtainium: 'allthemodium',
  }

  let craftOverride = {
    allthemodium: 'allthemodium',
    vibranium: 'allthemodium',
    unobtainium: 'allthemodium',
    compressed_iron: 'pneumaticcraft',
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

  [
    'aluminum',
    'osmium',
    'platinum',
    'zinc',
    'iron',
    'uranium',
    'iron',
    'gold',
    'copper',
    'tin',
    'lead',
    'silver',
    'nickel',
    'zinc',
    'allthemodium',
    'vibranium',
    'unobtainium',
  ].forEach(ore => {
    e.remove({id: `immersiveengineering:crafting/hammercrushing_${ore}`});
    ['ore', 'raw_ore', 'raw_block', 'ingot', 'dust'].forEach(type => ieUnifyOres(ore, type));
    ['plate', 'gear', 'rod'].forEach(type => ieUnifyPress(ore, type))
  });

  atoAlloys.forEach(alloy => {
    ['plate', 'gear', 'rod'].forEach(type => ieUnifyPress(alloy, type))
  })

  atoMetals.forEach(metal => {
    e.smelting(`alltheores:${metal}_ingot`, `alltheores:${metal}_nether_ore`);
    e.smelting(`alltheores:${metal}_ingot`, `alltheores:${metal}_end_ore`);

    e.blasting(`alltheores:${metal}_ingot`, `alltheores:${metal}_nether_ore`);
    e.blasting(`alltheores:${metal}_ingot`, `alltheores:${metal}_end_ore`);
  })

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
  e.remove({id: 'immersiveengineering:crusher/nether_gold'});
})
