//priority:999
//This runs first and cleans the global
//Do not touch this file

global['cucumber'] = {}
global['auTags'] = []

global['loaded'] = {
    IE_Loaded: Platform.isLoaded('immersiveengineering'),
    IE_KubeJS: Platform.isLoaded('kubejs_immersive_engineering'),
    Mek_Loaded: Platform.isLoaded('mekanism'),
    Mek_KubeJS: Platform.isLoaded('kubejs_mekanism'),
    Create_Loaded: Platform.isLoaded('create'),
    Create_KubeJS: Platform.isLoaded('kubejs_create'),
    CreateAdd_Loaded: Platform.isLoaded('createaddition'),
    Thermal_Loaded: Platform.isLoaded('thermal_expansion'),
    Thermal_KubeJS: Platform.isLoaded('kubejs_thermal'),
    FTBIC_Loaded: Platform.isLoaded('ftbic'),
    Tinkers_Loaded: Platform.isLoaded('tconstruct'),
    Occult_Loaded: Platform.isLoaded('occultism'),
    ATO_Loaded: Platform.isLoaded('alltheores')
}

global['alloys'] = [
    'steel',
    'invar',
    'electrum',
    'bronze',
    'enderium',
    'lumium',
    'signalum',
    'constantan',
    'brass'
]

onEvent('recipes', event => {
    global.auTags = AlmostUnified.getTags()
})