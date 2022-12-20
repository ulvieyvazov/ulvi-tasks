function reqemler(array) {
    const menfi = []
    for (let eded of array) {
        if (eded < 0) {
            menfi.push(eded)
        }
    } return menfi
}
console.log(reqemler([1, 4, 5, -8, 7, -2, -9]));
//-------------------------------------------

// let adlar = ['Muhammed','zeyd','teymur','atilla','yusif','aliriza']
// function findLongestName(adlar){
//     for(let i = 1; i<adlar; i++){
//         console.log(i);
//     }return adlar
// }
// findLongestName()
//-------------------------------------------------
let adlar = ['Muhammed', 'zeyd', 'teymur', 'atilla', 'yusif', 'aliriza']
const netice = adlar.forEach((ad, index) => {
    console.log(`${index} - ${ad}`);
})

//------------------------------------------------

let number = [1, 4, 8, 6, -7, -5, 3, -2]
const otvet = number.map((Elem) => {
    if (Elem < 0) {
        return Elem * (-2)
    }
    else {
        return Elem * 2
    }
})
console.log(otvet);

//--------------------------------------------

let Name = ['Adem', 'Bill', 'Alan', 'Sam', 'Tyler', 'Anna']
const yeni = Name.filter((elem) => {
    return elem[0] === 'A'
})
console.log(yeni);

//---------------------------------------
let arr = [1, 4, 7, -2, 9, -5]
const makeDouble = arr.map((elem) => {
    return elem * 2
})
console.log(makeDouble);

//--------------------------------------

let edeler = [1, 5, 8, 12, 9, 25, 36, 2, 41, 13, 7, 4, 21, 77, 99,]
const tek_cut = edeler.map((elem) =>{
    if(elem % 2 === 0){
        return elem 
    }
    else{
        return elem
    }
})
console.log(tek_cut);
