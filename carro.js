//Codigos do carro 

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210,270,318]; 
let velocidadeCarros = [3, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;
 
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
 }
}

//Velocidade carro
function movimentaCarro (){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i]
  }
}
function resetaPosicaoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
  }
}
}
  function passouTodaATela(xCarros){
    return xCarros < -50;
    }