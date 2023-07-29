// Given values of Bananas are 119 and Monkeys are 5.Now calculate how many bananas eaten by each monkey and what is the reminder.

var totalBananas = 119;
var totalMonkeys = 5;

var bananasEatenByEachMonkey = totalBananas / totalMonkeys;
var bananasEatenByEachMonkeyInTwoDecimal = bananasEatenByEachMonkey.toFixed(2);
console.log("Bananas Eaten By Each Monkey: " + bananasEatenByEachMonkey);

//the reminder
var reminder = totalBananas % totalMonkeys;
console.log("Reminder: " + reminder);
