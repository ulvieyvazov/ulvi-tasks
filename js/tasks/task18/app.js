let ad = prompt('adini daxil et')

try{
    console.log(ad[0].toUpperCase() + ad[1] + ad[2] + ad[3]);
} catch(err){
    console.log(err.message);
    console.log('error cixdi');
}finally{
    console.log();
}

