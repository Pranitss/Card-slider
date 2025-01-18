let power = false;
let volume = 5;
let channel = 1;

const tvScreen = document.getElementById('tv-screen');
const powerBtn = document.getElementById('power-btn');
const volumeText = document.getElementById('volume');
const channelText = document.getElementById('channel');
const screenContent = document.getElementById('screen-content');

function togglePower() {
  power = !power;
  if (power) {
    powerBtn.textContent = "Power: ON";
    screenContent.textContent = "Channel: " + channel + " - Volume: " + volume;
    tvScreen.style.backgroundColor = "#000";
  } else {
    powerBtn.textContent = "Power: OFF";
    screenContent.textContent = "TV is OFF";
    tvScreen.style.backgroundColor = "#333";
  }
}

function changeVolume(direction) {
  if (!power) return;  // Ignore changes if the TV is off
  if (direction === 'up' && volume < 10) volume++;
  if (direction === 'down' && volume > 0) volume--;
  volumeText.textContent = "Volume: " + volume;
  screenContent.textContent = "Channel: " + channel + " - Volume: " + volume;
}

function changeChannel(direction) {
  if (!power) return;  // Ignore changes if the TV is off
  if (direction === 'up' && channel < 100) channel++;
  if (direction === 'down' && channel > 1) channel--;
  channelText.textContent = "Channel: " + channel;
  screenContent.textContent = "Channel: " + channel + " - Volume: " + volume;
}
