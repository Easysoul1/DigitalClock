// Digital Clock Functionality
function getTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const merideim = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minutes = currentTime.getMinutes().toString().padStart(2, 0);
    const seconds = currentTime.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${merideim}`;
    document.getElementById('clock').textContent = timeString;
}
getTime();
setInterval(getTime, 1000);