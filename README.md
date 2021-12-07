# Koodoo-Tech-Challenge
This project to solve the Koodoo Technical challenge
For the given problem, there are below cases which are possible

Steps for installation:
1. You need Node version installed
2. Clone the project
3. run 'node index.js' file to run the function with the given input set
4. run the command 'npm run test' to run the test cases

Case 1 - Type A denotes a balance history where the balance amount decreases by varying amounts each month.
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

Case 2 - Type B is one where the balance amount changes by the same amount each month.
             (This inlcudes both incrases and decreases by same amount)

const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 100 }, //300
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 200 }, //200
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 300 }, //100
      },
    }
  ];

    
Case 3 - Type C denotes a balance history where the balance amount increases by varying amounts each month.
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


#Unit testing: 
In unit testing, I will pass the data for all 4 cases possible so that I can get good coverage and can cover all the cases.

# npm run test - to run the test in local 
![image](https://user-images.githubusercontent.com/42666782/145032574-89338ad8-1582-4a4a-a8f5-3ab997645a48.png)

