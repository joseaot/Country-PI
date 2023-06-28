const axios = require("axios");
const {Country} = require('../src/db')

const LoadDB = async() => {
        const countriesDB = Country.findAll();
        if(!countriesDB.length){
          const urlApi = await axios.get('http://localhost:5000/countries');
          const dataApi = await urlApi.data.map((element)=> {
      
            return{
              id: element.cca3,
              name: element.name.common,
              flag: element.flags.svg,
              continent: element.continents[0],
              capital: element.capital ? element.capital[0] : 'no se consiguio',
              population: element.population,
            };
          });
      
          for(let i=0; i<dataApi.length; i++){
            await Country.findOrCreate({
              where: {name: dataApi[i].name},
              defaults: dataApi[i],
            });
          }
        }
}


module.exports={
    LoadDB
}