/*
takaToDollar name er function likte hobe.
taka k dollar a convert kore return korte hobe.
return kore console kore dekhate hobe
*/

function takaToDollar(taka) {
    const dollar = taka / 110;
    return dollar;
}

const myTaka = 25800;
const myDollar = takaToDollar(myTaka);
const inCent = myDollar.toFixed(2);

console.log(myTaka, "tk converted in $"+inCent, "cent");
