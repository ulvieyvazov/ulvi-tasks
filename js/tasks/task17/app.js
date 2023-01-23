const inputElem = document.getElementById('pswd')
const btnElem = document.getElementById('eyeBtn')

btnElem.onclick = () =>{
    if(inputElem.type === 'password'){
        inputElem.type = 'text'
    }
    else{
        inputElem.type = 'password'
    }
}
