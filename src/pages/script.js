let currentCarrossel = 1; 
    
function handle() {
    document.getElementById(`carrossel${currentCarrossel}`).style.display = 'none';

    currentCarrossel++;

    if (currentCarrossel > 3) {
        currentCarrossel = 1;
    }
    document.getElementById(`carrossel${currentCarrossel}`).style.display = 'block';
}

function handlemenos() {
    document.getElementById(`carrossel${currentCarrossel}`).style.display = 'none';
    
    currentCarrossel--;

    if (currentCarrossel < 1) {
        currentCarrossel = 3;
    }

    document.getElementById(`carrossel${currentCarrossel}`).style.display = 'block';
}

function handleMusica(){
    alert("Ainda não fiz kkk")
}

function abrirModal() {
    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

document.querySelector(".btn-modal-sim").addEventListener("click", fecharModal);
document.querySelector(".btn-modal-nao").addEventListener("click", fecharModal);
