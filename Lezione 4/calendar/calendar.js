const select = document.querySelector('select')
const list = document.querySelector('#month-view')
const h1 = document.querySelector('h1')
let giorni = 0;
function createCalendar(days, choice) {
  list.innerHTML = ''
  h1.textContent = choice
  // Creare un ciclo for che cicli i giorni del mese
  for(let i=0;i<days;i++)
  {
    const node = document.createElement("li");
    node.style.backgroundColor = `${giorni == 31 ? 'blue':'green'}`;
    node.innerHTML= `${i+1}`;
    list.appendChild(node);
  }
}

select.addEventListener("change", function (event) {
  console.log(event.target.value);
  switch (event.target.value) {
      case "january":
      case "march":
      case "may":
      case "july":
      case "august":
      case "october":
      case "december":
          giorni = 31;
          break;
      case "february":
          giorni = 28;
          break;
      case "april":
      case "june":
      case "september":
      case "november":
          giorni = 30;
          break;
  }
  createCalendar(giorni, event.target.value);

  
});
createCalendar(31, 'january');



// Tramite l'elemento select scegliete il mese e mostrare i giorni del mese scelto e il nome del mese in testa alla pagina
// Stilare ogni mese in maniera diversa (es. colori, sfondi, ecc.)
const colore = document.getElementById("colore")

colore.addEventListener("change",function(event){
  document.body.style.backgroundColor = event.target.value;
})
// Aggiungete un bottone che permette di cambiare il colore di sfondo della pagina
