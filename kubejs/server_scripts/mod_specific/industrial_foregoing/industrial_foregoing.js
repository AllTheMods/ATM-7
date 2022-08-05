onEvent('recipes', e=> {
    e.remove({id: 'industrialforegoing:ore_laser_base'})
    e.remove({id: 'industrialforegoing:laser_drill'})
    e.shaped('industrialforegoing:ore_laser_base', ['PTP','OFO','GRG'],{
        P: 'industrialforegoing:plastic',
        T: 'allthemodium:unobtainium_pickaxe',
        O: '#forge:ores/iron',
        F: 'industrialforegoing:machine_frame_advanced',
        G: '#forge:gears/vibranium',
        R: 'minecraft:redstone'
    })
    e.shaped('industrialforegoing:laser_drill',['PTP','MFM','GRG'],{
        P: 'industrialforegoing:plastic',
        T: '#forge:gears/vibranium',
        M: 'minecraft:piston',
        F: 'industrialforegoing:machine_frame_simple',
        G: '#forge:gears/allthemodium',
        R: 'minecraft:redstone'
    })
})
