import {getRandomArrayElement} from '../utils.js';

const eventPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: 1100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    type: 'taxi'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2807c',
    basePrice: 2300,
    dateFrom: '2019-08-10T22:55:56.845Z',
    dateTo: '2019-08-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa30',
      'b4c3e4e6-9053-42ce-b747-e281314baa32'
    ],
    type: 'ship'
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2809c',
    basePrice: 2300,
    dateFrom: '2019-09-10T22:55:56.845Z',
    dateTo: '2019-09-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e07',
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa33'
    ],
    type: 'flight'
  },
];

function getRandomEventPoints() {
  return getRandomArrayElement(eventPoints);
}

export {getRandomEventPoints};
