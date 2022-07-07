onEvent('recipes', e => {
  maDisabledSeeds.forEach(name => {
    ['seeds', 'essence'].forEach(type => {
      e.remove({ output: `mysticalagriculture:${name}_${type}` , id: '/mysticalagriculture/'})
      e.remove({ input: `mysticalagriculture:${name}_${type}` , id: '/mysticalagriculture/'})
    });
  });

    removeRecipeByOutput(e, [
    'mysticalagradditions:nitro_crystal_crux',
    'mysticalagriculture:nitro_crystal_essence',
  ])
  e.remove({ id: 'mysticalagradditions:essence/nitro_crystal'})
  
  e.remove({ id: 'mysticalagriculture:augment/flight' });
  maInfusion(e, 'mysticalagriculture:flight_augment', 'mysticalagriculture:unattuned_augment', 'mysticalagriculture:supremium_block', 'mysticalagriculture:supremium_block', 'mysticalagriculture:supremium_block', 'allthemodium:unobtainium_block', 'allthecompressed:nether_star_block_1x', 'mysticalagriculture:supremium_block', 'allthecompressed:nether_star_block_1x', 'allthemodium:unobtainium_block', 'mysticalagriculture:supremium_block')
  maInfusion(e,'kubejs:magical_soil', 'botania:overgrowth_seed', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block')
  

  let fish = [
    'aquaculture:arapaima',
    'aquaculture:atlantic_cod',
    'aquaculture:atlantic_halibut',
    'aquaculture:atlantic_herring',
    'aquaculture:bayad',
    'aquaculture:blackfish',
    'aquaculture:bluegill',
    'aquaculture:boulti',
    'aquaculture:brown_shrooma',
    'aquaculture:brown_trout',
    'aquaculture:capitaine',
    'aquaculture:carp',
    'aquaculture:catfish',
    'aquaculture:gar',
    'aquaculture:minnow',
    'aquaculture:muskellunge',
    'aquaculture:pacific_halibut',
    'aquaculture:perch',
    'aquaculture:pink_salmon',
    'aquaculture:piranha',
    'aquaculture:pollock',
    'aquaculture:rainbow_trout',
    'aquaculture:red_grouper',
    'aquaculture:red_shrooma',
    'aquaculture:smallmouth_bass',
    'aquaculture:synodontis',
    'aquaculture:tambaqui',
    'aquaculture:tuna',
  ];

  fish.forEach(name => {
    e.custom({
      type: 'mysticalagriculture:soul_extraction',
      input: {
        item: name
      },
      output: {
        type: 'mysticalagriculture:fish',
        souls: 0.5
      }
    })
  })
})
