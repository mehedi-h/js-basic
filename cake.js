/*
const batashi = 84;
const glumulu = 97;
const chinku = 99;

//console.log(batashi, glumulu, chinku)

if (batashi > glumulu && batashi > chinku) {
    console.log('Batashi will get the tasty cake')
} 
else if (glumulu > batashi && glumulu > chinku) { 
    console.log('Glumulu will get the tasty cake')
}
else {
    console.log('Chinku Will get the tasty cake')
}

//task 1-----
function getCake(cake) {
    const batashi = 84;
    const glumulu = 97;
    const chinku = 99;

    //console.log(batashi, glumulu, chinku)

    if (batashi > glumulu && batashi > chinku) {
        console.log('Batashi will get the tasty cake')
    } 
    else if (glumulu > batashi && glumulu > chinku) { 
        console.log('Glumulu will get the tasty cake')
    }
    else {
        console.log('Chinku Will get the tasty cake')
    }
}
getCake();
*/
function cakeWinner (cake) {
    let batashi = 84;
    let glumulu = 97;
    let chinku = 99;

    const winner = Math.max(batashi, glumulu, chinku);
    //console.log(batashi, glumulu, chinku)
    //console.log(winner);
    return winner;
}
const cake = cakeWinner();
console.log(cake);