const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};

// console.log(refs.btnStart);
// console.log(refs.btnStop);
// console.log(refs.body);

// refs.btnStop.setAttribute(`disabled`, true);

let timerId = null;

function ifClickOnBtn() {
    if(refs.btnStart !== disabled) {
        onBtnStartClick();
    }

}


const onBtnStartClick = () => {
    refs.btnStop.removeAttribute(`disabled`, true);
    refs.btnStart.setAttribute(`disabled`, true);
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
        
    }, 1000);
    console.log("Start");
  };

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
  

const onBtnStopClick = () => {
    refs.btnStart.removeAttribute(`disabled`, true);
    refs.btnStop.setAttribute(`disabled`, true);
    clearInterval(timerId);
    console.log("Stop")
    
  };


refs.btnStart.addEventListener("click", onBtnStartClick);
refs.btnStop.addEventListener("click", onBtnStopClick);
