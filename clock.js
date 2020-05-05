
tick();
setInterval(tick,1000);
function tick(){
    let clock = document.getElementById('clock');
    let current_time = new Date().toLocaleTimeString();
    clock.innerHTML = current_time;
}

