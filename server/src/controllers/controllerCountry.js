const { Country, Activity } = require('../db');
const { Op } = require('sequelize')


const controllersCountriesName = async(name)=>{
    if(name){
        const countriesName = await Country.findOne({
            where: { 
                name: { [Op.iLike]: `${name}` } }, 
                include: [{ model: Activity }], 
                order: [["name", "ASC"]] 
        });
        return countriesName;
    }
        const allCountries = await Country.findAll()
        return allCountries;
}



const controllerCountryAll = async () => {
    const countryAll = await Country.findAll({
            include: [{ model: Activity }], 
            order: [["name", "ASC"]] 
    });
        return countryAll;
}


const controllerCountryID = async (idPais) =>{
    if(isNaN(idPais)){
        const countryId = await Country.findOne({
            where: {id: {[Op.iLike]:`${idPais}`}},
            include: [{ model: Activity }],
          });
          return countryId
    }

}




module.exports = {
    controllersCountriesName,
    controllerCountryAll,
    controllerCountryID
}