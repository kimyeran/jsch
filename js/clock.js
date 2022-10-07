const time = document.querySelector("#clock");
const date = document.querySelector("#date");
setInterval(() => {
    const day = new Date();
    time.innerText=`${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
    date.innerText = day.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
}, (1000));