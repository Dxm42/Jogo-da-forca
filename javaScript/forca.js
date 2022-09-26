let palavras = ['ALURA', 'FORCA', 'HTML', 'ORACLE', 'LOGICA', 'PROGRAMA', 'DESAFIO',"AZUL", "AMARELO", "VERMELHO", "ROXO", "VERDE", "PRETO", "ROSA",];
let tabuleiro = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

let letras = [];
let erros = 7;
let acertos = 0;


function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra;    
    return palavra;
  }



function verificarLetra(key) {
	let estado  = false;

	if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
			letras.push(key);		
			return estado;
	}else{
		estado = true;
		letras.push(key);
		return estado;
	}	
}

function adicionarLetraIncorreta(){
erros -= 1;
}



function verificaSeGanhou() {	
	if(acertos === palavraSecreta.length){
    alert('Você Venceu. Parabéns! a Palavra Secreta era:  ' + palavraSecreta);

    }
}

function verificaSePerdeu() {
    if (erros == 1) {
        alert('Você errou !! a Palavra Secreta era:  ' + palavraSecreta);
    }
}

  function iniciaJogo(){
    document.getElementById("c-principal").style.display = 'none';
    escolherPalavraSecreta();
    
    desenharCanvas();
    desenharLinhas();
    desenharForca();


    document.onkeydown = (e) => {
    	let letra = e.key.toUpperCase()

    	if(verificarLetra(letra) && palavraSecreta.includes(letra)){
    		for (let i = 0; i < palavraSecreta.length; i++) {
    			if(palavraSecreta[i] === letra){
    				escreverLetraCorreta(i);
    				verificaSeGanhou();
                    acertos++;    				 				  				
    			}
    		}
    	}else{
    		adicionarLetraIncorreta(letra)
    		escreverLetraIncorreta(letra,erros)
    		desenhaBonecoForca();    		
    		verificaSePerdeu();
    	}
    }
  }