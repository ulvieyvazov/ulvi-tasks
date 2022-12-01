let insan = {
    namee: 'ulvi',
    age: 20,
    weight: 74,
    doing: function () {
        console.log('oxuyur...');
    }
}
delete insan.namee

for (let key in insan) {
    console.log(insan[key]);
}

//---------------------------------------------------------------

let obj1 = {
    olke: 'azerbaycan',
    paytaxt: 'baki',
    ehali: 10,
}

let obj2 = obj1

console.log(obj2);