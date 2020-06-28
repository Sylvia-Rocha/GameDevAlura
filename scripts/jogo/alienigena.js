class Personagem{
    constructor(imagem){
      this.imagem = imagem;
      this.matriz = [
        [0,0],
        [105,0],
        [210,0],
        [420,0],
        [840,0],
        [1680,0],
        [0, 161],
        [105,161],
        [210,161],
        [420,161],
        [840,161],
        [1680,161],
        [0,322],
        [105,322],
        [210,322],
        [420,322],
        [840,322],
        [1680,322],
        [0,644],
        [105,644],
        [210,644],
        [420,644],
        [840,644],
        [1680,644],
      ];
      this.frameAtual = 0;
    }
    
    exibe(){
      let img = this.imagem;
      let dx = 0;
      let dy = height-161;
      let dWidth =105;
      let dHeight = 161;
      let sx = 105;
      let sy = 161;
      let sWidth = this.matriz[this.frameAtual][0];
      let sHeight = this.matriz[this.frameAtual][1];
      // image(this.imagem, 0, height-135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1],220,270);
      image(img, dx, dy, dWidth, dHeight, sWidth, sHeight,sx,sy);
      // image(img, 0, height-161, 105, 161, 0, 0, 105, 161);
      this.anima()
    }
    
    anima(){
      this.frameAtual++;
      
      if(this.frameAtual >= this.matriz.length - 1){
        this.frameAtual = 0;
      }
    }
  }