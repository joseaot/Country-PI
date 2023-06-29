import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_ACTIVITIES= "FILTER_BY_ACTIVITIES"
export const ORDER = {
  NAME_ASCENDING: "NAME_ASCENDING",
  NAME_DESCENDING: "NAME_DESCENDING",
  POPULATION_DESC: "POPULATION_DESC",
  POPULATION_ASC: "POPULATION_ASC",
  ACTIVITY_ASC: "ACTIVITY_ASC",
  ACTIVITY_DESC: "ACTIVITY_DESC"
};

export const getCountries = () => {
  return async function (dispatch) {
    const countriesDb = await axios.get("https://country-pi-production.up.railway.app/countries");
    const countries = countriesDb.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const getCountry = (id) => {
  return async function (dispatch) {
    const countryDb = await axios.get(
      `https://country-pi-production.up.railway.app/countries/${id}`
    );
    const country = countryDb.data;
    dispatch({ type: GET_COUNTRY, payload: country });
  };
};

export const filterByNameAscending = () => {
  return {
    type: ORDER.NAME_ASCENDING,
  };
};

export const filterByNameDescending = () => {
  return {
    type: ORDER.NAME_DESCENDING,
  };
};

export const filterByPopulationAscending = () => {
  return {
    type: ORDER.POPULATION_ASC,
  };
};

export const filterByPopulationDescending = () => {
  return {
    type: ORDER.POPULATION_DESC,
  };
};

export const filterByActivities = () => {
  return {
    type: FILTER_BY_ACTIVITIES,
  };
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByName = (name) => {
  return {
    type: FILTER_BY_NAME,
    payload: name,
  };
};



