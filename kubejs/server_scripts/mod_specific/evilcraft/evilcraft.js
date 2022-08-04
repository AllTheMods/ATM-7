onEvent('recipes', e=> {
    e.recipes.mekanismCrushing('evilcraft:dark_gem_crushed', 'evilcraft:dark_gem')
    e.recipes.immersiveengineeringCrusher('evilcraft:dark_gem_crushed', 'evilcraft:dark_gem')
    e.recipes.thermal.pulverizer('evilcraft:dark_gem_crushed', 'evilcraft:dark_gem')
    e.recipes.createCrushing('evilcraft:dark_gem_crushed', 'evilcraft:dark_gem')
    e.recipes.ftbic.macerating('evilcraft:dark_gem_crushed', 'evilcraft:dark_gem')
  
    e.custom({  //crushing spirit
        "type": "occultism:crushing",
        "ingredient": Ingredient.of('evilcraft:dark_gem'),
        "result": Item.of('evilcraft:dark_gem_crushed', 1),
        "crushing_time": 100,
        "ignore_crushing_multiplier": true
      }).id(`kubejs:occultcrushing/dark_gem_crushed`)
})
