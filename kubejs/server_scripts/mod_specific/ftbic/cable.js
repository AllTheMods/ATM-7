onEvent('recipes', event => {
    event.remove({id: 'ftbic:shapeless/lv_cable'})
    event.remove({id: 'ftbic:shapeless/mv_cable'})
    event.remove({id: 'ftbic:shapeless/hv_cable'})
    event.remove({id: 'ftbic:shapeless/ev_cable'})

    event.shapeless('ftbic:lv_cable', ['#forge:wires/copper', 'ftbic:rubber']).id(`ftbic:lv_cable`)
    event.shapeless('ftbic:mv_cable', ['#forge:wires/aluminum', 'ftbic:rubber']).id(`ftbic:mv_cable`)
    event.shapeless('ftbic:hv_cable', ['#forge:wires/gold', 'ftbic:rubber']).id(`ftbic:hv_cable`)
    event.shapeless('ftbic:ev_cable', ['#forge:wires/enderium', 'ftbic:rubber']).id(`ftbic:ev_cable`)
})
