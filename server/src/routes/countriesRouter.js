const { Router } = require('express')
const { getCountries, getCountryById, getCountriesByName } = require('../handler/countriesHandler')

const countriesRouter = Router()

countriesRouter.get('/', getCountries);

countriesRouter.get('/name', getCountriesByName);

countriesRouter.get('/:idPais', getCountryById);



module.exports = countriesRouter;