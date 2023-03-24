// Nel mondo oggi ci sono queste temperature per Milano, Bangkok e Los Angeles in gradi Celsius.
const MilanCelsius = 20
const BangkokCelsius = 35
const LosAngelesCelsius = 15

// 1. Scrivi il codice che converte le temperature in gradi Fahrenheit e Kelvin
// 4. Arrotonda per eccesso le temperature in gradi Fahrenheit e Kelvin (hint: usa la funzione Math.ceil())
function Fahrenheit(x) {
    x = (x * 1.8) + 32; 
    return Math.ceil(x)
}
function Kelvin(x) {
    x = (x + 273.15)
    return Math.ceil(x)
}

document.getElementById('temperatureItalyKelvin').innerHTML = (Kelvin(MilanCelsius) + " k")
document.getElementById('temperatureBangkokKelvin').innerHTML = (Kelvin(BangkokCelsius) + " k")
document.getElementById('temperatureLosAngelesKelvin').innerHTML = (Kelvin(LosAngelesCelsius) + " k")
document.getElementById('temperatureItalyCelsius').innerHTML = MilanCelsius + " °C"
document.getElementById('temperatureBangkokCelsius').innerHTML = BangkokCelsius + " °C"
document.getElementById('temperatureLosAngelesCelsius').innerHTML = LosAngelesCelsius + " °C"
document.getElementById('temperatureItalyFahrenheit').innerHTML = (Fahrenheit(MilanCelsius) + " °F")
document.getElementById('temperatureBangkokFahrenheit').innerHTML = (Fahrenheit(BangkokCelsius) + " °F")
document.getElementById('temperatureLosAngelesFahrenheit').innerHTML = (Fahrenheit(LosAngelesCelsius) + " °F")
hideCelsius()
hideFahrenheit()
// 2. Aggiungi il valore delle varie temperature a ogni elemento dell'HTML che trovi con l'id temperatureItaly, temperatureThailand, temperatureUSA
// 3. Le temperature mostrate nell'HTML dovranno avere anche il relativo simbolo di misura (°C, °F, K)
// 5. Metti in evidenza con colori diversi le temperature nei vari gradi ( Fatto nel css)
// 6. Implementa al click della città il redirect sul sito della meteo di quella città (esempio: https://www.meteo.it/) 
// ADVANCED
// 7. aggiungi un'immagine di sfondo che rappresenti la città selezionata
// 8. aggiungi un menù a tendina con cui mostrare in base alla scelta la temperatura in gradi Celsius, Fahrenheit o Kelvin
function hideKelvin () {
    document.getElementById('temperatureItalyKelvin').classList.add("hidden")
    document.getElementById('temperatureBangkokKelvin').classList.add("hidden")
    document.getElementById('temperatureLosAngelesKelvin').classList.add("hidden")
}
function hideCelsius() {
    document.getElementById('temperatureItalyCelsius').classList.add("hidden")
    document.getElementById('temperatureBangkokCelsius').classList.add("hidden")
    document.getElementById('temperatureLosAngelesCelsius').classList.add("hidden")
}
function hideFahrenheit() {
    document.getElementById('temperatureItalyFahrenheit').classList.add("hidden")
    document.getElementById('temperatureBangkokFahrenheit').classList.add("hidden")
    document.getElementById('temperatureLosAngelesFahrenheit').classList.add("hidden")
}
const menuTendina = document.getElementById('menuTendina')

menuTendina.addEventListener('change',function(){
        const option = menuTendina.value
        
        if(option === 'Kelvin'){
            document.getElementById('temperatureItalyKelvin').classList.remove("hidden")
            document.getElementById('temperatureBangkokKelvin').classList.remove("hidden")
            document.getElementById('temperatureLosAngelesKelvin').classList.remove("hidden")
            hideCelsius();
            hideFahrenheit();
        }   
        if(option === 'Celsius')
        {
            document.getElementById('temperatureItalyCelsius').classList.remove("hidden")
            document.getElementById('temperatureBangkokCelsius').classList.remove("hidden")
            document.getElementById('temperatureLosAngelesCelsius').classList.remove("hidden")
            hideKelvin()
            hideFahrenheit()
        }
        if(option === 'Fahrenheit')
        {
            document.getElementById('temperatureItalyFahrenheit').classList.remove("hidden")
            document.getElementById('temperatureBangkokFahrenheit').classList.remove("hidden")
            document.getElementById('temperatureLosAngelesFahrenheit').classList.remove("hidden")
            hideCelsius()
            hideKelvin()
        }
        
})



