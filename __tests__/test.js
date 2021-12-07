const { accountTypeChecker } = require('../index');

describe('Amount changes verification()', () => {
    it('verify for type A account', () => {
        const accountBalanceHistory = [
            {
              monthNumber: 0, // current month
              account: {
                balance: { amount: 100 },
              },
            },
            {
              monthNumber: 1, // last month
              account: {
                balance: { amount: 400 },
              },
            },
            {
              monthNumber: 2, // two months ago
              account: {
                balance: { amount: 500 },
              },
            }
          ];
      expect(accountTypeChecker(accountBalanceHistory)).toEqual('A')
    })

    it('verify for type B account - diff increases by fixed number', () => {
        const accountBalanceHistory = [
            {
              monthNumber: 200, // current month
              account: {
                balance: { amount: 400 },
              },
            },
            {
              monthNumber: 1, // last month
              account: {
                balance: { amount: 200 },
              },
            },
            {
              monthNumber: 2, // two months ago
              account: {
                balance: { amount: 0 },
              },
            }
          ];
      expect(accountTypeChecker(accountBalanceHistory)).toEqual('B')
    })

    it('verify for type B account - diff decreases by fixed number', () => {
        const accountBalanceHistory = [
            {
              monthNumber: 0, // current month
              account: {
                balance: { amount: 0 },
              },
            },
            {
              monthNumber: 1, // last month
              account: {
                balance: { amount: 100 },
              },
            },
            {
              monthNumber: 2, // two months ago
              account: {
                balance: { amount: 200 },
              },
            }
          ];
      expect(accountTypeChecker(accountBalanceHistory)).toEqual('B')
    })

    it('verify for type c account', () => {
        const accountBalanceHistory = [
            {
              monthNumber: 0, // current month
              account: {
                balance: { amount: 500 },
              },
            },
            {
              monthNumber: 1, // last month
              account: {
                balance: { amount: 400 },
              },
            },
            {
              monthNumber: 2, // two months ago
              account: {
                balance: { amount: 100 },
              },
            }
          ];
      expect(accountTypeChecker(accountBalanceHistory)).toEqual('C')
    })
});
