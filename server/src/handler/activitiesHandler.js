const { Country, Activity } = require('../db');



// traemos todas las actividades

const activitiesHandler = async (req,res) => {
    try {
        const activities = await Activity.findAll({
            include: [{ model: Country }],
        });
        res.status(200).json(activities);

        if (activities.length === 0) {
            res.status(500).json({ error: 'Error al obtener las actividades turísticas' });
        }
        
    } catch (error) {
        res.status(500).send('Error al obtener las actividades');
    }
}


//posts a actividad

const activitiesCreateHandler = async (req,res) => {
    const { name, dificulty, season, countries } = req.body;
    try {
        const newActivity = await Activity.create({name, dificulty, season, countries});
        await newActivity.addCountry(countries);

        if(!countries) {
            return res.status(404).json({ error: 'Debe agregar un pais obligatorio' });
        }
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(500).json({error:"Error al agregar la actividad"})
        
    }
}

//eliminamos actividad

const activityDelete = async (req,res) =>{
    const {id} = req.params;
    try {
        const activity = await Activity.findByPk(id);
    
        if (!activity) {
          return res.status(404).json({ error: 'Actividad no encontrada' });
        }
    
        await activity.destroy();
    
        res.status(200).json({ message: 'Actividad eliminada exitosamente' });
      } catch (error) {
        console.error('Error al eliminar la actividad:', error);
        res.status(500).json({ error: 'Error al eliminar la actividad' });
      }
};




module.exports= {
    activitiesCreateHandler,
    activitiesHandler,
    activityDelete
}