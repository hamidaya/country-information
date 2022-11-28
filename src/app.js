// import * as url from "url";
import axios from 'axios';

async function fetchCountryData() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data;
       // sorteer de huidige data array op de populatie-property van elk land
 //       countries.sort((a, b) => {
 //       return a.population - b.population;
 //                  });
        console.log(countries)

        // geef de gesorteerde data array mee aan de functie die de elementen op de pagina injecteert
 //       createListItems(countries);

    } catch (e) {
        console.error(e);
    }
}
fetchCountryData();