function ededler(value){
    for(let i = 1; i<value; i++){
        if( value % i === 0){
            return 'murekkeb'
        }
        return 'sade'

    }
}
console.log(ededler(9)); 

//----------------------------------------------------------------------------


function dereceler(selsi) {
    return faranheit = selsi * 1.8 + 32;
}
dereceler(8)
console.log(faranheit);

//----------------------------------------------------------------------------

function cevre(radius) {
    return sahe = Math.PI * radius * radius
}
cevre(5)
console.log(sahe);

//----------------------------------------------------------------------------

function eded(tesadufi){
    return Math.floor(Math.random() * tesadufi)   
}
const getRandom = eded(20)
console.log(getRandom);



