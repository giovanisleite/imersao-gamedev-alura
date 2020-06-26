class Personagem {
  constructor(imagem, largura, altura){
    this.imagem = imagem
    this.largura = largura
    this.altura = altura
    this.posicao = 0
    
    this.calculaMatriz()
  }
  
  exibe() {
    let [x, y] = this.matriz[this.posicao]
    image(this.imagem, 0, height - this.altura, this.largura, this.altura, x, y, this.largura, this.altura)
    this.anima()
  }
  
  anima() {
    this.posicao = (this.posicao + 1) % this.matriz.length
  }
  
  calculaMatriz() {
    this.matriz = []
    for(let i=0; i < 4; i++) {
      for(let j=0; j < 4; j++) {
        this.matriz.push([j * this.largura, i * this.altura])
      }
    }
  }
  
}