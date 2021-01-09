const readlineSync = require("readline-sync");

const chalk = require("chalk")

var askedQuestion = chalk.greenBright.bgBlack;
var answerGiven = chalk.yellowBright.bgBlack;
var log = console.log;

var userName = readlineSync.question(askedQuestion("what is your name ? "));
var cancel = 0 ;

while (cancel === 0 ) {

if (readlineSync.keyInYN("You want to take the test or not ? " + answerGiven(userName) + " ")) {

var leapYear = readlineSync.question(askedQuestion("bravo! Tell me the year to check whether it is leap year or not  "));
var number = parseInt(leapYear);
if (number) {
  // NaN === NaN is false so i can not take it as conditional
  if(leapYear % 4 === 0 && leapYear && 100 ===0 || leapYear % 400 ===0 ){
   log("Yeah its a leap year !")
  } else if(leapYear % 4 === 0 && leapYear % 100 === 0){
    log("Oh no it is not a leap year !")
  }else if(leapYear % 4 === 0 ){
    log("Yeah it's a leap year !")
  }else {
    log("Oh no it is not a leap year !")
  }
 log("------------------------");
 log("------------------------");
 if(readlineSync.keyInYN("hey ! " + userName + "you want to continue?  " )){
   console.log("----");
 }else {
   cancel = 1;
 }

}else {
  log("please add the valid input - as year!");
 log("------------------------");
 log("------------------------");

}

}else{
 answerGiven(log("That's fine you can check on me in your free time!"));
 log("------------------------");
 log("------------------------");
 cancel = 1;
}
}