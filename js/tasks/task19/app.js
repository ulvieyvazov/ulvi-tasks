// const url = `https:/www.ulvimedia.com`

// fetch(url) 
//     .then((resp) => resp.json())
//     .then((data) => {
//         data.forEach((obj) => {
//             document.write(`
//             <h1>${obj.idMeal} - ${obj.strMeal} </h1>
//             </br>`)
//         })                                          
//     })



function writeData(data) {
    document.body.innerHTML += data
}


axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((resp) =>{
        const data = resp.data[0].name + "<br> id:" +resp.data[0].id +"<br> city:"+resp.data[0].address.city
        writeData(data)
    })
