const suallar = [
    {
        sual: 'en boyuk gol hansidir',
        cavab: 'xezer'
    },
    {
        sual: 'ronesans dovrunun en gorkemli olkesi',
        cavab: 'italiya'
    }, 
    {
        sual: 'yer kuresinin ulduzunun adi nedir ',
        cavab: 'gunes'
    }
]



const questionElem = document.getElementById('question')
const wordContainerElem = document.getElementById('word_container')
const symbolsContainerElem = document.getElementById('symbols_container')

let cavab = ''
questionElem.textContent = suallar[1].sual
let cavabUzunluq = suallar[1].cavab.length
for (let i = 0; i < cavabUzunluq; i++) {
    const newDiv = document.createElement('div')
    newDiv.id = `div${i}`
    wordContainerElem.appendChild(newDiv)
}


let lastIndex = 0

function alphabetClick(symbol) {
    document.getElementById(`div${lastIndex}`).textContent = symbol
    cavab = cavab.concat(symbol)
    lastIndex++
    if(lastIndex === cavabUzunluq){
        console.log(cavab);
        alphabetClick = () =>{}
        symbolsContainerElem.classList.add(`disable_all_buttons`)
        if(cavab.toLowerCase() === suallar[1].cavab){
            alert('duz tapdin');
        }
        else{
            alert('yanlisdir')
        }
    }
    console.log(symbol);
}
