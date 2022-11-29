function logGreeting(adiniz) {
    console.log(`${adiniz} is a JS developer`);
}
logGreeting('ulvi')

//---------------------------------------------------------

function ad(istifadeciAdi) {
    console.log(`${istifadeciAdi} is active now`);
}
ad(prompt('istifadeci adinizi daxil edin'))

//---------------------------------------------------------

function fourth(quvvet) {
    return cavab = quvvet ** 4
}
fourth(+prompt('eded daxil edin'))
console.log(`daxil edilmis ededin dorduncu dereceden quvveti: ${cavab}`);

//---------------------------------------------------------

for(let i= 100; i<1000;i++){
    if(i % 10 === 0){
        console.log(i);
    }
}

//---------------------------------------------------------

let cem = 0
for (let i = 10; i < 100; i++) {
    if (i % 2 != 0) {
        cem += i
    }
}
console.log(cem);

//---------------------------------------------------------

let eded = +prompt('ededi daxil edin')
let sum = 0
for(let i = 1; i<1000;i++){
    if(i  % eded === 0 && eded<i){
        sum += i
    }
}
console.log(sum);
