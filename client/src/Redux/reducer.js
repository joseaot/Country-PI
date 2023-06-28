import { GET_COUNTRIES, GET_COUNTRY, ORDER, FILTER_BY_CONTINENT, FILTER_BY_NAME, FILTER_BY_ACTIVITIES} from "./actions";

const initialState = {
  countries: [],
  country: [],
  originalCountries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        originalCountries: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case ORDER.NAME_ASCENDING:
      return {
        ...state,
        countries: state.countries.slice().sort((a, b) => a.name.localeCompare(b.name)),
      };
    case ORDER.NAME_DESCENDING:
      return {
        ...state,
        countries: state.countries.slice().sort((a, b) => b.name.localeCompare(a.name)),
      };
    case ORDER.POPULATION_ASC:
      return {
        ...state,
        countries: state.countries.slice().sort((a, b) => a.population - b.population),
      };
    case ORDER.POPULATION_DESC:
      return {
        ...state,
        countries: state.countries.slice().sort((a, b) => b.population - a.population),
      };

      case FILTER_BY_ACTIVITIES:
        const countriesWithActivities = state.originalCountries.filter(country => country.Activities && country.Activities.length > 0
        );
      
        return {
          ...state,
          countries: countriesWithActivities,
        };

    case FILTER_BY_CONTINENT:
      const continent = action.payload;
      const { originalCountries } = state;

      
      const filteredByContinent = originalCountries.filter(country => country.continent === continent);

      return {
        ...state,
        countries: filteredByContinent,
      };


    case FILTER_BY_NAME:
      const searchTerm = action.payload.toLowerCase();
      const filteredByName = state.countries.filter(country => country.name.toLowerCase().includes(searchTerm));
      return {
        ...state,
        countries: [...filteredByName]
      };
    default:
      return state;
  }
};

export default reducer;