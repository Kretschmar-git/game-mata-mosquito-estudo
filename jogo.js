var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil') {
    criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris') {
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -= 1 
    if(tempo < 0) {
        clearInterval(cronometro) //para o cronometro
        clearInterval(criaMosca) //para a função criaMosca
        window.location.href = 'vitoria.html' //redireciona para a página vitor
    }else{
        document.getElementById('cronometro').innerHTML = tempo    
    }
}, 1000)

function posicaoRandomica() {

//remover o mosquito anterior (caso exista)
if(document.getElementById('mosquito')) { //se existir um mosquito 
    document.getElementById('mosquito').remove() //remove o mosquito

    if(vidas > 3) { //se as vidas forem maiores que 3  
        window.location.href = 'fim_de_jogo.html' //redireciona para a página fim_de_jogo.html
    } else { //senão 
    document.getElementById('v' + vidas).src = '/imagens/coracao_vazio.png' //troca a imagem da vida para a imagem de vida perdida
    vidas++ //incrementa a variável vidas
    }
}

var posicaoX = Math.floor(Math.random() * (largura - 90)) 
//gera um número aleatório entre 0 e a largura da tela (90 é o tamanho do mosquito e é subtraído para que o mosquito não ultrapasse a tela)
var posicaoY = Math.floor(Math.random() * (altura - 90)) 
//gera um número aleatório entre 0 e a altura da tela (90 é o tamanho do mosquito e é subtraído para que o mosquito não ultrapasse a tela)

//estes dois codigos abaixo são para que o mosquito não ultrapasse a tela mas não funcionaram de forma perfeita
//positionX = posicaoX < 0 ? 0 : posicaoX //se a posição X for menor que 0, então a posição X é 0, senão a posição X é a posição X
//positionY = posicaoY < 0 ? 0 : posicaoY //se a posição Y for menor que 0, então a posição Y é 0, senão a posição Y é a posição Y

console.log(posicaoX, posicaoY)

//criando o elemento html
var mosquito = document.createElement('img') //cria o elemento <img> e o armazena na variável mosquito
mosquito.src = 'imagens/mosquito.png' //adiciona a imagem do mosquito
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //adiciona as classes que são retornadas pelas funções tamanhoAleatorio e ladoAleatorio
mosquito.style.left = posicaoX + 'px' //adiciona a posição X
mosquito.style.top = posicaoY + 'px' //adiciona a posição Y
mosquito.style.position = 'absolute' //adiciona a posição absoluta
mosquito.id = 'mosquito' //adiciona o id mosquito
mosquito.onclick = function() {
    this.remove() 
    //remove o mosquito ao clicar nele / THIS se refere ao proprio elemento html(mosquito) que está sendo clicado
}

document.body.appendChild(mosquito) //adiciona o elemento mosquito ao body


}

//Mudando o tamanho do mosquito
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1' //retorna a classe mosquito1
        case 1:
            return 'mosquito2' //retorna a classe mosquito2
        case 2:
            return 'mosquito3'  //retorna a classe mosquito3
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA' //retorna a classe ladoA
        case 1:
            return 'ladoB' //retorna a classe ladoB
    }
}