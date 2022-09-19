//priority: 1
//This runs last and finalizes the unify
//Do not touch this file

onEvent('recipes', event => {
    JsonIO.write('kubejs/cucumber-tags.json', global.cucumber)
})
