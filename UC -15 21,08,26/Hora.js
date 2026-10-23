//1. pegar a hora atual
const agora               = new Date();
const hora                = agora.getHours();    
const minutos             = agora.getMinutes();
const minutosFormatados   = String(minutos).padStart(2,'0');
const horaTexto           = '$(hora):${minutosFormatados}';;

const pagina              = document.getElementById('pagina');
const emojiEl             = document.getElementById('emoji');
const SaudaçãoEl          = document.getElementById('Saudação');
const horario             = document.getElementById('horario');

let turno = '';
let emojiStr = '';
let msg = '';

if (hora >= 5 && hora < 12) {
    turno = 'manha';
    emojiStr = '🎶';
    msg = 'Bom Dia';

} else if (hora >= 12 && hora < 18) {
    turno = 'tarde';
    emojiStr = '✈️';
    msg = 'Boa Tarde';
} else{
    turno = 'madrugada';
    emojiStr = '🏡';
    msg = 'Boa Madrgada';
} 

pagina.classList.add(turno);

emojiEl.textContent = emojiEl;
SaudaçãoEl.textContent = msg;
horario.textContent = 'são ${horaTexto}h';

console.log('Turno: $(turno) | Hora: $(HoraTexto)h');

