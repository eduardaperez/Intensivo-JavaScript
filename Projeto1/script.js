const botaoPlayPause = document.getElementById('play-pause');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}




botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', voltarFaixa);