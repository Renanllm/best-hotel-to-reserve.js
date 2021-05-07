const { workingDays } = require('../data/days');
const hotels = require('../data/hotels');
const Reservation = require('./reservation');

class Receptionist {

  static verifyBestHotelToReserve(customer, days) {
    let bestHotel = { name: hotels[0].name, total: 0, rating: 0 };

    hotels.forEach(hotel => {
      const total = days.reduce((total, day) => {
        const dayValue = verifyDayValueByCustomerType(day, customer, hotel);

        return total + dayValue;
      }, 0);

      if (bestHotel.total === 0) {
        bestHotel = constructBestHotel(bestHotel, hotel, total);
      }

      if (total < bestHotel.total) {
        bestHotel = constructBestHotel(bestHotel, hotel, total);
      } else if (total === bestHotel.total && hotel.rating > bestHotel.rating) {
        bestHotel = constructBestHotel(bestHotel, hotel, total);
      }

    });

    return new Reservation(customer, bestHotel.total, bestHotel.name);
  }

}

function verifyDayValueByCustomerType(day, { customerType }, { workingDayValues, weekendValues }) {
  if (workingDays.includes(day)) {
    return customerType === 'Regular' ?
      workingDayValues.regular : workingDayValues.loyalty;
  }

  return customerType === 'Regular' ?
    weekendValues.regular : weekendValues.loyalty;
}

function constructBestHotel(bestHotel, hotel, total) {
  return { name: hotel.name, total, rating: hotel.rating };
}

module.exports = Receptionist;