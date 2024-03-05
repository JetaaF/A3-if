// incrementi==rrin nr per 1
console.log('inkrementi: ')
let numri = 0
console.log(++numri) //rez =1,,,,,,,,rritet brenda rreshtit ku eshte

console.log(numri++) //rez =1,,,,,,,,rritet pas deklarantes
// kur e deklarojm console.log(numri),,,,,,,,,,rez==2
console.log(numri)


console.log('dekrementi: ')
// decrementi==zvogelon nr per 1
let numi = 0
console.log(--numi) //rez =-1,,,,,,,,rritet brenda rreshtit ku eshte

console.log(numi--) //rez =-1,,,,,,,,rritet pas deklarantes
// kur e deklarojm console.log(numi),,,,,,,,,,rez==-2
console.log(numi)

// p.sh
let nr3 = 0
console.log(nr3++)// rez==0
console.log(++nr3)//rez==2


// me 'if' zbatohen jo sipas rreshtave po sipas kushteve
//  if ,   ?.....jan i njejti sen

let mosha = 18

if (mosha > 18) {
    console.log('ju mund te votoni')
}
else {
    console.log('ju nuk mund te votoni')
}
// rez===ju nuk mund te votoni,,,, sepse nuk eshte baraz me 18
//  me mujt me votu duhet me perdor shenjen >=,,me  emadhe ose baraaz



//  prompt  kthen gjithmon ne teks

// let prova1 = +prompt('Jep nje numer')
// if(prova1 % 2 == 0){
//     alert(prova1 + " numri eshte cift")
// }
// else{
//     alert(prova1 + " numri eshte tek")
// }





//  prova2

// let prova2 = +prompt('Jep nje numer')
// if (prova2 >= 0) {
//     alert('Numri eshte pozitiv')
//     if (prova2 % 2 == 0) {
//         alert(prova2 + " numri eshte cift")
//     }
//     else {
//         alert(prova2 + " numri eshte tek")
//     }
// }
// else{
//     alert('Numri eshte negativ')
// }


//  shembull ===  AND
let shi = true
let cader = false
let bora = false

if(bora && cader){
    console.log(' dil')
}
else{
    console.log('rri mbrena')
}
//  if(true and false)====false
//  true and true====true
// false and false=====false

//  OR===
if(shi || cader){
    console.log(' 2222dil')
}
else{
    console.log('rri222 mbrena')
}

//  true or true =true
// true or false =true
// false or true =true
// false or false = fasle

//  NOT===
if(!shi){
    console.log(' 33333dil')
}
else{
    console.log('rri333333 mbrena')
}
//  TRUE==> fasle
//  fasle==> true





// detyr
// let pike = +prompt('shkruani piket e testit te matematis: ')
// if(pike>=0 && pike<50){
//     alert('ju keni deshtuar testin')
// }
// else{
//     alert('keni kaluar testin')
// }

// alert('mesazh')
// prompt('len me shkrujt sene===string)
let konf = confirm('bora po bie')
//  nese e trek 'ok',,,,konf e merr vleren true
//  nese e trek 'cancel',,,,konf e merr vleren fasle


let pike = +prompt('shkruani piket e testit te matematis: ')
if(pike>=0 && pike<50){
    alert('ju keni deshtuar testin')
}
else if(pike ==100){
    alert('keni marre 100pike🤪')
}
else{
    alert('keni kaluar testin')
}





// operatori ternar - ? 
if(5>4){
    console.log('me e madhe')
}
else{
    console.log('me e vogel')
}
//  (5>4) ? consol.log('me e madhes) : consol.log('me e vogel)