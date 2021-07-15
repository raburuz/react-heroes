import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeItem } from './HeroeItem';

export const HeroeList = ({ publisher }) => {
      const heroes = useMemo(
            () => getHeroesByPublisher(publisher),
            [publisher]
      );

      return (
            <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
                  {heroes.map((hero) => (
                        <HeroeItem key={hero.id} {...hero} />
                  ))}
            </div>
      );
};
