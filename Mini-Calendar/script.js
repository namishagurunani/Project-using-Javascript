function updateDate() {
    const currentDate = new Date();
    const options = { month: 'long', weekday: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options).replace(/,/g, '');;
    const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const monthName = formattedDate.split(' ')[0];
    const dayName = formattedDate.split(' ')[1];
    const dayNumber = formattedDate.split(' ')[2];
    const year = formattedDate.split(' ')[3];
    const currenttime = formattedTime.split(' ')[4];
    

    document.getElementById('month-name').textContent = monthName;
    document.getElementById('day-name').textContent = dayName;
    document.getElementById('day-number').textContent = dayNumber;
    document.getElementById('year').textContent = year;
    document.getElementById('current-time').textContent = formattedTime;
}

updateDate();

setInterval(updateDate, 1000);