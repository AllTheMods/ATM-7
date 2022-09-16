onEvent("ponder.registry", event => {
    event.create(["forbidden_arcanus:hephaestus_forge", "forbidden_arcanus:darkstone_pedestal", "forbidden_arcanus:arcane_crystal_obelisk"])
        .scene("heph_forge", "Building the Hephaestus Forge", "kubejs:hephforge", (scene, util) => {
            for (let x = 0; x < 9; x++) {
                for (let z = 0; z < 9; z++) {
                    scene.world.showSection([x, 0, z], Facing.down)
                    scene.idle(2)
                }
                if (x == 1) {
                    scene.text(40, "Build the base structure")
                }
                if (x == 2) {
                    scene.text(80, "9x Arcane Chiseled Polished Darkstone", [2.5, 1, 2.5])
                }
                if (x == 3) {
                    scene.text(80, "4x Chiseled Arcane Polished Darkstone", [3.5, 1, 4.5])
                }
                if (x == 4) {
                    scene.text(80, "48x Polished Darkstone", [4.5, 1, 6.5])
                }
            }
            scene.idle(10)
            scene.addKeyframe()
            scene.world.setBlock([4, 1, 4], "minecraft:smithing_table", false)
            scene.world.showSection([4, 1, 4], Facing.down)
            scene.text(20, "Place down a Smithing Table in the center", [4.5, 2, 4.5]).placeNearTarget()
            scene.idle(30)
            let bbox = util.select.fromTo(1, 1, 1, 7, 1, 7)
            bbox = bbox.add(util.select.fromTo(0, 1, 3, 8, 1, 5))
            bbox = bbox.add(util.select.fromTo(3, 1, 0, 5, 1, 8))
            scene.addKeyframe()
            scene.overlay.showOutline(PonderPalette.GREEN, "airgap", bbox, 60)
            scene.text(40, "This area must be clear for the transformation").placeNearTarget()
            scene.idle(20)
            scene.showControls(60, [4.5, 2, 4.5], "down")
                .rightClick()
                .withItem("forbidden_arcanus:mundabitur_dust")
                .whileSneaking()
            scene.idle(20)
            scene.world.modifyBlock([4, 1, 4], () => Block.id("forbidden_arcanus:hephaestus_forge"), true)
        })
        .scene("heph_forge2", "Using the Hephaestus Forge", "kubejs:hephforge", (scene, util) => {
            scene.world.showSection([0, 0, 0, 9, 0, 9], Facing.down)
            scene.world.showSection([4, 1, 4], Facing.down)
            scene.idle(10)
            scene.text(60, "Darkstone Pedestals can be placed like so, they hold items for the ritual", [2.5, 1, 6.5])
            let positions = [
                { x: 2, y: 1, z: 6 },
                { x: 4, y: 1, z: 7 },
                { x: 6, y: 1, z: 6 },
                { x: 7, y: 1, z: 4 },
                { x: 6, y: 1, z: 2 },
                { x: 4, y: 1, z: 1 },
                { x: 2, y: 1, z: 2 },
                { x: 1, y: 1, z: 4 },
            ]
            positions.forEach(pos => {
                scene.world.setBlock([pos.x, pos.y, pos.z], "forbidden_arcanus:darkstone_pedestal", false)
                scene.world.showSection([pos.x, pos.y, pos.z], Facing.down)
                scene.idle(3)
            })
            scene.idle(20)
            positions.forEach(pos => {
                scene.world.hideSection([pos.x, pos.y, pos.z], Facing.down)
                scene.idle(3)
            })
            scene.idle(20)
            scene.text(60, "Arcane Crystal Obelisks can be placed in the same spaces and passively generate Aureal", [2.5, 1, 6.5])
            scene.world.setBlock([2, 1, 6], "forbidden_arcanus:arcane_polished_darkstone", false);
            [1, 2, 3].forEach(y => {
                scene.world.showSection([2, y, 6], Facing.down)
                scene.idle(3)
            })
            scene.idle(10)
            scene.showControls(60, [2, 2.5, 6.5], "left")
                .rightClick()
                .withItem("forbidden_arcanus:mundabitur_dust")
            scene.idle(30)
            scene.world.replaceBlocks([2, 1, 6], Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "lower"), true);
            scene.world.replaceBlocks([2, 2, 6], Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "middle"), true);
            scene.world.replaceBlocks([2, 3, 6], Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "upper"), true);
        })
})