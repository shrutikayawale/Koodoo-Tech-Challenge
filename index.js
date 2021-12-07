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

/***  
    Case 1 - Type A denotes a balance history where the balance amount decreases by varying amounts each month.
    Case 2 - Type B is one where the balance amount changes by the same amount each month.
             (This inlcudes both incrases and decreases by same amount)
    Case 3 - Type C denotes a balance history where the balance amount increases by varying amounts each month.
***/

const accountTypeChecker = (accountBalanceHistory) => {
    let result;
    let diff;
    
    for (var i = 0; i < accountBalanceHistory.length - 1; i++) {
        if (!diff) {
            //for the first set of elements we will find out the sum and store in diff variable
            diff = accountBalanceHistory[i + 1].account.balance.amount - accountBalanceHistory[i].account.balance.amount;
        } else if ((i + 1) < accountBalanceHistory.length && accountBalanceHistory[i + 1] && accountBalanceHistory[i + 1].account.balance.amount - accountBalanceHistory[i].account.balance.amount == diff) {
            //for every elements we have to find out the diff of amount as compared to the next element except last (bcz there wont be any element after last element)
            result = 'B';
        } else if (accountBalanceHistory[i + 1].account.balance.amount > accountBalanceHistory[i].account.balance.amount) {
            //the balance amount decreases by varying amounts each month
            result = 'A';
        } else {
            //the balance amount increases by varying amounts each month
            result = 'C'; 
        }
    }
  
    return result;
  };

  console.log(accountTypeChecker(accountBalanceHistory)); // calling the function here

  module.exports = { accountTypeChecker };


