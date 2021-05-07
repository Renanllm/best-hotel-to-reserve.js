const Hotel = require('../classes/hotel');

const parkOfFlowers = new Hotel(
  'Parque das flores', 3, 110, 80, 90, 80
);

const botanicalGarden = new Hotel(
  'Jardim Botânico', 4, 160, 110, 60, 50
);

const atlanticSea = new Hotel(
  'Mar Atlântico', 5, 220, 100, 150, 40
);

const hotels = [parkOfFlowers, botanicalGarden, atlanticSea];

module.exports = hotels;