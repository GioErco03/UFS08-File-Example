//load
/*
window.addEventListener('load', (e) => {
    console.log(e)
})

document.addEventListener('DOMContentLoaded', (e) => {
    console.log(e)
})
*/
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const msgError = document.createElement('p');

document.addEventListener('submit',(e)=>{
    if(firstname.value == '' || lastname.value ==''){
        e.preventDefault()
        msgError.innerHTML = 'Inserisci i tuoi dati'
        document.querySelector('form').append(msgError)
    }else{
        e.preventDefault()
        console.log(e)
    }
})

