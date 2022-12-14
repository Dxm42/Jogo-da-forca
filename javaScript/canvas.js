function desenharCanvas() {
    tabuleiro.lineWidth=8
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.fillStyle= "#F3F5FC"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.fillRect(0,0,1200,800)
    tabuleiro.beginPath();
    tabuleiro.moveTo(650,500)
    tabuleiro.lineTo(900,500)
    tabuleiro.stroke()
    tabuleiro.closePath()
  }

  function desenharLinhas() {
    tabuleiro.lineWidth=6;
    tabuleiro.lineCap="round"
    tabuleiro.lineJoin="round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    let largura=600/palavraSecreta.length
    for (let i=0;i<palavraSecreta.length;i++){
      tabuleiro.moveTo(500+(largura*i),640)
      tabuleiro.lineTo(550+(largura*i),640)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
  }

  function escreverLetraCorreta(index){
    tabuleiro.lineWidth = 6;
    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871";    
    let largura = 600/palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index],505 + (largura * index),620); 
  }

  function escreverLetraIncorreta(letra,erros){
    tabuleiro.font = "bold 40px Inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0A3871"; 
    tabuleiro.lineWidth = 6;
    tabuleiro.fillText(letra,520 + (40 *(10 - erros)),720,40);    
  }

   function desenharForca() {   
    tabuleiro.beginPath();    
    tabuleiro.moveTo(670,500);
    tabuleiro.lineTo(670,130);    
    tabuleiro.moveTo(800,130);
    tabuleiro.lineTo(670,130);    
    tabuleiro.moveTo(800,130);
    tabuleiro.lineTo(800,200); 


    tabuleiro.stroke();
    tabuleiro.closePath();
}


function desenhaBonecoForca() {
    switch (erros) {
        case 1:
            // perna direita
            tabuleiro.beginPath();
            tabuleiro.moveTo(840,390);
            tabuleiro.lineTo(800,360);             
            tabuleiro.stroke();
            tabuleiro.closePath();
            break;

        case 2:
            // perna esquerda
            tabuleiro.beginPath();
            tabuleiro.moveTo(760,390);
            tabuleiro.lineTo(800,360); 
            tabuleiro.stroke();
            tabuleiro.closePath();
            break;

        case 3:
            // bra??o esquerdo
            tabuleiro.beginPath();
            tabuleiro.moveTo(760,290);
            tabuleiro.lineTo(800,260); 
            tabuleiro.stroke();
            tabuleiro.closePath();
            break;

        case 4:
            // bra??o direito
            tabuleiro.beginPath();
            tabuleiro.moveTo(840,290);
            tabuleiro.lineTo(800,260);
            tabuleiro.stroke();
            tabuleiro.closePath();
            break;

        case 5:
            // tronco
            tabuleiro.beginPath();
            tabuleiro.moveTo(800,260);
            tabuleiro.lineTo(800,360); 

            tabuleiro.stroke();
            tabuleiro.closePath();
            break;

        case 6:
            // cabe??a
            tabuleiro.beginPath();
            tabuleiro.arc(800,230,30, -1,Math.PI * 2 );
            tabuleiro.stroke();
            tabuleiro.closePath();
    }
  }  