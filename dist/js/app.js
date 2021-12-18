const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const submitBtn = document.getElementById('submit-input');

const countdownDisplay = document.getElementById('countdown-display');

submitBtn.addEventListener('click', ev => {
    ev.preventDefault();
    let date = dateInput.value;
    let time = timeInput.value;

    let targetDate = Date.parse(date+"T"+time);
    let start = Date.now();
    let remain = (targetDate - start) / 1000;

    let days = remain / 86400;
    let hours = (remain % 86400) / 3600;
    let minutes = ((remain % 86400) % 3600) / 60;
    let seconds = ((remain % 86400) % 3600) % 60;

    alert(`${days} d ${hours} h ${minutes} m ${seconds} s`)


})

// 1 sec = 1000 ms
// 1 min = 60 sec
// 1 h = 60 min = 3600 sec
// 1 j = 24 h = 1440 min = 86400 sec