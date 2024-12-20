import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllCountries } from '../utils/api';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching countries...');
    fetchAllCountries()
      .then((res) => {
        console.log('Countries fetched:', res.data);
        const sorted = res.data.sort((a, b) => b.population - a.population);
        setCountries(sorted.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching countries:', err);
        setError('Failed to load data.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Welcome to NeWorld</h1>
      <p>Explore countries from around the world and learn about their details.</p>

      <div className="home-buttons">
        <Link to="/countries">
          <button>Explore All Countries</button>
        </Link>
        <Link to="/about">
          <button>About NeWorld</button>
        </Link>
      </div>

      <div className="country-container">
        {countries.map((country, index) => (
          <div className="country-card" key={index}>
            <img
              className="country-flag"
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
            />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
