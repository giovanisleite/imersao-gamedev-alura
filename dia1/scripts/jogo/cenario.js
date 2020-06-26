class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem
    this.velocidade = velocidade
    this.x1 = 0
    this.x2 = width
  }
  
  exibe(){
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2 + 1, 0, width, height);
  }
  
  move(){
    this.x1 = this.x1 < -width ? 0 : this.x1 - this.velocidade
    this.x2 = this.x1 + width
  }
}