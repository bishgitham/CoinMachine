Write a class called CoinMachine that will return coin-machine instances.
An instance of the CoinMachine class must have the following:

It must have a stash property, which is an object with 7 properties as follows:
const myMachine = new CoinMachine();
myMachine.stash; // { 1p : 0, 2p : 0, 5p : 0, 10p : 0, 20p : 0, 50p : 0, £1 : 0 }

It must have a coinCount property, which will start at 0.
const myMachine = new CoinMachine();
myMachine.coinCount; // 0

It must have an addCoins method, which will take any number of coin arguments in order to update the stash object and the coinCount property. You can assume that values of 1p, 2p, 5p, 10p etc only will be added to the stash.
const myMachine = new CoinMachine();
myMachine.addCoins('1p', '1p', '10p');

myMachine.stash; // { 1p : 2, 2p : 0, 5p : 0, 10p : 1, 20p : 0, 50p : 0, £1 : 0 }
myMachine.coinCount; // 3

It must have a stringToNumeric method that will convert a pence or pound string into a numerical value in terms of pounds i.e.
const testMachine = new CoinMachine();

testMachine.stringToNumeric('£0.17'); // outputs 0.17
const testMachine = new CoinMachine();
testMachine.stringToNumeric('58p'); // outputs 0.58

It must have a calculateTotal method that will calculate and return the total of all the money in the stash. The output should be a string. The output should always be in pounds and always with 2 decimal places. For example,
myMachine.stash; // { 1p : 0, 2p : 0, 5p : 2, 10p : 1, 20p : 0, 50p : 0, £1 : 0 }
myMachine.calculateTotal(); // will return '£0.20'
myMachine.stash; // { 1p : 2, 2p : 3, 5p : 1, 10p : 1, 20p : 5, 50p : 0, £1 : 4 }
myMachine.calculateTotal(); // will return '£5.23'
You must write your own tests and build up the functionality of your class step by step. DO NOT attempt to write tests that check all of the functionality and logic in one fell swoop.
