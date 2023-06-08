const { Country } = require('../db');


const controllersCountriesName = async(req,res)=>{
    const { name } = req.params;
    const countries = await Country.findAll({
    where: { name: { [Op.iLike]: `${name}` } },
    include: [{ model: Activity }],
  });
  res.status(200).json(countries);
}




module.exports = {
    controllersCountriesName
}