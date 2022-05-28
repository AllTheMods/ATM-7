onEvent('recipes', event => {
    event.shaped('2x solarflux:sp_custom_allthemodium', [
        'PPP',
        'SAS',
        'SDS'
    ], {
        S: 'solarflux:sp_5',
        A: '#forge:storage_blocks/allthemodium',
        D: '#forge:storage_blocks/diamond',
        P: 'solarflux:photovoltaic_cell_4'
    }).id(`kubejs:allthemodium_solar`)

    event.shaped('2x solarflux:sp_custom_vibranium', [
        'PPP',
        'SAS',
        'SAS'
    ], {
        S: 'solarflux:sp_custom_allthemodium',
        A: '#forge:storage_blocks/vibranium',
        P: 'solarflux:photovoltaic_cell_5'
    }).id(`kubejs:vibranium_solar`)

    event.shaped('2x solarflux:sp_custom_unobtainium', [
        'PPP',
        'SAS',
        'SAS'
    ], {
        S: 'solarflux:sp_custom_vibranium',
        A: '#forge:storage_blocks/unobtainium',
        P: 'solarflux:photovoltaic_cell_6'
    }).id(`kubejs:unobtainium_solar`)
})
