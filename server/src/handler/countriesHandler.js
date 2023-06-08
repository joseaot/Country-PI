const { Country, Activity } = require('../db');
const { Op } = require('sequelize')


// buscamos los paises
const getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll({
      include: [{ model: Activity }],
      order: [["name", "ASC"]],
    });
    res.status(200).json(countries);
  } catch (error) {
    console.error('Error al obtener los países:', error);
    res.status(500).json({ error: 'Error al obtener los países' });
  }
};

//buscamos por nombre
const getCountriesByName = async (req, res) => {
  try {
    const { name } = req.query;
    const countries = await Country.findAll({
      where: { name: { [Op.iLike]: `${name}` } },
      include: [{ model: Activity }],
    });

    if (countries.length === 0) {
      return res.status(404).json({ error: 'No se encontraron países' });
    }

    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los países por nombre' });
  }
};

// buscamos por id
const getCountryById = async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await Country.findOne({
      where: { id: { [Op.iLike]: `${idPais}` } },
      include: [{ model: Activity }],
    });

    if (!country) {
      return res.status(404).json({ error: 'País no encontrado' });
    }

    res.status(200).json(country);
  } catch (error) {
    console.error('Error al obtener el país:', error);
    res.status(500).json({ error: 'Error al obtener el país' });
  }
};


module.exports = {
  getCountries,
  getCountryById,
  getCountriesByName,
};
