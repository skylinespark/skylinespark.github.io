let target = document.getElementById('target');
let time = 10;
let destination = "/";
let time_output = document.getElementById('timer-output')
let time_burn = setInterval(()=>{
    time--;
    if (time == 0){
        target.innerHTML = `
            <button class='button' onclick='window.open ("${destination}")'> Continue </button>
        <br><br>`;
        clearInterval(time_burn);
    }
    time_output.innerHTML = time;
}, 1000);