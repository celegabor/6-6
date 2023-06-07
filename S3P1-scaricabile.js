/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sum = 0
function crazySum(val1, val2) {
    
    if (val1 === val2) {
        sum = (val1 + val2) * 3
    } else {
        sum = val1 + val2
    }
    return sum 
}
crazySum(5, 5)
console.log(sum)


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 
function boundary(num) {
    if ((num >= 20 && num <= 100) || num === 400){
        return 'true'
    } else {
        return 'false'
    }
 }
 console.log( boundary(109));
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function reverseString(text) {
    let array = text.split('')
    let reverse = array.reverse()
    let finalText = reverse.join("")
    return finalText
}
let risultato = finalText
console.log(finalText)

reverseString('buongiorno')

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let testoFinale = ''
function upperFirst(words) {
    let array = words.split(' ')

    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].charAt(0).toUpperCase() + array[index].slice(1)

    }

    return array.join(" ")
}

console.log(upperFirst('buonasera come stai? bene grazie te?'))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let array = []

    if (n <= 10){


        for (let index = 0; index < n; index++) {
            array[index] = Math.floor (Math.random() * 10) 
            
        }
    } else {
        console.log('Devi inserire un numero più piccolo!!')
    }
    return array
 
}

console.log(giveMeRandom(10))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2){
    return l1 * l2
}
console.log('area rettangolo: ' + area (10, 5))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numb) {
    const numFisso = 19
    let totale =  numb - numFisso
    if (totale > numFisso) {
        totale = totale * 3
        return totale
    }
    return totale
}

console.log(crazyDiff(150));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(testo) {
    if (testo.startsWith('code')){
        return testo
      } else {
        return 'code ' + testo
      }
}

console.log(codify('code testo inventato parole'))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(nums) {
    if (nums > 0){
        if(nums % 3 === 0){
            return 'true'
        } else if (nums % 7 === 0) {
            return 'true'
        } else {
            return 'false'
        }
    } else {
        return 'devi inserire un numero positivo'
    }
    
}

console.log(check3and7(1274343))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(params) {
    return params.slice(1, -1)
}

console.log(cutString('parola lunga'));