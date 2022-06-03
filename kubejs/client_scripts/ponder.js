onEvent("ponder.tag", event => {
    event.createTag("kubejs:tipstricks", "allthetweaks:patrick_star", "Tips and Tricks", "Helpful Information for AllTheMods 7", ["forbidden_arcanus:hephaestus_forge", "tombstone:decorative_grave_normal", "pylons:harvester_pylon"])
})

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
                    scene.text(80, "45x Polished Darkstone", [4.5, 1, 6.5])
                }
            }
            scene.idle(10)
            scene.addKeyframe()
            scene.world.setBlock([4, 1, 4], "minecraft:smithing_table", false)
            scene.world.showSection([4, 1, 4], Facing.down)
            scene.text(20, "Place down a Smithing Table in the center", [4.5, 2, 4.5]).placeNearTarget()
            scene.idle(30)
            bbox = util.select.fromTo(1, 1, 1, 7, 1, 7)
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

    event.create([
        "tombstone:decorative_grave_simple",
        "tombstone:decorative_grave_normal",
        "tombstone:decorative_grave_cross",
        "tombstone:decorative_tombstone",
        "tombstone:decorative_subaraki_grave",
        "tombstone:decorative_grave_original",
        "tombstone:grave_dust",
        "tombstone:essence_of_undeath"
    ]).scene("tomb1", "Getting Started with Corail Tombstone", (scene, util) => {
        scene.showBasePlate()
        scene.idle(10)

        const pos1 = util.grid.at(1, 0, 1)
        const pos1top = util.vector.topOf(pos1)
        const pos2 = util.grid.at(1, 0, 3)
        const pos2top = util.vector.topOf(pos2)
        const pos3 = util.grid.at(3, 0, 3)
        const pos3top = util.vector.topOf(pos3)
        const pos4 = util.grid.at(3, 0, 1)
        const pos4top = util.vector.topOf(pos4)
        const center = util.grid.at(2, 0, 2)
        const centerTop = util.vector.topOf(center)

        const zombie = scene.world.createEntity("zombie", pos1top)
        scene.idle(10)
        const skellie = scene.world.createEntity("skeleton", pos2top)
        scene.idle(10)
        scene.text(60, "Kill Undead Mobs", [1.5, 1, 1.5]).placeNearTarget()
        const stray = scene.world.createEntity("stray", pos3top)
        scene.idle(10)
        const zpiglin = scene.world.createEntity("zombified_piglin", pos4top)
        scene.idle(9)
        scene.world.modifyEntity(zombie, (e) => {
            e.discard();
        })
        scene.idle(1)
        const drowned = scene.world.createEntity("drowned", pos1top)
        scene.idle(9)
        scene.world.modifyEntity(skellie, (e) => {
            e.discard();
        })
        scene.idle(1)
        const wskellie = scene.world.createEntity("wither_skeleton", pos2top)
        scene.idle(9)
        scene.world.modifyEntity(stray, (e) => {
            e.discard();
        })
        scene.idle(1)
        const husk = scene.world.createEntity("husk", pos3top)
        scene.idle(9)
        scene.world.modifyEntity(zpiglin, (e) => {
            e.discard();
        })
        scene.idle(1)
        const hoglin = scene.world.createEntity("zoglin", pos4top)
        scene.idle(10)
        scene.world.modifyEntity(drowned, (e) => {
            e.discard();
        })
        scene.idle(10)
        scene.world.modifyEntity(wskellie, (e) => {
            e.discard();
        })
        scene.text(60, "This has a rare chance to drop Grave's Dust", [1.5, 1, 1.5]).placeNearTarget()
        scene.world.createItemEntity(centerTop, util.vector.of(-0.06, 0.4, -0.06), "tombstone:grave_dust")
        scene.idle(10)
        scene.world.modifyEntity(husk, (e) => {
            e.discard();
        })
        scene.idle(10)
        scene.world.modifyEntity(hoglin, (e) => {
            e.discard();
        })
        scene.text(60, "And a rarer chance to drop Essence of Undeath", [3.5, 1, 3.5]).placeNearTarget()
        scene.world.createItemEntity(centerTop, util.vector.of(0.06, 0.4, 0.06), "tombstone:essence_of_undeath")
    })
        .scene("tomb2", "Graves", (scene, util) => {
            scene.showBasePlate()
            scene.idle(10)
            scene.world.showSection([1, 1, 2], Facing.down)
            scene.world.showSection([3, 1, 2], Facing.down)
            scene.overlay.showText(100)
                .text("Graves come in two marble colors")
                .independent(50)
                .placeNearTarget()
            scene.overlay.showText(100)
                .text("and six different styes")
                .independent(66)
                .placeNearTarget();
            ["tombstone:decorative_grave_simple", "tombstone:decorative_grave_normal", "tombstone:decorative_grave_cross", "tombstone:decorative_tombstone", "tombstone:decorative_subaraki_grave", "tombstone:decorative_grave_original"].forEach(name => {
                scene.world.setBlock([1, 1, 2], Block.id(name), false)
                scene.idle(10)
                scene.world.setBlock([3, 1, 2], Block.id(name).with("model_texture", "1"), false)
                scene.idle(10)
            })
            scene.overlay.showText(100)
                .text("30 minutes after a grave is placed")
                .independent(40)
                .placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(100)
                .text("or the previous soul is used")
                .independent(56)
                .placeNearTarget()
            scene.idle(10)
            scene.overlay.showText(100)
                .text("a new soul will spawn")
                .independent(72)
                .placeNearTarget()
            scene.idle(20)
            scene.addKeyframe()
            const black = util.grid.at(1, 0, 2)
            const blackTop = util.vector.topOf(black)
            const lightning1 = scene.world.createEntity("lightning_bolt", blackTop)
            scene.idle(10)
            scene.world.modifyEntity(lightning1, (e) => {
                e.discard();
            })
            const white = util.grid.at(3, 0, 2)
            const whiteTop = util.vector.topOf(white)
            const lightning2 = scene.world.createEntity("lightning_bolt", whiteTop)
            scene.idle(10)
            scene.world.modifyEntity(lightning2, (e) => {
                e.discard();
            })
            scene.particles.rotationIndicator(60, [1, 2, 2], 0.3, 0.3, "Y").rotationSpeed(5).color("#D133ED")
            scene.idle(10)
            scene.particles.rotationIndicator(60, [3, 2, 2], 0.3, 0.3, "Y").rotationSpeed(5).color("#00FFFC")
            scene.idle(100)

        })
    event.create("pylons:harvester_pylon").scene("harvest1", "Using the Harvester Pylon", "farm", (scene, util) => {
        scene.showBasePlate()
        scene.overlay.showText(40).text("The Harvester Pylon").independent(20).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("is placed in the water").independent(36).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("block for the farm").independent(52).placeNearTarget()
        scene.idle(10)
        scene.world.hideSection([0, 0, 0, 9, 0, 3], Facing.DOWN)
        scene.idle(10)
        scene.showControls(20, [4.5, 1, 4.5], "down")
            .rightClick()
            .withItem("pylons:harvester_pylon")
        scene.idle(10)
        scene.world.modifyBlock([4, 0, 4], () => Block.id("pylons:harvester_pylon").with("waterlogged", "true"), false)
        scene.idle(20)
        scene.addLazyKeyframe()
        scene.overlay.showText(40).text("The Harvester Pylon").independent(20).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("needs a hoe in it's").independent(36).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("inventory to operate").independent(52).placeNearTarget()
        scene.idle(10)
        scene.showControls(20, [4.5, 1, 4.5], "down")
            .withItem("minecraft:stone_hoe")
        scene.idle(10)
        scene.overlay.showText(40).text("it's durability will be").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("used during harvesting").independent(84).placeNearTarget()
        scene.idle(30)
        scene.addLazyKeyframe()
        scene.overlay.showText(40).text("The Harvester Pylon").independent(20).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("needs storage above it").independent(36).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(40).text("to place harvested items into").independent(52).placeNearTarget()
        scene.idle(10)
        scene.showControls(20, [4.5, 2, 4.5], "down")
            .rightClick()
            .withItem("minecraft:barrel")
        scene.idle(10)
        scene.world.showSection([4, 1, 4], Facing.down)
        scene.idle(20)
        scene.addLazyKeyframe()
        scene.world.showSection([0, 0, 0, 9, 0, 3], Facing.UP)
        scene.idle(10)
        threeby = util.select.fromTo(3, 1, 3, 5, 1, 5).substract(util.select.position(4,1,4))
        fiveby = util.select.fromTo(2, 1, 2, 6, 1, 6).substract(util.select.position(4,1,4))
        sevenby = util.select.fromTo(1, 1, 1, 7, 1, 7).substract(util.select.position(4,1,4))
        nineby = util.select.fromTo(0, 1, 0, 8, 1, 8).substract(util.select.position(4,1,4))
        scene.world.setBlocks(nineby, Block.id("minecraft:wheat",{age:"7"}),false)
        scene.world.showSection(nineby, Facing.UP)
        scene.idle(10)
        scene.overlay.showText(60).text("The Harvester Pylon").independent(20).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(60).text("can be set to harvest").independent(36).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(60).text("in an area of:").independent(52).placeNearTarget()
        scene.idle(10)
        scene.overlay.showText(20).text("3x3").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showOutline(PonderPalette.GREEN, "threeby", threeby, 30)
        scene.idle(10)
        scene.world.modifyBlocks(threeby, (curState) => curState.with("age",0), false)
        scene.idle(10)
        scene.overlay.showText(20).text("5x5").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showOutline(PonderPalette.GREEN, "fiveby", fiveby, 30)
        scene.idle(10)
        scene.world.modifyBlocks(fiveby, (curState) => curState.with("age",0), false)
        scene.idle(10)
        scene.overlay.showText(20).text("7x7").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showOutline(PonderPalette.GREEN, "sevenby", sevenby, 30)
        scene.idle(10)
        scene.world.modifyBlocks(sevenby, (curState) => curState.with("age",0), false)
        scene.idle(10)
        scene.overlay.showText(20).text("9x9").independent(68).placeNearTarget()
        scene.idle(10)
        scene.overlay.showOutline(PonderPalette.GREEN, "nineby", nineby, 30)
        scene.idle(10)
        scene.world.modifyBlocks(nineby, (curState) => curState.with("age",0), false)
        scene.idle(10)
    })

})