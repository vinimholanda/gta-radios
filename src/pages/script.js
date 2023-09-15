let currentCarrossel = 1;
let setlist = 1
let nomeDaMusicaDigitada = "nenhuma"
let nomeDaMusicaAtual = "nenhuma"

var vrock = [
    '../songs/v-rock/Cum On Feel The Noize.mp3', 
    '../songs/v-rock/Yankee Rose.mp3',
];

var kdst = [
    '../songs/k-dust/A Horse With No Name.mp3',
    '../songs/k-dust/Barracuda.mp3', 
    '../songs/k-dust/Eminence Front.mp3', 
    '../songs/k-dust/Free Bird.mp3',
    '../songs/k-dust/Get Down To It.mp3',
    '../songs/k-dust/Hold the Line.mp3',
    "../songs/k-dust/Runnin' Down A Dream.mp3",
    '../songs/k-dust/Slow Ride.mp3',
    '../songs/k-dust/Smokin.mp3',
    '../songs/k-dust/Somebody up There Likes Me.mp3', 
    '../songs/k-dust/Some Kind Of Wonderful.mp3', 
    '../songs/k-dust/Strutter.mp3',
    '../songs/k-dust/Two Tickets to Paradise.mp3', 
    '../songs/k-dust/White Wedding.mp3', 
    '../songs/k-dust/Woman To Woman.mp3', 
    '../songs/k-dust/Young Turks.mp3',
];

var krose = [
    '../songs/k-rose/Bed Of Roses.mp3', 
    '../songs/k-rose/I Love a Rainy Night.mp3',
];

var frasesPorCarrossel = {
    1: '"While other stations listeners are at school... were shoplifting! V-Rock."',
    2: '"If the police cant stop you... you must be on... the dust."',
    3: '"From cow pokin’ to cow tippin’. And all the fun in between! K-Rose"',
};

var trackListPorCarrossel ={
    1: 'a',
    2: 'b',
    3: 'c',
};

var logosPorCarrossel = {
    1: '../assets/vicecityquasecentralizado.png',
    2: '../assets/sanandreas.png',
    3: '../assets/sanandreas.png',
};

var videosDeFundoPorCarrossel = {
    1: '../assets/vice-city-teste.mp4',
    2: '../assets/sanandreas1.mp4', 
    3: '../assets/sanandreas2.mp4', 
}; 

function increaseScore() {
    score++;
    scoreElement.textContent = score;
}

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

    // Atualize a frase
    var frase = frasesPorCarrossel[currentCarrossel];
    document.querySelector(".frase").textContent = frase;

    // Atualize o logo
    var logoPath = logosPorCarrossel[currentCarrossel];
    document.querySelector(".logos-jogos").src = logoPath;

    updateVideoBackground(currentCarrossel);
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

    // Atualize a frase
    var frase = frasesPorCarrossel[currentCarrossel];
    document.querySelector(".frase").textContent = frase;

    // Atualize o logo
    var logoPath = logosPorCarrossel[currentCarrossel];
    document.querySelector(".logos-jogos").src = logoPath;

    // Atualiza o vídeo de fundo com base no carrossel atual
    updateVideoBackground(currentCarrossel);

    console.log(nomeDaMusicaAtual)
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
        nomeDaMusicaAtual = krose[randomIndex]
        return krose[randomIndex];
    }else if (currentCarrossel == 2 && seta == "direita" || currentCarrossel == 3 && seta == "esquerda"){
        var randomIndex = Math.floor(Math.random() * vrock.length);
        nomeDaMusicaAtual = vrock[randomIndex]
        return vrock[randomIndex];
    }else if (currentCarrossel == 3 && seta == "direita" || currentCarrossel == 1 && seta == "esquerda"){
        var randomIndex = Math.floor(Math.random() * kdst.length);
        nomeDaMusicaAtual = kdst[randomIndex]
        return kdst[randomIndex];
    }
}

// Função para atualizar o vídeo de fundo com base no carrossel atual
function updateVideoBackground(carrossel) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.classList.add('video-hidden'); // Adicione a classe para ocultar o vídeo

    setTimeout(function () {
        const videoSrc = videosDeFundoPorCarrossel[carrossel];
        videoPlayer.src = videoSrc;
        videoPlayer.load();

        // Remova a classe de ocultação para revelar o novo vídeo com uma transição de fade
        setTimeout(function () {
            videoPlayer.classList.remove('video-hidden');
        }, 100);

        videoPlayer.play();
    }, 1000); // Atraso para dar tempo à transição de fade
}

function verificarMusica() {
    // Obtenha o valor inserido pelo usuário
    nomeDaMusicaDigitada = document.getElementById('nomeDaMusica').value;
    
    //remover ".mp3" e "../songs/k-dust/"
    nomeDaMusicaAtual = nomeDaMusicaAtual.slice(16, -4);

    // Converte para maiúsculas
    nomeDaMusicaDigitada = nomeDaMusicaDigitada.toUpperCase()
    nomeDaMusicaAtual = nomeDaMusicaAtual.toUpperCase()


    // Verifique se o nome da música está presente em uma das listas
    if (nomeDaMusicaDigitada === ''){
        alert('Por favor, digite o nome da música.');
    }
    else if (nomeDaMusicaAtual == nomeDaMusicaDigitada) {
        alert('Resposta certa!');
        handle();
    } else{
        console.log(nomeDaMusicaAtual)
        console.log(nomeDaMusicaDigitada)
        alert('Resposta errada!')
        handle()
    }

    // Limpe o campo de entrada após a verificação
    document.getElementById('nomeDaMusica').value = '';
}
