const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(`.deadline`);
const giveaway = document.querySelector(`.giveaway`);
const items = document.querySelectorAll(`.deadline-format h4`);

let futureDate = new Date(2022, 8, 2, 17, 35, 12);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
let day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

giveaway.textContent = `Giveaway ends on ${day}, ${date} of ${month}, ${year}, ${hours}:${minutes}PM`;

//futute time in ml
const futureTime = futureDate.getTime();

function getRemainingtime() {
  const currentTime = new Date().getTime();
  let time = futureTime - currentTime; //difference bt our time and future date in ms
  //1s = 1000ms
  //1m = 60s
  //1hr = 60 min
  //1d = 24hr

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calcutlate all values
  let days = time / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((time % oneDay) / oneHour); //gets the remainder of day/time and divides it by oneHour

  let minutes = Math.floor((time % oneHour) / oneMinute);

  let seconds = Math.floor((time % oneMinute) / 1000);

  //set value array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (time < 0) {
    clearInterval(countdown); //this makes sure we don't get negative values when time runs out
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4> `;
  }
}
//countdown
let countdown = setInterval(getRemainingtime, 1000); //the first input is the callback func and the second is how often you want to call it

getRemainingtime();
