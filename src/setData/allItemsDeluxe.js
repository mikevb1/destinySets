// @flow

import type { SetPage } from '../types';

export default ([
  {
    name: 'Everything',
    sets: [
      {
        name: 'Weapons',
        big: true,
        query: 'is:weapon',
        sections: []
      },

      {
        name: 'Armor',
        big: true,
        query: 'is:armor',
        sections: []
      }
    ]
  }
]: SetPage);
