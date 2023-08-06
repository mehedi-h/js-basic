
//No-1: Show 1-50;
//No-2: If the number is divisible by 3 then show Hattrick! insted of number;
//No-3: If the number is divisible by 5 then show Poncho Pandob! insted of number;
//No-4 : if the number is divisible by both 3 & 5 then show Hall in Fame! insted of number;

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Hall in Fame!')
    }
    else if (i % 3 === 0) {
        console.log('Hattrick!')
    }
    else if (i % 5 === 0) {
        console.log('Poncho Pandob!')
    }
    else {
        console.log(i)
    }
}