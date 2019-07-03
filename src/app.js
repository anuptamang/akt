// Declare UI variables
const daysBtn = document.querySelector('.days');
const hoursBtn = document.querySelector('.hours');
const minutesBtn = document.querySelector('.minutes');
const secondsBtn = document.querySelector('.seconds');
const heading = document.querySelector('h1');
const futureDateValues = {
    year: 2019,
    month: 'oct',
    day: 2,
    time: {
        hours: 14,
        minutes: 40,
        seconds: 20
    }
}

let countDownValues = {};


setTimeout(function () {
    let counterOne = 60;
    let counterTwo = 60;
    let counterThree = 60;
    let counterFour = 60;

    if (counterOne > 10) {
        // daysBtn.innerHTML = counter--;
        // hoursBtn.innerHTML = counter--;
        // minutesBtn.innerHTML = counter--;
        // secondsBtn.innerHTML = counter--;
    }
}, 50);



//Declare future count down date and convert it to milliseconds `getTime()`
const countDownDate = new Date(
    futureDateValues.month + ',' + futureDateValues.day + ',' + futureDateValues.year + ',' + futureDateValues.time.hours + ':' + futureDateValues.time.minutes + ':' + futureDateValues.time.seconds
).getTime();

//start count down every second
const countDown = setInterval(function () {
    // get current date
    const now = new Date();

    //declare and assign distance between current and future date in `milliseconds`
    let distance = countDownDate - now;
    //get days, hours, minutes, seconds in respective units
    countDownValues = msToTime(distance, countDownValues);

    //reached to future date
    if (distance < 0) {
        clearInterval(countDown);
        heading.innerHTML = 'WEBSITE NOW';
        countDownValues = {
            days: 'L',
            hours: 'I',
            minutes: 'V',
            seconds: 'E'
        }
    }

    // append it to UI
    daysBtn.innerHTML = countDownValues.days;
    hoursBtn.innerHTML = countDownValues.hours;
    minutesBtn.innerHTML = countDownValues.minutes;
    secondsBtn.innerHTML = countDownValues.seconds;

}, 1000);

//function to convert `milliseconds` to seconds, minutes, hours and days
function msToTime(duration, data) {
    let seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        days = Math.floor(duration / (1000 * 60 * 60 * 24));

    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    hours = (hours < 10) ? '0' + hours : hours;
    days = (days < 10) ? '0' + days : days;

    data = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
    return data;
}

// function animateValue(objectSelector, start, end, duration) {
//     var range = end - start;
//     var current = start;
//     var increment = end > start ? 1 : -1;
//     var stopTime = Math.abs(Math.floor(duration / range));
//     var objectBlock = document.querySelectorAll('.' + objectSelector);

//     var timer = setInterval(function () {
//         current += increment;
//         for (let obj of objectBlock) {
//             obj.innerHTML = current;

//             if (current == end) {
//                 clearInterval(timer);
//             }
//         }

//     }, stopTime);
// }
// animateValue("display-2", 60, 10, 1000);