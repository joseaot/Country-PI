import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, filterByContinent, filterByNameAscending, filterByNameDescending, filterByPopulationAscending, filterByPopulationDescending, filterByActivities  } from '../../Redux/actions';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import style from './Home.module.css';




const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  

  

  const handleNameOrder = (event) => {
    const order = event.target.value;
    if (order === 'A') {
      dispatch(filterByNameAscending());
    } else if (order === 'D') {
      dispatch(filterByNameDescending());
    }
  };

  const handlePopulationOrder = (event) => {
    const order = event.target.value;
    if (order === 'PA') {
      dispatch(filterByPopulationAscending());
    } else if (order === 'PD') {
      dispatch(filterByPopulationDescending());
    }
  };

  const handleContinentFilter = (event) => {
    const selectedContinent = event.target.value;
    if (selectedContinent === '-') {
      dispatch(getCountries());
    } else {
      dispatch(filterByContinent(selectedContinent));
    }
  };

  const handleActivity = (event) => {
    const order = event.target.value;
    if (order === 'PA') {
      dispatch(filterByActivities());
    }else if(order === "PS"){
      dispatch(getCountries())
    }
    // Agrega más opciones de orden si es necesario
  };


  return (
    <div className={style.Home}>
      <h1 className={style.tituloHome}>COUNTRIES</h1>
      <div className={style.filtros}>
        <div className={style.Cadafiltro}>
          <h2>Ordenar por nombre </h2>
          <select onChange={handleNameOrder} className={style.boton}>
            <option value="-">--Selecciona--</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>
        <div className={style.Cadafiltro}>
          <h2>Ordenar por población </h2>
          <select onChange={handlePopulationOrder} className={style.boton}>
            <option value="-">--Selecciona--</option>
            <option value="PA">Ascendente</option>
            <option value="PD">Descendente</option>
          </select>
        </div>
        <div className={style.Cadafiltro}>
          <h2>Filtrar por continente </h2>
          <select onChange={handleContinentFilter} className={style.boton}>
            <option value="-">--Selecciona--</option>
            <option value="Africa">África</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="North America">América del Norte</option>
            <option value="South America">América del Sur</option>
            <option value="Oceania">Oceanía</option>
          </select>
        </div>
        <div className={style.Cadafiltro}>
          <h2>Filtar por Actividad</h2>
          <select onChange={handleActivity} className={style.boton}>
            <option value="PS">--Selecciona--</option>
            <option value="PA">Con Actividad</option>
          </select>
        </div>
      </div>
      <CardsContainer countries={countries} />
    </div>
  );
};

export default Home;