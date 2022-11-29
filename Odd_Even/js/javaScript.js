/**
 *  Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
    Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
    Dichiariamo chi ha vinto.
 */


function getRandomNumber(numMin, numMax){
    const randomNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    return randomNumber;
}

function isOdd(num){
    if(num % 2 === 1){
        return true;
    }
    return false;
}

const userChoice = prompt('scegli pari o dispari');
const userNumber = parseInt(prompt('inserisci il tuo numero'), 10);
