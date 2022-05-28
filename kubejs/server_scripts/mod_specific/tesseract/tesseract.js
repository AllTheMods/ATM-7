onEvent('recipes', event => {
    event.remove({id: 'tesseract:tesseract'})

    event.shaped("kubejs:tesseract_frame", ["ogo", "gag", "ogo"], {
        o: "minecraft:obsidian",
        g: "thermal:obsidian_glass",
        a: "allthemodium:allthemodium_ingot"
    })
})
