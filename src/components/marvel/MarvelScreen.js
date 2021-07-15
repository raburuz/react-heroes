import React from 'react';
import { HeroeList } from '../heroes/HeroeList';

export const MarvelScreen = () => {
      const marvel = 'Marvel Comics';
      return (
            <div>
                  <h2 className="mt-2 text-white">{marvel}</h2>
                  <hr />
                  <HeroeList publisher={marvel} />
            </div>
      );
};
