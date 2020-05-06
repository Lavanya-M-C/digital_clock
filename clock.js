
tick();
setInterval(tick,1000);
function tick(){
    let clock = document.getElementById('clock');
    let current_time = new Date().toLocaleTimeString("en-US", {timeZone: "Asia/Kolkata"});
    clock.innerHTML = current_time;
}

