import React, { useState, useEffect } from 'react';
import { fetchAllCountries } from '../utils/api';
import CountryCard from '../components/CountryCard';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20; // Number of countries per page

  useEffect(() => {
    fetchAllCountries().then((res) => setCountries(res.data));
  }, []);

  const paginatedCountries = countries.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(countries.length / itemsPerPage);

  return (
    <div>
      <h1>Country List</h1>
      <div className="country-container">
        {paginatedCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span>Page {currentPage + 1} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CountryList;
