// let mySeconds = 2000000
// let myWeeks = Math.floor(mySeconds / 604800)
// let myDays = Math.floor(mySeconds % 604800 / 86400)
// let myHours = Math.floor(mySeconds % 86400 / 3600)
// let myMinutes = Math.floor(mySeconds % 3600 / 60)
// let mySecondsRem = Math.floor(mySeconds % 60)

// console.log("Das sind " + myWeeks + " Wochen, " + myDays + " Tage, " + myHours + " Stunden, " + myMinutes + " Minuten" + " und " + mySecondsRem + " Sekunden")



// function calc2 () {
//     let theminutes = 200
//     let thehours = (theminutes/60)

    



// console.log(theminutes + "minutes" + "=" + thehours + "and")
// }


// let myMinutes = 200
// let myHours = Math.floor(myMinutes / 60)


// console.log("These are " + myHours + " hours and" )




function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

console.log(timeConvert(200));