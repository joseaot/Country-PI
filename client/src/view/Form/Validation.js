const Validation = (form) =>{
    let error = {};

    if(!form.countries){
        error.countries= "⚠️Seleccione al menos un pais⚠️"
    }
    if(!form.name){
        error.name='Por favor escriba una actividad'
    }
    if(form.name.length<2 || form.name.length>25){
        error.name= "⚠️Escriba una actividad que tenga mas de 2 caracteres y menor a 25⚠️."
    }
    if(!form.dificulty){
        error.dificulty="⚠️Seleccione una Dificultad⚠️."
    }
    if(!form.season){
        error.season= "⚠️Seleccione una temporada⚠️"
    }
    if(!form.season && !form.dificulty && form.name.length<2 && form.name.length>25 && !form.name && !form.countries){
        error.boton = "Formulario imcompleto⚠️"
    }
    return error;
}


export default Validation;