// courtesy of ChiefArug and KubeJS Discord
const CROP = java('net.minecraft.world.level.block.CropBlock')
onEvent('block.right_click', event => {
    let block = event.block
    let mcLevel = block.minecraftLevel
    let blockState = block.blockState
    let mcBlock = blockState.block
    if (mcBlock instanceof CROP) {
        let mcPlayer = event.player.minecraftPlayer
        if (mcBlock.isMaxAge(blockState)) {
            let loot = CROP.getDrops(blockState, mcLevel, block.pos, null, mcPlayer, mcPlayer.getMainHandItem())
            let seedYeeted = false
            for (let i in loot) {
                if (loot[i].asKJS().id == mcBlock.getCloneItemStack(mcLevel, block.pos, blockState).asKJS().id) {
                    loot[i].count--
                    seedYeeted = true
                    break
                }
            }
            let dir = event.getFacing()
            loot.forEach(item => {
                CROP.popResourceFromFace(mcLevel, block.pos, dir, item)
            })
            if (seedYeeted || block.hasTag('minecraft:leaves')) {
                block.set(block.id, { age: '0' })
                event.server.runCommandSilent(`playsound minecraft:block.crop.break block @a ${block.x} ${block.y} ${block.z}`)
            } else { //if no seed was dropped for some odd reason
                mcLevel.destroyBlock(block.pos, true, null, 32)
            }
            event.cancel()
            event.player.swingArm(event.hand)
        }
    }
})