import React, { useState } from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';

const CardsContainer = () => {
  const countries = useSelector(state => state.countries);
  const countriesPerPage = 10; // Número de países por página
  const [currentPage, setCurrentPage] = useState(1); // Página actual

  // Calcular los índices del primer y último país en la página actual
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Función para cambiar a la página anterior
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {countries.length === 0 ? (
        <h3 className={style.error}>No se encontro tu Pais😵.</h3>
      ) : (
        <>
          <div className={style.cartas}>
            {currentCountries.map(country => (
              <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flag={country.flag}
                continent={country.continent}
              />
            ))}
          </div>
          <div className={style.pagination}>
            {currentPage > 1 && (
              <button onClick={previousPage} className={style.boton}>Anterior</button>
            )}
            {countries.length > indexOfLastCountry && (
              <button onClick={nextPage} className={style.boton}>Siguiente</button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CardsContainer;