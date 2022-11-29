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

function isOddOrEven(num){
    if(num % 2 === 1){
        return 'dispari';
    }
    return 'è pari';
}

const userChoice = prompt('scegli pari o dispari');
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'), 10);
const computerNumber = getRandomNumber(1, 5);
let sum = computerNumber + userNumber;
const OddOrEven = isOddOrEven(sum);

console.log('io ho scelto ' + computerNumber);
console.log('tu hai scelto ' + userChoice  + " " + userNumber);

if(OddOrEven === 'dispari' && userChoice == 'dispari'){
    console.log('HAI VINTOOOO');
}else if (OddOrEven === 'è pari' && userChoice == 'pari'){
    console.log('HAI VINTOOOO');
}else{
    console.log('HO VINTO IOO')
}