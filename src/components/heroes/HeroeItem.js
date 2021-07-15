import React from 'react';
import { Link } from 'react-router-dom';

export const HeroeItem = ({
      id,
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters,
}) => {
      return (
            <div
                  className="card h-100 ms-3 text-white bg-dark mb-3"
                  style={{ maxWidth: 360, maxHeight: 1090 }}
            >
                  <div className="card-header">
                        <span>{publisher}</span>
                  </div>
                  <img
                        className="card-img "
                        src={`/assets/heroes/${id}.jpg`}
                        alt={`imagen de ${superhero}`}
                  ></img>
                  <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <hr />
                        <h6 className="card-text">Character:</h6>
                        <p>{characters}</p>
                        <h6 className="card-text">Alter Ego:</h6>
                        <p>{alter_ego}</p>

                        <h6 className="card-text">First Appearance:</h6>
                        <p className="text-muted">{first_appearance}</p>
                        <Link
                              className="btn btn-primary m-auto"
                              to={`./hero/${id}`}
                        >
                              More...
                        </Link>
                  </div>
            </div>
      );
};
