onEvent('tags.items', event => {
    event.add('mekanism:clumps', 'kubejs:clump_cobalt')
    event.add('mekanism:clumps/cobalt', 'kubejs:clump_cobalt')
    event.add('mekanism:shards', 'kubejs:shard_cobalt')
    event.add('mekanism:shards/cobalt', 'kubejs:shard_cobalt')
    event.add('mekanism:crystals', 'kubejs:crystal_cobalt')
    event.add('mekanism:crystals/cobalt', 'kubejs:crystal_cobalt')
    event.add('mekanism:dirty_dusts', 'kubejs:dirty_dust_cobalt')
    event.add('mekanism:dirty_dusts/cobalt', 'kubejs:dirty_dust_cobalt')
})

onEvent('recipes', event => {
    event.custom({
        'type': 'mekanism:dissolution',
        'output': {
            "slurry": "kubejs:dirty_cobalt",
            "amount": 6000,
            "chemicalType": "slurry"
        },
        'gasInput': {
            "amount": 2,
            "gas": "mekanism:sulfuric_acid"
        },
        'itemInput': Ingredient.of('#forge:storage_blocks/raw_cobalt')
    }).id('kubejs:processing/cobalt/slurry/dirty/from_raw_block')
    event.custom({
        'type': 'mekanism:dissolution',
        'output': {
            "slurry": "kubejs:dirty_cobalt",
            "amount": 1000,
            "chemicalType": "slurry"
        },
        'gasInput': {
            "amount": 1,
            "gas": "mekanism:sulfuric_acid"
        },
        'itemInput': Ingredient.of('#forge:ores/cobalt')
    }).id('kubejs:processing/cobalt/slurry/dirty/from_ore')
    event.custom({
        'type': 'mekanism:dissolution',
        'output': {
            "slurry": "kubejs:dirty_cobalt",
            "amount": 2000,
            "chemicalType": "slurry"
        },
        'gasInput': {
            "amount": 1,
            "gas": "mekanism:sulfuric_acid"
        },
        'itemInput': Ingredient.of('#forge:raw_materials/cobalt').withCount(3)
    }).id('kubejs:processing/cobalt/slurry/dirty/from_raw_ore')

    event.custom({
        "type": "mekanism:washing",
        "fluidInput": {
            "amount": 5,
            "tag": "minecraft:water"
        },
        "slurryInput": {
            "amount": 1,
            "slurry": "kubejs:dirty_cobalt"
        },
        "output": {
            "slurry": "kubejs:clean_cobalt",
            "amount": 1
        }
    }).id('kubejs:processing/cobalt/slurry/clean')

    event.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "slurry",
        "input": {
            "amount": 200,
            "slurry": "kubejs:clean_cobalt"
        },
        "output": {
            "item": "kubejs:crystal_cobalt"
        }
    }).id('kubejs:processing/cobalt/crystal/from_slurry')

    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "ingredient": {
                "tag": "forge:ores/cobalt"
            }
        },
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "output": {
            "item": "kubejs:shard_cobalt",
            "count": 4
        }
    }).id('kubejs:processing/cobalt/shard/from_ore')
    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "amount": 3,
            "ingredient": {
                "tag": "forge:raw_materials/cobalt"
            }
        },
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "output": {
            "item": "kubejs:shard_cobalt",
            "count": 8
        }
    }).id('kubejs:processing/cobalt/shard/from_raw_ore')
    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "ingredient": {
                "tag": "mekanism:crystals/cobalt"
            }
        },
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:hydrogen_chloride"
        },
        "output": {
            "item": "kubejs:shard_cobalt"
        }
    }).id('kubejs:processing/cobalt/shard/from_crystal')
    event.custom({
        "type": "mekanism:injecting",
        "itemInput": {
            "ingredient": {
                "tag": "forge:storage_blocks/raw_cobalt"
            }
        },
        "chemicalInput": {
            "amount": 2,
            "gas": "mekanism:hydrogen_chloride"
        },
        "output": {
            "item": "kubejs:shard_cobalt",
            "count": 24
        }
    }).id('kubejs:processing/cobalt/shard/from_raw_block')

    event.custom({
        "type": "mekanism:purifying",
        "itemInput": {
            "ingredient": {
                "tag": "forge:storage_blocks/raw_cobalt"
            }
        },
        "chemicalInput": {
            "amount": 2,
            "gas": "mekanism:oxygen"
        },
        "output": {
            "item": "kubejs:clump_cobalt",
            "count": 18
        }
    }).id('kubejs:processing/cobalt/clump/from_raw_block')
    event.custom({
        "type": "mekanism:purifying",
        "itemInput": {
            "ingredient": {
                "tag": "mekanism:shards/cobalt"
            }
        },
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:oxygen"
        },
        "output": {
            "item": "kubejs:clump_cobalt"
        }
    }).id('kubejs:processing/cobalt/clump/from_shard')
    event.custom({
        "type": "mekanism:purifying",
        "itemInput": {
            "ingredient": {
                "tag": "forge:ores/cobalt"
            }
        },
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:oxygen"
        },
        "output": {
            "item": "kubejs:clump_cobalt",
            "count": 3
        }
    }).id('kubejs:processing/cobalt/clump/from_ore')
    event.custom({
        "type": "mekanism:purifying",
        "itemInput": {
            "ingredient": {
                "tag": "forge:raw_materials/cobalt"
            }
        },
        "chemicalInput": {
            "amount": 1,
            "gas": "mekanism:oxygen"
        },
        "output": {
            "item": "kubejs:clump_cobalt",
            "count": 2
        }
    }).id('kubejs:processing/cobalt/clump/from_raw_ore')

    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "tag": "mekanism:clumps/cobalt"
            }
        },
        "output": {
            "item": "kubejs:dirty_dust_cobalt"
        }
    }).id('kubejs:processing/cobalt/dirty_dust/from_clump')

    event.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "tag": "mekanism:dirty_dusts/cobalt"
            }
        },
        "output": {
            "item": "kubejs:cobalt_dust"
        }
    }).id('kubejs:processing/cobalt/dust/from_dirty_dust')
  
     event.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "tag": "forge:storage_blocks/raw_cobalt"
            }
        },
        "output": {
            "item": "kubejs:cobalt_dust",
            "count": 12
        }
    }).id('kubejs:processing/cobalt/dust/from_raw_block')
})
