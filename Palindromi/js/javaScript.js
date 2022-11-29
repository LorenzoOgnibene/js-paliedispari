/**
 *  Palidroma
    Chiedere all’utente di inserire una parola:
    Creare una funzione per capire se la parola inserita è palindroma
 */
  
function palindrome(string) {
    // find the length of a string
    const len = string.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'Non è un palindromo';
        }
    }
    return 'E un palindromo';
}
      
const userWord = prompt('inserisci una parola e ti dirò se è un palindromo');
console.log(palindrome(userWord));