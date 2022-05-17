let btnEpocas = document.getElementById('btnEpocas');
let btnArtistas = document.getElementById('btnArtistas');
let btnMuseos = document.getElementById('btnMuseos');

function setColorReset(){
    btnEpocas.style.background = "#77997b";
    btnEpocas.style.fontStyle = "underline";
    btnArtistas.style.background = "#77997b";
    btnMuseos.style.background = "#77997b";
}

function goToEpocas(){
    window.location.href = "Paginas/ResumenEpocas.html";
}

function goToArtistas(){
    window.location.href = "Paginas/Artistas.html";
}

function goToMuseos(){
    window.location.href = "Paginas/Museos.html";
}

function setColorEpocas(){
    if(btnEpocas.value=="Epocas"){
        btnEpocas.style.background="#B3E6B9";
    }
}

function setColorArtistas(){
    if(btnArtistas.value=="Artistas"){
        btnArtistas.style.background="#B3E6B9";

    }
}

function setColorMuseos(){
    if(btnMuseos.value=="Museos"){
        btnMuseos.style.background="#B3E6B9";
    }
}