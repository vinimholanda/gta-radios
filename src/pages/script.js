// 1 - V-Rock, 2- K-DST, 

let currentCarrossel = 1;
let setlist = 1

var vrock = [
    '../songs/v-rock/Cum On Feel The Noize.mp3',
    '../songs//v-rock/Yankee Rose.mp3',
];

var kdust = [
    '../songs/k-dust/Free Bird.mp3',
    '../songs/k-dust/Hold the Line.mp3',
];

var krose = [
    '../songs/k-rose/Bed Of Roses.mp3',
    '../songs/k-rose/I Love a Rainy Night.mp3',
];

// Função para avançar para o próximo slide no carrossel
function handle() {

    var audioPlayer = document.getElementById('audioPlayer');
    var randomSong = getRandomSong("direita");
    audioPlayer.src = randomSong;
    audioPlayer.play();

    document.getElementById(`carrossel${currentCarrossel}`).style.display = 'none';

    currentCarrossel--;

    if (currentCarrossel < 1) {
        currentCarrossel = 3;
    }

    document.getElementById(`carrossel${currentCarrossel}`).style.display = 'block';
}

// Função para retroceder para o slide anterior no carrossel
function handlemenos() {

    var audioPlayer = document.getElementById('audioPlayer');
    var randomSong = getRandomSong("esquerda");
    audioPlayer.src = randomSong;
    audioPlayer.play();

    document.getElementById(`carrossel${currentCarrossel}`).style.display = 'none';

    currentCarrossel++;

    if (currentCarrossel > 3) {
        currentCarrossel = 1;
    }

    document.getElementById(`carrossel${currentCarrossel}`).style.display = 'block';
}

// Função para abrir o modal
function abrirModal() {
    document.getElementById("modal").style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// Adiciona ouvintes de eventos para os botões dentro do modal
document.querySelector(".btn-modal-sim").addEventListener("click", fecharModal);
document.querySelector(".btn-modal-nao").addEventListener("click", fecharModal);

function getRandomSong(seta) {

    if(currentCarrossel == 1 && seta == "direita" || currentCarrossel == 2 && seta == "esquerda"){
        var randomIndex = Math.floor(Math.random() * krose.length);
        return krose[randomIndex];
    }else if (currentCarrossel == 2 && seta == "direita" || currentCarrossel == 3 && seta == "esquerda"){
        var randomIndex = Math.floor(Math.random() * vrock.length);
        return vrock[randomIndex];
    }else if (currentCarrossel == 3 && seta == "direita" || currentCarrossel == 1 && seta == "esquerda"){
        var randomIndex = Math.floor(Math.random() * kdust.length);
        return kdust[randomIndex];
    }
}