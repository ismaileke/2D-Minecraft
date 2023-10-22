class ChunkBuilder {
  constructor(canvasId, x, z, realImage, freeImage) {
    this.canvasId = canvasId;
    this.x = x;
    this.z = z;
    this.realImage = realImage
    this.freeImage = freeImage
    this.blocksX = []
    this.blocksZ = []
    this.playerPosition = {}
    this.ctx = document.getElementById(this.canvasId).getContext("2d");
  }

  drawChunk() {
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.z; j++) {
        let x = this.x + i * 32
        let z = this.z + j * 32
        this.blocksX[i] = x
        this.blocksZ[j] = z

        const blockImage = new Image();
        blockImage.src = this.realImage; // Texture resminin yolunu buraya ekleyin
        blockImage.onload = () => {
          this.ctx.drawImage(blockImage, x, z, 32, 32);
        };
      }
    }
  }

  addPlayer(x, z){
    const playerImage = new Image();
    playerImage.src = this.freeImage
    playerImage.onload = () => {
        this.ctx.drawImage(playerImage, this.blocksX[x], this.blocksZ[z], 32, 32);
    };
  this.playerPosition["x"] = parseInt(Object.getOwnPropertyNames(this.blocksX)[x])
  this.playerPosition["z"] = parseInt(Object.getOwnPropertyNames(this.blocksZ)[z])
}
  // Diğer fonksiyonlar burada kalır
  getCurrentPosition(){
    return [this.playerPosition["x"], this.playerPosition["z"]]
  }

  movePlayer(x, z) {
    const currentPlayerX = this.blocksX[this.playerPosition["x"]];
    const currentPlayerZ = this.blocksZ[this.playerPosition["z"]];

    const playerImage = new Image();
    const blockImage = new Image();
    blockImage.src = this.realImage
    playerImage.src = this.freeImage; // Oyuncu resminin yolunu buraya ekleyin
    playerImage.onload = () => {
        this.ctx.clearRect(currentPlayerX, currentPlayerZ, 32, 32)
        this.ctx.drawImage(blockImage, currentPlayerX, currentPlayerZ, 32, 32)
        this.ctx.drawImage(playerImage, this.blocksX[x], this.blocksZ[z], 32, 32);
    };

    this.playerPosition["x"] = x;
    this.playerPosition["z"] = z;
  }
}