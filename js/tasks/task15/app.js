let arrey = [ 'c','b','s','w' ,'z','x']
console.log(arrey.reverse())

//---------------------------------------------

const removeShilShikest = (arr) => {
    const obj = arr.filter((elem) => {
        return Boolean(elem) != false
    })
    console.log(obj);
}
removeShilShikest([1, 5, 0, NaN, 4, 7, null, 'san', 'man', undefined])

//-----------------------------------------

let massiv = [1, 2, 4, 5, 3, 8]
console.log(massiv.splice())    //orginal massivde deyisiklik edir 
// const cavab = massiv.map((elem) => {
//     return elem = []
// })
// console.log(cavab);

//------------------------------------

let alphabet = ['p', 'd', 'a', 'y', 'h', 'k', 'b', 'n', 'c']
console.log(alphabet.sort())

//------------------------------------------------

let cumle = ['bu gun derse getmedim derse']
const tekrarSoz = cumle.find((elem) =>{
    return 
})
console.log(tekrarSoz);

//-----------------------------------------

const Case = (soz) => soz.toLowerCase().toUpperCase()
console.log(Case('Ali doES noT knoW SFRrxrf'));

let pascal = ['Bu',  'Sinaq', 'Ucun' , 'Yazilmisdir']
console.log(pascal.join(' '))


