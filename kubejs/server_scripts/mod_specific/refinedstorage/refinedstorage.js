onEvent('recipes', event => {
  event.remove({id: 'extradisks:part/1024k_storage_part'})
  event.remove({id: 'refinedstorage:part/4096k_fluid_storage_part'})
  event.remove({id: 'extradisks:part/4096k_storage_part'})
  event.remove({id: 'extradisks:part/16384k_fluid_storage_part'})
  event.remove({id: 'extradisks:part/16384k_storage_part'})
  event.remove({id: 'extradisks:part/65536k_fluid_storage_part'})
  event.remove({id: 'extradisks:part/65536k_storage_part'})
  event.remove({id: 'extradisks:part/262144k_fluid_storage_part'})
  event.remove({id: 'extradisks:part/262144k_storage_part'})
  event.remove({id: 'extradisks:part/1048576k_fluid_storage_part'})
  event.remove({id: 'extradisks:part/1048576k_storage_part'})
  event.remove({id: 'extradisks:part/infinite_fluid_storage_part'})
  event.remove({id: 'extradisks:part/infinite_storage_part'})
  event.shaped('extradisks:1024k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:256k_storage_part',
    b: '#forge:dusts/redstone',
    n: 'refinedstorage:quartz_enriched_iron'
  })
  event.shaped('refinedstorage:4096k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'refinedstorage:1024k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:nuggets/allthemodium'
  })
  event.shaped('extradisks:4096k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1024k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:nuggets/allthemodium'
  })
  event.shaped('extradisks:16384k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'refinedstorage:4096k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/allthemodium'
  })
  event.shaped('extradisks:16384k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:4096k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  })
  event.shaped('extradisks:65536k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:16384k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/allthemodium'
  })
  event.shaped('extradisks:65536k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:16384k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/allthemodium'
  })
  event.shaped('extradisks:262144k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:65536k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/vibranium'
  })
  event.shaped('extradisks:262144k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:65536k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/vibranium'
  })
  event.shaped('extradisks:1048576k_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:262144k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/unobtainium'
  })
  event.shaped('extradisks:1048576k_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:262144k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/unobtainium'
  })
  event.shaped('extradisks:infinite_fluid_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1048576k_fluid_storage_part',
    b: 'minecraft:bucket',
    n: '#forge:ingots/unobtainium'
  })
  event.shaped('extradisks:infinite_storage_part', ['ana', 'fbf', 'afa'], {
    a: 'refinedstorage:advanced_processor',
    f: 'extradisks:1048576k_storage_part',
    b: '#forge:dusts/redstone',
    n: '#forge:ingots/unobtainium'
  })
})
