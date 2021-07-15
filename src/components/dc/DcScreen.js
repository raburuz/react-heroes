import React from 'react';
import { HeroeList } from '../heroes/HeroeList';

export const DcScreen = () => {
      const dc = 'DC Comics';
      return (
            <div>
                  <h2 className="mt-2 text-white">{dc}</h2>
                  <hr />
                  <HeroeList publisher={dc} />
            </div>
      );
};
