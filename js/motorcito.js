var estadoLicuadora = 'apagada';
var sonidoLicuadora = document.getElementById('blender-sound');
var licuadora = document.getElementById('blender');

function controlarLicuadora() {
    if (estadoLicuadora == 'apagada'){
        estadoLicuadora = 'encendido';
        blendersound();
        licuadora.classList.add('active');
        /* console.log('me prendiste'); */
    } else {
        estadoLicuadora = 'apagada'
        blendersound();
        licuadora.classList.remove('active')
        /* console.log('me apagaste'); */
    }
}

function blendersound(){
    if(sonidoLicuadora.paused) {
        sonidoLicuadora.play();
    } else {
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}