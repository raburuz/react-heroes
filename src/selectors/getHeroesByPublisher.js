import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
      const validatorsPublishers = ['Marvel Comics', 'DC Comics'];

      if (!validatorsPublishers.includes(publisher)) {
            throw new Error(
                  `Publisher ${publisher} no encontrado en nuestra data`
            );
      }

      return heroes.filter((hero) => hero.publisher === publisher);
};
