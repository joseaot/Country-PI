const { crateActivitiesDB, activitiesAllDB, deleteActivities} = require('../controllers/controllerActivity')




// traemos todas las actividades

const activitiesHandler = async (req,res) => {
    try {
        const response = await activitiesAllDB()
        res.status(200).json(response);
      } catch (error) {
        res.status(404).json({ error: 'Error al obtener los países' });
      }
    }


//creamos la actividad

const activitiesCreateHandler = async (req,res) => {
    const { name, dificulty, season, countries } = req.body;
    try {
        const response = await crateActivitiesDB(name,dificulty,season,countries)

        if(!countries) {
            return res.status(404).json({ error: 'Debe agregar un pais obligatorio' });
        }
        return res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error:"Error al agregar la actividad"})
        
    }
}

//eliminamos actividad

const activityDelete = async (req,res) =>{
    const {id} = req.params;
    try {
        const response = await deleteActivities(id)
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la actividad' });
      }
};




module.exports= {
    activitiesCreateHandler,
    activitiesHandler,
    activityDelete
}