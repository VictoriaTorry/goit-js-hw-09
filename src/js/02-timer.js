import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const timePicker = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let setIntervalForDate = null;
let selectedDateMs = null;

startBtn.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDateMs = selectedDates[0].getTime();
    if (selectedDates[0] - new Date() <= 0) {
      Notiflix.Notify.failure(
        `Please choose a date in the future`
      );
    } else {
      startBtn.disabled = false;
    }
  },
};

function onStart(){
  if (!!setIntervalForDate === true) {
    clearInterval(setIntervalForDate);
  }
  setIntervalForDate = setInterval(() => {
    let difference = selectedDateMs - new Date()
    if(difference <= 1000){clearInterval(setIntervalForDate);}
    let dateObj = convertMs(difference);
    days.textContent = addLeadingZero(dateObj.days);
    hours.textContent = addLeadingZero(dateObj.hours);
    minutes.textContent = addLeadingZero(dateObj.minutes);
    seconds.textContent = addLeadingZero(dateObj.seconds); 
  }, 1000);
}

startBtn.addEventListener('click', onStart)

flatpickr(timePicker, options);