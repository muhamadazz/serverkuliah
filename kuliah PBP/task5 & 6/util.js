function filterByWinningCountry(data) {
  let result = {};
  for (let i in data) {
    const {winner} = data[i];
    result[winner.country] = {};
    result[winner.country].winningCircuits = [];
  }

  for (let j in data) {
    const {circuit, location, winner} = data[j];
    result[winner.country].winningCircuits = [
      ...result[winner.country].winningCircuits,
      {
        name: `${winner.firstname} ${winner.lastname}`,
        winLocation: `${circuit}, ${location}`,
      },
    ];

    result[winner.country].totalWin =
      result[winner.country].winningCircuits.length;
  }

  return result;
}

function filterByName(data) {
  let result = {};
  for (let i in data) {
    const {winner} = data[i];
    result[`${winner.firstname}-${winner.lastname}`] = {};
    result[`${winner.firstname}-${winner.lastname}`].winningCircuits = [];
  }

  for (let j in data) {
    const {circuit, location, winner} = data[j];
    result[`${winner.firstname}-${winner.lastname}`].winningCircuits = [
      ...result[`${winner.firstname}-${winner.lastname}`].winningCircuits,
      {
        winLocation: `${circuit}, ${location}`,
      },
    ];

    result[`${winner.firstname}-${winner.lastname}`].totalWin =
      result[`${winner.firstname}-${winner.lastname}`].winningCircuits.length;
  }

  return result;
}

module.exports = {filterByWinningCountry, filterByName};
