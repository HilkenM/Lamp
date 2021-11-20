const botao_ligar = document.getElementById('ligar')
const botao_apagar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')

function verificador_de_lampada_quebrada(){
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function ligar_vela(){
    if(!verificador_de_lampada_quebrada()){
        lamp.src = './img/lampada_on.jpg'
    }
   
}

function desligar_vela(){
    if(!verificador_de_lampada_quebrada()){
        lamp.src = './img/lampada_off.jpg'
    }
}

function quebrar_lampada(){
    lamp.src = 'img/lampada_quebrada.jpg'
}

botao_ligar.addEventListener('click', ligar_vela);
botao_apagar.addEventListener('click', desligar_vela);
lamp.addEventListener('mouseover', ligar_vela);
lamp.addEventListener('mouseleave', desligar_vela);
lamp.addEventListener('dblclick',quebrar_lampada);
