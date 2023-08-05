const fruits = ['Mango', 'Banana', 'Pineapple', 'Banana', 'Strawberry', 'Mango', 'Apple', 'Pineapple', 'Grapes', 'Banana', 'Strawberry', 'Jackfruit']

function removeDuplicate(fruits) {
    const unique = [];
    for (let i = 0; i < fruits.length; i++) {
        const arr = fruits[i];
        if (unique.includes(arr) === false) {
            unique.push(arr);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(fruits);
console.log(uniqueNames);