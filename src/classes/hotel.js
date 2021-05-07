class Hotel {

  constructor(
    name,
    rating,
    workingDayRegularValue,
    workingDayLoyaltyValue,
    weekendDayValue,
    weekendDayLoyaltyValue
  ) {
    this.name = name;
    this.rating = rating;
    this.workingDayRegularValue = workingDayRegularValue;
    this.workingDayLoyaltyValue = workingDayLoyaltyValue;
    this.weekendDayValue = weekendDayValue;
    this.weekendDayLoyaltyValue = weekendDayLoyaltyValue;
  }

  get workingDayValues() {
    return {
      regular: this.workingDayRegularValue,
      loyalty: this.workingDayLoyaltyValue
    };
  }

  get weekendValues() {
    return {
      regular: this.weekendDayValue,
      loyalty: this.weekendDayLoyaltyValue
    }
  }
}

module.exports = Hotel;