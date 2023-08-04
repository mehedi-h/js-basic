function leapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        console.log("You have chosen a leapyear", year)
    }
    else {
        console.log("You have chosen a non Leap Year", year)
    }
}
leapYear(2050);
