const blbControl = document.getElementById("blb_control");
const text = document.getElementById("text");
const switchBtn = document.getElementById("switch");
const welcomeMessage = document.getElementById("welcome_message");

function blb() {
    if (blbControl.src.match('lightoff.png')) {
        blbControl.src = 'lighton.png';
        document.body.style.backgroundColor = "#444"
        document.body.style.color = "#f1f1f1"
        text.innerText = "Click Switch--To Turn OFF The Light";
        welcomeMessage.style.opacity = "0";
    } else {
        blbControl.src = 'lightoff.png';
        document.body.style.backgroundColor = "#fff"
        document.body.style.color = "#444"
        text.innerText = "Click Switch--To Turn ON The Light";
    }
}
switchBtn.addEventListener("click")