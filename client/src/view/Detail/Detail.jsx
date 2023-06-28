import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountry } from "../../Redux/actions";
import style from './Detail.module.css';
import axios from "axios";

const Detail = () => {
  const detail = useSelector((state) => state.country);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [countryDelete, setCountryDelete] = useState(false)
  

  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id, countryDelete]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/activities/${id}`);
      window.alert("Actividad eliminada correctamente");
      setCountryDelete(true)


    } catch (error) {
      console.error("Error al eliminar la actividad:", error);
      window.alert("Ocurrió un error al eliminar la actividad");
    }
  };


  return (
    <>
        <h2 className={style.Titulo}>Detalles de {detail.name}</h2>
      <div className={style.Detail}>
        <div>
          <p>Capital: {detail.capital}</p>
          <img src={detail.flag} alt="flags" className={style.bandera} />
          <p>Poblacion: {new Intl.NumberFormat().format(detail.population)}</p>
          <p>Continente: {detail.continent}</p>
        </div>
      </div>

      <h3 className={style.Titulo}>Activity</h3>
      <p className={style.subtitulo}>Este país cuenta con {detail.Activities?.length} actividad(es)</p>
      <div className={style.actividad}>
        {detail.Activities?.length ? (
          detail.Activities.map((actividad, index) => (
            <div key={index} className={style.CadaActividad}>
              <h3 className={style.nActividad}>Activity N°{index + 1}</h3>
              <p>Name: {actividad.name}</p>
              <p>Difficulty: {actividad.dificulty}</p>
              <p>Season: {actividad.season}</p>
              <button onClick={() => handleDelete(actividad.id)} className={style.botonEliminar}>
                Eliminar
              </button>
            </div>
          ))
          ) : (
            <p className={style.error}>No se encontraron actividades 🥺.</p>
            )}
      </div>
    </>
  );
};

export default Detail;