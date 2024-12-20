import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = () => axios.get(`${BASE_URL}/all`);
export const fetchCountryByName = (name) => axios.get(`${BASE_URL}/name/${name}`);
