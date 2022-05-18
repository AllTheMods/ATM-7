onEvent('recipes', e => {
  function stonecutting(inputs, formatter) {
    inputs.forEach(metal => {
      let output = formatter(metal);
      e.stonecutting(output, `#forge:storage_blocks/${metal}`)
        .id(`kubejs:stonecutting/${output.replace(':', '/')}`)
    });
  }

  stonecutting(immersiveMetals.concat(immersiveAlloys), metal => `immersiveengineering:storage_${metal}`)
  stonecutting(mekanismMetals.concat(mekanismAlloys), metal => `mekanism:block_${metal}`)
  stonecutting(atoMetals.concat(atoAlloys), metal => `alltheores:${metal}_block`)
  stonecutting(ftbicMetals.concat(ftbicAlloys), metal => `ftbic:${metal}_block`)
  stonecutting(thermalMetals.concat(thermalAlloys), metal => `thermal:${metal}_block`)
  stonecutting(['brass', 'zinc'], metal => `create:${metal}_block`)
  stonecutting(['uranium'], metal => `biggerreactors:${metal}_block`)
  stonecutting(['silver'], metal => `occultism:${metal}_block`)
})
