import { atomWithReset } from 'jotai/utils';

const initialData = {
  people: [
    {
      name: 'Luke Skywalker',
      information: { height: 172 },
      siblings: ['John Skywalker', 'Doe Skywalker'],
    },
    {
      name: 'C-3PO',
      information: { height: 167 },
      siblings: ['John Doe', 'Doe John'],
    },
  ],
  films: [
    {
      title: 'A New Hope',
      planets: ['Tatooine', 'Alderaan'],
    },
    {
      title: 'The Empire Strikes Back',
      planets: ['Hoth'],
    },
  ],
  info: {
    tags: ['People', 'Films', 'Planets', 'Titles'],
  },
};

export const bigDataAtom = atomWithReset(initialData);
