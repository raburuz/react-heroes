import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroesScreen = ({ history }) => {
      const { heroeId } = useParams();
      const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

      if (!hero) {
            return <Redirect to="/" />;
      }
      const {
            id,
            superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters,
      } = hero;

      const handleReturn = () => {
            history.length <= 2 ? history.push('/') : history.goBack();
      };

      return (
            <div className="container mt-4 animate__animated animate__fadeIn">
                  <div className="row">
                        <div className="col-4">
                              <img
                                    className="img-thumbnail animate__animated animate__fadeInLeft"
                                    src={`/assets/heroes/${id}.jpg`}
                                    alt={`Imagen de ${superhero}`}
                              />
                        </div>
                        <div className="col-8 text-white">
                              <h3>{publisher}</h3>
                              <hr />
                              <div>
                                    <h2>{superhero}</h2>
                                    <h6 className="card-text">Character:</h6>
                                    <p>{characters}</p>
                                    <h6 className="card-text">Alter Ego:</h6>
                                    <p>{alter_ego}</p>

                                    <h6 className="card-text">
                                          First Appearance:
                                    </h6>
                                    <p>{first_appearance}</p>
                                    <button
                                          className="btn btn-outline-info"
                                          onClick={handleReturn}
                                    >
                                          Return...
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};
