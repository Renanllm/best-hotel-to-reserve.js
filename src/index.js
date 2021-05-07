const Customer = require("./classes/customer");
const Receptionist = require("./classes/receptionist");
const { splitInfos } = require("./utils/formatter");

function main() {
  const input = 'Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)';

  const { customerType, days } = splitInfos(input);
  const customer = new Customer(customerType);

  const reservation = Receptionist.verifyBestHotelToReserve(customer, days);

  console.log(reservation.hotelName);
}

main();