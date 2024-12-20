import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, flag }) => (
  <Link to={`/countries/${name}`} className="country-card-link">
    <div className="country-card">
      <img
        className="country-flag"
        src={flag}
        alt={`${name} flag`}
        width="100"
        height="60" 
        loading="lazy"
      />
      <p className="country-name">{name}</p>
    </div>
  </Link>
);

export default CountryCard;
