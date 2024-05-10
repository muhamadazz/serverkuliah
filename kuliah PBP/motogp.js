const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'Uk'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

let result = {};

motoGP.forEach((race) => {
  const { circuit, location, winner } = race;
  const { firstName, lastName, country } = winner;

  if (!result[country]) {
    result[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  result[country].winningCircuits.push({
    name: `${firstName} ${lastName}`,
    winLocation: `${circuit}, ${location}`
  });

  result[country].totalWin++;
});

console.log(JSON.stringify(result,null,2));