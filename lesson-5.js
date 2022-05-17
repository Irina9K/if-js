function fixedData(data) {
  const arrData = data.split('-');
  const reverseData = arrData.reverse();
  return reverseData.join('.');
}
console.log(fixedData('2020-11-26'));

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function searchName(enterString) {
  const enterStringLower = enterString.toLowerCase();
  for (let i = 0; i < data.length; i += 1) {
    if (
      enterStringLower === data[i].country.toLowerCase() ||
      enterStringLower === data[i].city.toLowerCase()
    ) {
      console.log(data[i]);
    }
  }
}

searchName('Germany');
