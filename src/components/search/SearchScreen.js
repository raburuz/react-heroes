import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeItem } from '../heroes/HeroeItem';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
      const location = useLocation();
      const { q = '' } = queryString.parse(location.search);

      const [{ search }, handleInputChange] = useForm({
            search: q,
      });

      const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

      const handleSubmit = (e) => {
            e.preventDefault();
            history.push(`?q=${search}`);
      };

      return (
            <div>
                  <h1>Search Form</h1>
                  <hr />
                  <div className="row">
                        <div className="col-5">
                              <form onSubmit={handleSubmit}>
                                    <input
                                          type="text"
                                          name="search"
                                          placeholder="Find your hero"
                                          className="form-control"
                                          value={search}
                                          autoComplete="off"
                                          onChange={handleInputChange}
                                    />
                                    <button
                                          type="submit"
                                          className="btn btn-outline-info mt-2"
                                    >
                                          Search
                                    </button>
                              </form>
                        </div>
                        <div className="col-7 text-white">
                              <h4>Results...</h4>
                              <hr />

                              {q === '' && (
                                    <div className="alert alert-info">
                                          Search a hero
                                    </div>
                              )}

                              {q !== '' && heroesFiltered.length === 0 && (
                                    <div className="alert alert-danger">
                                          There is no a hero with {q}
                                    </div>
                              )}
                              {heroesFiltered.map((hero) => (
                                    <HeroeItem key={hero.id} {...hero} />
                              ))}
                        </div>
                  </div>
            </div>
      );
};
