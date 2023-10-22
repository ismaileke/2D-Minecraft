const builder = new ChunkBuilder("game", 16, 16, "textures/block.png", "textures/player.png");
builder.drawChunk();
builder.addPlayer(8, 8);

const builder2 = new ChunkBuilder("game2", 9, 1, "textures/slot.png", "textures/slot_hover.png");
builder2.drawChunk();
builder2.addPlayer(0, 0);
document.addEventListener("keydown", keydown);

function keydown(event){
    console.log(event.keyCode)
    const playerPos = builder.getCurrentPosition();
    let x = playerPos[0]
    let z = playerPos[1]
    switch (event.keyCode) {
        case 13: // Enter button
            break;
        case 87: // W button
            if (z > 0) {
                builder.movePlayer(x, z-1)
            }
            break;
        case 83: // S button
            if (z < 15) {
                builder.movePlayer(x, z+1)
            }
            break;
        case 65: // A button
            if (x > 0) {
                builder.movePlayer(x-1, z)
            }
            break;
        case 68: // D button
            if (x < 15) {
                builder.movePlayer(x+1, z)
            }
            break;
        case 49: // Inventory Slot 1
            builder2.movePlayer(0, 0);
            break;
        case 50: // Inventory Slot 2
            builder2.movePlayer(1, 0);
            break;
        case 51: // Inventory Slot 3
            builder2.movePlayer(2, 0);
            break;
        case 52: // Inventory Slot 4
            builder2.movePlayer(3, 0);
            break;
        case 53: // Inventory Slot 5
            builder2.movePlayer(4, 0);
            break;
        case 54: // Inventory Slot 6
            builder2.movePlayer(5, 0);
            break;
        case 55: // Inventory Slot 7
            builder2.movePlayer(6, 0);
            break;
        case 56: // Inventory Slot 8
            builder2.movePlayer(7, 0);
            break;
        case 57: // Inventory Slot 9
            builder2.movePlayer(8, 0);
            break;
    }
}