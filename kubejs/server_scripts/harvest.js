// courtesy of ChiefArug and KubeJS Discord
const CROP = java('net.minecraft.world.level.block.CropBlock')
const FakePlayerAllow = [
    "4b9dd067-5433-3648-90a3-0d48ac6041f7" // Farmer Bee
]
onEvent('block.right_click', event => {
    let block = event.block
    let blockState = block.blockState
    let mcBlock = blockState.block
    if (mcBlock instanceof CROP) {
        let player = event.player
        if (mcBlock.isMaxAge(blockState) && (!player.isFake() || FakePlayerAllow.includes(player.id.toString()))) {
            let loot = block.getDrops(player,player.getMainHandItem())
            let dir = event.getFacing()
            let seedYeeted = false
            for (let i in loot) {
                if (loot[i].id == block.item.id) {
                    loot[i].count--
                    seedYeeted = true
                }
                block.popItemFromFace(loot[i], dir)
            }
            if (seedYeeted || block.hasTag('minecraft:leaves')) {
                block.set(block.id, { age: '0' })
                event.server.runCommandSilent(`playsound minecraft:block.crop.break block @a ${block.x} ${block.y} ${block.z}`)
            } else { //if no seed was dropped for some odd reason
                block.minecraftLevel.destroyBlock(block.pos, true, null, 32)
            }
            event.cancel()
            player.swingArm(event.hand)
        }
    }
})