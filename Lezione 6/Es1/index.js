function tellFortune(n_figli, nome_partner, posizione_geo, titolo_lavoro) {
    console.log(`Sarai una ${titolo_lavoro} in ${posizione_geo} e sposato con ${nome_partner} con ${n_figli}`);
}
/*
tellFortune(4,"Luca","Milano","Cassiere");
tellFortune(2,"Marco","Londra","Programmatore");
tellFortune(5,"Antonio","Napoli","Muratore");
*/

function calculateDogAge(dog_age_human) {
    let tot_dog_age = dog_age_human * 7;
    console.log(`Il tuo cane ha ${tot_dog_age} anni`);
}

//calculateDogAge(parseInt(Math.random()*10));
//calculateDogAge(parseInt(Math.random()*10));
//calculateDogAge(parseInt(Math.random()*10 ;


function calcolaSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    console.log(`Avrai bisogno di ${totalNeeded} tazze di tè per durare fino alla veneranda età di ${maxAge}`);
  }
/*  
calcolaSupply(parseInt(Math.random()*100), parseInt(Math.random()*10));
calcolaSupply(parseInt(Math.random()*100), parseInt(Math.random()*10));
calcolaSupply(parseInt  (Math.random()*100), parseInt(Math.random()*10));
*/

function calcCircumfrence(r) {
    let circonferenza = Math.PI * (2*r);
    console.log(`La circonferenza vale ${circonferenza}`);
}
function calcArea(r) {
    let area = Math.PI * (r*r);
    console.log(`L'area vale ${area}`);
}

//calcCircumfrence(8);
//calcArea(10);
