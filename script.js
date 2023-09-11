function updateTimeAndDay() {
    const currentTime = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentTime.getUTCDay()];
    const currentUTCTime = currentTime.toISOString();
    
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Day of the Week: ${currentDay}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `UTC Time: ${currentUTCTime}`;
}

// Update time and day every second
setInterval(updateTimeAndDay, 1000);

// Initial update
updateTimeAndDay();