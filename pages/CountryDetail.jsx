import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountryByName } from '../utils/api';

const CountryDetail = () => {
  const { name } = useParams(); // Get the country name from the URL
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountryByName(name)
      .then((res) => {
        setCountry(res.data[0]); // Get the first country from the response
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load country details.');
        console.error(err);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading country details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="country-detail">
      <h1>{country.name.common}</h1>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} className="country-flag"  />
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map((c) => c.name).join(', ')}</p>
    </div>
  );
};

export default CountryDetail;
