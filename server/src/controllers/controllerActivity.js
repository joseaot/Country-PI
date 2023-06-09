const { Activity, Country } = require('../db');

//control de todas las actividades 
const activitiesAllDB = async() =>{
    const actividades = await Activity.findAll({
        include: [{ model: Country }],
    });
    return actividades
}

// control crear actividad
const crateActivitiesDB = async( name, dificulty, season, countries ) =>{

    const nuevaActividad = await Activity.create({name, dificulty, season, countries});
    await nuevaActividad.addCountry(countries);

    return nuevaActividad;
}

//control de eliminar actividad

const deleteActivities = async (id) => {
    const eliminarActividad = await Activity.findByPk(id);
    await eliminarActividad.destroy(id);
    return eliminarActividad;
}


module.exports={
    crateActivitiesDB,
    activitiesAllDB,
    deleteActivities
}