import style from './Form.module.css'
import {getCountries} from '../../Redux/actions'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import Validation from './Validation';



const Form = () => {

  const countryNames = useSelector(state => state.countries)
  const dispatch = useDispatch();


  const [isOpen, setIsOpen] = useState(false);
  const [error, setError]= useState({})
  const [form, setForm] = useState({
    name:'',
    dificulty:'',
    season:'',
    countries:[],
  });

  useEffect(()=>{
    dispatch(getCountries());
  },[dispatch])


  useEffect(() => {
  console.log(form.country)
  
  }, [form])



    // Función de validación del formulario
    const handleSubmit = (event) => {
      const property = event.target.name;
      const value = event.target.value;

      setForm({...form,[property]:value})
      setError(Validation({...form,[property]: value},setForm))

    }

    const handleCheckboxChange = (event) => {
      const { value } = event.target;
    
      setForm((prevForm) => {
        const isCountrySelected = prevForm.countries.includes(value);
    
        if (isCountrySelected) {
          return {
            ...prevForm,
            countries: prevForm.countries.filter((countries) => countries !== value),
          };
        }else{
          return {
            ...prevForm,
            countries: [...prevForm.countries, value],
          };
        }
      });
      setError(Validation({...form, countries: value}))
    };
    

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

  const handleSend= async(event) =>{
    event.preventDefault()
    const response = (await axios.post('/activities',form)).data
    if(response.hasOwnProperty('id')){
      window.alert("Actividad creada")
    }else{
      window.alert("ocurrio un error")
    }
    setForm(
      {
      name:'',
      dificulty:'',
      season:'',
      countries:[],
      }
    )

  }

    return (
      <>
        <h1 className={style.Titulo}>Crea Tus Actividades</h1>
        <div className={style.Detail}>
          <form onSubmit={handleSend}>
            <div className={style.preguntaUno}>
              <p className={style.dato}>Selecciona el o los países</p>
              <p className={form.countries.length > 0 ? style.paisesAgregados : style.sinPaises}>
                {form.countries.length > 0 ? form.countries.join(', ') : "País(es) Agregados"}
              </p>
              <button className={style.boton} type="button" onClick={handleToggle}>
                Seleccione países
              </button>
              {isOpen && (
                <div className={style.paises}>
                <div className={style.dropdownMenu}>
                <div className={style.scrollableMenu}>
                    {countryNames.map((element, index) => (
                    <div className={style.formCheck} key={element.id}>
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                          name={element.name}
                          value={element.id}
                          className={style.checkbox}
                        />
                        <label htmlFor={element.name}>{element.name}</label>
                      </div>
                      ))}
                  </div>
                    {error.countries ? <span>{error.countries}</span> : ''}
                  </div>
                  </div>
                )}

              </div>

              <div className={style.pregunta2}>
                <p htmlFor="nombre" className={style.dato}>Nombre de la actividad</p>
                <input
                  type="text"
                  name="name"
                  placeholder='Escriba una actividad'
                  value={form.name}
                  onChange={handleSubmit}
                  className={style.place}
                  required
                />
                  {error.name ? <span className={style.error}>{error.name}</span> : ''}
              </div>

              <div className={style.pregunta3}>
                <p htmlFor="dificultad" className={style.dato}>Dificultad de la actividad</p>
                  <select
                    name="dificulty"
                    value={form.dificulty}
                    onChange={handleSubmit}
                    required
                  >
                    <option value="">Seleccione una dificultad</option>
                    <option value="1">MuyFacil</option>
                    <option value="2">Facil</option>
                    <option value="3">Medio</option>
                    <option value="4">Dificil</option>
                    <option value="5">Muy Dificil</option>
                  </select>
                    {error.dificulty ? <span className={style.error}>{error.dificulty}</span> : ''}
                </div>


                <div className={style.pregunta4}>
                  <p htmlFor="temporada" className={style.dato}>Temporada:</p>
                  <select
                    name="season"
                    value={form.season}
                    onChange={handleSubmit}
                    required
                  >
                    <option value="">Seleccione una temporada</option>
                    <option value="Summer">Verano</option>
                    <option value="Winter">Invierno</option>
                    <option value="Spring">Primavera</option>
                    <option value="Autumn">Otoño</option>
                  </select>
                    {error.season ? <span className={style.error}>{error.season}</span> : ''}
                </div>

                <div className={style.botonEnviar}>
                  <button className={style.letra} disabled={!form.name || !form.dificulty || !form.season || !form.countries || form.countries.length===0}>Enviar</button>
                </div>
          </form>
        </div>
      </>
    )
}
export default Form;