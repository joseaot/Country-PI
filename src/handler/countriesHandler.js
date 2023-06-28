const {controllersCountriesName, controllerCountryAll, controllerCountryID} = require('../controllers/controllerCountry')


// buscamos todos los paises
const getCountries = async (req, res) => {
  try {
    const response = await controllerCountryAll()
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: 'Error al obtener los países' });
  }
};

//buscamos por nombre
const getCountriesByName = async (req, res) => {
  const { name } = req.query;
  try {
    if(name){
      const response = await controllersCountriesName(name);
      return res.status(200).json(response);
    }
    const response = await controllersCountriesName();
    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: 'Error al obtener los países por nombre' });
  }
};

// buscamos por id
const getCountryById = async (req, res) => {
  const { idPais } = req.params;
  try {
    if(!isNaN(idPais)){
      return res.status(400).send(`ID ${idPais} no valido`)
    }else if(idPais.length !==3){
      return res.status(400).send(`ID ${idPais} no valido`)
    }
    const response = await controllerCountryID(idPais)
    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: 'Error al obtener el país' });
  }
};


module.exports = {
  getCountries,
  getCountryById,
  getCountriesByName,
};
