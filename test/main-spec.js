'use strict'

const chai = require('chai');
const expect = chai.expect;
const script = require('../src/script');

describe('Start Tests:', function () {
  describe('Test 01', function () {
    it(`should return 'Parque das flores'`, function () {
      const input = 'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)';
      const { hotelName } = script(input);

      expect(hotelName).to.equal('Parque das flores');
    })
  });

  describe('Test 02', function () {
    it(`should return 'Jardim Botânico'`, function () {
      const input = 'Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)';
      const { hotelName } = script(input);

      expect(hotelName).to.equal('Jardim Botânico');
    })
  });

  describe('Test 03', function () {
    it(`should return 'Mar Atlântico'`, function () {
      const input = 'Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)';
      const { hotelName } = script(input);

      expect(hotelName).to.equal('Mar Atlântico');
    })
  });
});
