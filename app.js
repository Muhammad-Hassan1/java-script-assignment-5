//Assignment  no 5 Chapter No. 26 to 30 Q1

// var num = 3.45214;
// document.write(`Number: ${num} <br />`);
// document.write(`Round off Value : ${Math.round(num)} <br />`);
// document.write(`Floor Value : ${Math.floor(num)} <br />`);
// document.write(`Ceil Value : ${Math.ceil(num)} <br />`);

//Assignment  no 5 Chapter No. 26 to 30 Q2

// var userInput = window.prompt("Enter a negative decimal number");
// document.write(`Number: ${userInput} <br />`);
// document.write(`Round Value: ${Math.round(userInput)} <br />`);
// document.write(`Floor Value: ${Math.floor(userInput)} <br />`);
// document.write(`Ceil Value: ${Math.ceil(userInput)} <br />`);


//Assignment  no 5 Chapter No. 26 to 30 Q3

// var inputAsNum = window.prompt("Enter a number to get absolute value");
// var updatedValue;
// if (inputAsNum < 0) {
//     updatedValue = inputAsNum * -1;
//     document.write(`The absolute Value of <b> ${inputAsNum}</b> is <b>${updatedValue}</b>`);

// } else {
//     document.write(`The absolute Value of <b>${inputAsNum}</b> is <b>${inputAsNum}</b>`);
// }

//Assignment  no 5 Chapter No. 26 to 30 Q4

// var num = Math.ceil(Math.random() * 6) ;
// console.log(`Random dice value ${num}`);

//Assignment  no 5 Chapter No. 26 to 30 Q5

// var numb = Math.ceil(Math.random() * 2);
// console.log(`${numb}`);

// if (numb === 1){
//     console.log(`random coin value: Tails `);
// } else{
//     console.log(`Random coin value: Heads`)
// }

//Assignment  no 5 Chapter No. 26 to 30 Q6

// var randomNum = Math.ceil(Math.random() * 100);
// console.log(`Random Number Between 1 to 100 : ${randomNum}`);

//Assignment  no 5 Chapter No. 26 to 30 Q7

// var userWeight = window.prompt("Enter your weight in Kilograms");
// console.log(`The weight of user is ${parseFloat(userWeight)} Kilograms`);


//Assignment  no 5 Chapter No. 26 to 30 Q8

// var secretNumber = Math.ceil(Math.random() * 10);

// var inputFromUser = +window.prompt("Enter Number between 1 and 10");

// if(secretNumber === inputFromUser){
//     alert("Congratulation!");
// } else{
//     alert("Try Again");
// }



//Assignment  no 5 Chapter No. 31 to 34 Q1

// var date = new Date();
// console.log(date);

//Assignment  no 5 Chapter No. 31 to 34 Q2

// var month = ["January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];
// var currentMonth = new Date().getMonth();
// console.log("Current Month : " + month[currentMonth]);

//Assignment  no 5 Chapter No. 31 to 34 Q3

// var daysInWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
// var todayDay = new Date().getDay();
// console.log("Today is " + daysInWeek[todayDay]);

//Assignment  no 5 Chapter No. 31 to 34 Q4

// var daysInWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
// var todayDay = new Date().getDay();

// if (todayDay == 'Sun' || todayDay == 'Sat') {
//     console.log("It's Funday");
// } else {
//     console.log("Today is " + daysInWeek[todayDay]);
// }

//Assignment  no 5 Chapter No. 31 to 34 Q5

// var todayDate = new Date().getDate();
// if (todayDate <= 15) {
//     console.log("First fifteen days of the month");
// } else {
//     console.log("Last days of the month");
// }

//Assignment  no 5 Chapter No. 31 to 34 Q6

// const todayDate = new Date().getTime();
// console.log(todayDate);

// const previousDate = new Date("January 1, 1970").getTime();
// console.log(previousDate);

// var diff = todayDate - previousDate;
// console.log(diff);

// var dDiff = diff / (1000 * 60 * 60 * 24);
// console.log(dDiff);

// dDiff = Math.floor(dDiff);
// console.log(dDiff);



//Assignment  no 5 Chapter No. 31 to 34 Q7

// var todayDate = new Date().getHours();
// console.log(todayDate);

// if (todayDate >= 12){
//     console.log("It's PM");
// } else{
//     console.log("It's AM");
// }

//Assignment  no 5 Chapter No. 31 to 34 Q8

// var lastDayOf2023 = new Date("31 dec 2023");
// var laterDate = lastDayOf2023;

// console.log("Later Date: " + laterDate);

//Assignment  no 5 Chapter No. 31 to 34 Q9

// const todayDate = new Date().getTime();
// console.log(todayDate);
// const firstRamadan0f2023 = new Date("22 March 2023").getTime();
// console.log(firstRamadan0f2023);

// var diff = Math.round((todayDate - firstRamadan0f2023)/ 86400000);
// console.log(diff + " days has been passed since 1st ramadan, 2023");

//Assignment  no 5 Chapter No. 31 to 34 Q10



//Assignment  no 5 Chapter No. 31 to 34 Q11
// const todayDate = new Date();
// console.log("Current  date: " + todayDate);


// todayDate.setHours(todayDate.getHours() - 1);
// console.log("1 hour ago, it was " + todayDate);

//Assignment  no 5 Chapter No. 31 to 34 Q12

// const todayDate = new Date();
// console.log("Current Date: " + todayDate);

// todayDate.setFullYear(todayDate.getFullYear() - 100);
// console.log("100 years back, it was " + todayDate);

//Assignment  no 5 Chapter No. 31 to 34 Q13

// const todayDate = new Date().getFullYear();

// var dob = window.prompt("Enter your birth year", 1995);

// var calculateAge = todayDate - dob;
// console.log(`Your age is ${calculateAge} \nYour birth year is ${dob}`);

//Assignment  no 5 Chapter No. 31 to 34 Q14

// var month = ["January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];

// var daysInWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

// document.write(`<b>K-Electric Bill</b> </br>`);
// var customerName = window.prompt("Enter your name");
// document.write("Customer Name: " + customerName + "</br>");

// var billingMonth = new Date().getMonth();
// document.write("Month: " + month[billingMonth] + "</br>");

// var numOfUnits = 410;
// document.write("Number of units: " + numOfUnits + "</br>");

// var chargersPerUnit = 16;
// document.write("Charges per unit: " + chargersPerUnit + "</br> </br>");

// var billingAmount = numOfUnits * chargersPerUnit;
// document.write("Net Amount Payable (within Due Date) : " + billingAmount + "</br>");

// var latePaymentCharges = 350;
// document.write("Late payment surcharges " + latePaymentCharges + "</br>");

// var GrossAmountPayable = billingAmount + latePaymentCharges;
// document.write("Gross Amount Payable (after Due Date) : " + GrossAmountPayable);

