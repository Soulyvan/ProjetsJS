let input        = document.querySelector('#prix');
let error        = document.querySelector('small');
let formulaire   = document.querySelector('#formulaire');

error.style.display = "none";

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups           = 0;
let nombreChoisi;

function verifier(nombre) {
    let instruction = document.createElement('div');


    if (nombre < nombreAleatoire) {
        // c'est plus
        instruction.textContent = '#' + coups + ' (' + nombre + ') C\'est plus !';
        instruction.className = "instruction plus";
    } 
    else if (nombre > nombreAleatoire){
        // c'est moins
        instruction.textContent = '#' + coups + ' (' + nombre + ') C\'est moins !';
        instruction.className = "instruction moins";
    }
    else {
        // c'est ça
        instruction.textContent = '#' + coups + ' (' + nombre + ') Félicitations, vous avez trouvé le juste prix !';
        instruction.className = "instruction fini";
        input.disabled = true;
        document.querySelector('button').disabled = true;
    }
    document.querySelector('#instructions').prepend(instruction);
}

input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = "inline";
    } 
    else {
        error.style.display = "none";
    }
});
formulaire.addEventListener('submit', (e) => {
    e.preventDefault(); // annuler l'evenement par defaut du form

    if (isNaN(input.value) || !input.value.trim() || input.value == "") {
        input.style.borderColor = 'red';
    } 
    else {
        coups++;
        input.style.borderColor = 'silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});