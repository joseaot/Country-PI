const { Activity } = require('../db');


const crateActivitiesDB = async( name, dificulty, season ) =>{

    const nuevaActividad = await Activity.create({name, dificulty, season});

    return nuevaActividad;
}


module.exports={
    crateActivitiesDB,
}