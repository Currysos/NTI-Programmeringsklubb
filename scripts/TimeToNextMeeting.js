var curday;
var secTime;
var ticker;

function getSeconds() {
    var nowDate = new Date();
    var dy = 3; //Sunday through Saturday, 0 to 6
    var countertime = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 15, 0, 0); //20 out of 24 hours = 8pm

    var curtime = nowDate.getTime(); //current time
    var atime = countertime.getTime(); //countdown time
    var diff = parseInt((atime - curtime) / 1000);
    if (diff > 0) { curday = dy - nowDate.getDay() }
    else { curday = dy - nowDate.getDay() - 1 } //after countdown time
    if (curday < 0) { curday += 7; } //already after countdown time, switch to next week
    if (diff <= 0) { diff += (86400 * 7) }
    startTimer(diff);
}

function startTimer(secs) {
    secTime = parseInt(secs);
    ticker = setInterval("tick()", 1000);
    tick(); //initial count display
}

function tick() {
    var secs = secTime;
    if (secs > 0) {
        secTime--;
    }
    else {
        clearInterval(ticker);
        getSeconds(); //start over
    }

    var days = Math.floor(secs / 86400);
    secs %= 86400;
    var hours = Math.floor(secs / 3600);
    secs %= 3600;
    var mins = Math.floor(secs / 60);
    secs %= 60;

    //update the time display
    document.getElementById("days").innerHTML = curday;
    document.getElementById("hours").innerHTML = ((hours < 10) ? "0" : "") + hours;
    document.getElementById("minutes").innerHTML = ((mins < 10) ? "0" : "") + mins;
    document.getElementById("seconds").innerHTML = ((secs < 10) ? "0" : "") + secs;
}
//Detta e jag stolt �ver!! (Tog sin lilla tid att g�ra)