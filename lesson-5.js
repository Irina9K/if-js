function fixedData(data) {
  const arrData = data.split('-');
  const reverseData = arrData.reverse();
  const nevDate = reverseData.join('.');
  return nevDate;
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

// for (let i = 0; i < data.length; i += 1) {
//   const countryStr = data[i].country;
//   console.log(countryStr);
//   console.log(countryStr.includes('Germany'));
//   if(countryStr.includes(enterString)){
//
//   }
// }

function search() {
  const enterString = prompt('Please enter country',);
  for (let i = 0; i < data.length; i += 1) {
    const countryStr = data[i].country;
    // console.log(countryStr);
    const countryInclud = countryStr.includes(data[i].country)
    // console.log(countryInclud);
    if (countryStr.includes(enterString)) {
      // console.log('yes');
      console.log(data[i])
    }
  }
}
search();

