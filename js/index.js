const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  messageBox: document.querySelector(".js-message"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerId = document.querySelector(`${selector}`);
    this.targetDate = targetDate;
  }

  createTimer() {
    const interval = setInterval(() => {
      const currentDate = Date.now();
      const time = this.targetDate - currentDate;

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      if (days < 0) {
        clearInterval(interval);
        refs.messageBox.classList.add("visible"); // appears when the time is over

        setTimeout(() => {
          refs.messageBox.classList.remove("visible");
        }, 3000); // disappears after 3s

        refs.days.textContent = "00";
        refs.hours.textContent = "00";
        refs.mins.textContent = "00";
        refs.secs.textContent = "00"; // for situations when user enters a date which has already passed

        return;
      } // timer must stop when every time unit equals to 0

      refs.days.textContent = this.pad(days);
      refs.hours.textContent = this.pad(hours);
      refs.mins.textContent = this.pad(mins);
      refs.secs.textContent = this.pad(secs);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 17, 2020"),
});

timer1.createTimer();