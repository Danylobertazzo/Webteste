function Ligar(){
    document.getElementById('lamp').src ='img/pic_bulbon.gif';
}

function Desligar(){
    document.getElementById('lamp').src ='img/pic_bulboff.gif';
}

function onOff() {
    const lampada = document.getElementById("lamp2");

    // verifica se a imagem atual é a desligada
    if (lampada.src.includes("pic_bulboff.gif")) {
        lampada.src = "img/pic_bulbon.gif"; // liga
    } else {
        lampada.src = "img/pic_bulboff.gif"; // desliga
    }
}