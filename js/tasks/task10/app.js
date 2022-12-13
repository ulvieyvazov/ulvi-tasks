const repeatedSymbol = (str, herf) => {
    let say = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === herf) {
            say++
        }
    }
    console.log(say);
}
repeatedSymbol(prompt('metin daxil edin'),prompt('herf daxil edin'))


//--------------------------------------------------


function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length)
}
console.log(capitalize('ulvi'));

//--------------------------------------------------

const snakeToKebab = (str) => {
    return str.replaceAll('_','-'), str.toLowerCase()
}
console.log(snakeToKebab('BU_TEST'));

//--------------------------------------------------

function nameFormat(name, nickName) {
    return name + nickName[0]
}
console.log(nameFormat('Ulvi ', 'Eyvazov'));

//--------------------------------------------------

function ilkHerfiDeyis(soz, ilkHerf) {
    return soz[0], ilkHerf + soz.slice(1, soz.length)
}
console.log(ilkHerfiDeyis('aalam', 'S'));

//--------------------------------------------------


const date = new Date()
console.log(date.getDay())
if (date == 1, 2, 3, 4, 5) {
    alert('bu gun derse getmeliyik')
}
else {
    alert('bu gun evdeyik')
}

//--------------------------------------------------

const vaxt = new Date()
document.write(vaxt)

//--------------------------------------------------


const ay = new Date()
console.log(`${ay.getMonth() + 1} ci ay`);

//--------------------------------------------------

let yasin = +prompt('nece yasin var')
let qalib = 77 - yasin
alert(`${qalib} il qalib`)

//--------------------------------------------------
