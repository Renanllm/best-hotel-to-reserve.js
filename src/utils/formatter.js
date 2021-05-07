function splitInfos(input) {
  const [customerType, dates] = input.split(':');

  const datesSplited = dates.split(',');
  const days = getDaysInDates(datesSplited);

  return { customerType, days };
}

function getDaysInDates(dates) {
  const days = [];
  const regExp = /(?<=\().+?(?=\))/g;

  dates.forEach(date => {
    const [day] = date.match(regExp);

    days.push(day);
  });

  return days;
}

module.exports = { splitInfos };