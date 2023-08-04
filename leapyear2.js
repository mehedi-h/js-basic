// function leapYear(year) {
//     const remainder = year % 4;
//     if (remainder == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const isLeapYear = leapYear(2070);
// console.log (isLeapYear);











function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        console.log("The Selected Year", year, "is a Leap Year")
    } else {
        console.log("The Selected Year", year, "is Not a Leap Year")
    }
    return year;
} 
const leapYear = isLeapYear(2032);
console.log(leapYear);


