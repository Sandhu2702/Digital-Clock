function updateClock() {
  const now = new Date(); // current date and time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Adding leading zero if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Formating time
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Displaying time in clock div
  document.getElementById('clock').textContent = timeString;
}

// Updating clock every second
setInterval(updateClock, 1000);

// Initial call
updateClock();

