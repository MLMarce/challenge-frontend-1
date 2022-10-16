import data from '/data.json' assert {type: 'json'};

let bgColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
];


let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');
let secondSection = document.querySelector('.second-section');

drawElements(dailyArray);

dailyBtn.addEventListener('click', ()=>{
    drawElements(dailyArray);
 });

 weeklyBtn.addEventListener('click', ()=>{
    drawElements(weeklyArray);
 });

 monthlyBtn.addEventListener('click', ()=>{
    drawElements(monthlyArray);
 });

function drawElements(horas) {
    secondSection.innerHTML = '';
    horas.forEach((element, index)=> {
        let title = data[index].title;
        let titleLowerCase = title.toLocaleLowerCase();

        if (titleLowerCase == 'self care') {
            titleLowerCase = 'self-care'
        };

        secondSection.innerHTML += `
            <div class="activity">
            <div class="activity__color" style="background-color: ${bgColors[index]};">
            <img src="./images/icon-${titleLowerCase}.svg" alt="">
            </div>
            <div class="ativity__box">
            <div class="activity__name">
                <p class="activity__p">${title}</p>
                <img src="/images/icon-ellipsis.svg" alt="three dots">
            </div>
            <div class="activity__time">
                <h2>${element.current} hrs</h2>
                <p>Previous - ${element.previous}  hrs</p>
            </div>
            </div>
        </div>
        `
    });
}

const time = document.querySelectorAll(".date__choice");

time.forEach(element=> {
    element.addEventListener("click", ()=> {
        removeActiveClass();
        element.classList.add("date__choice--active");
    });
});

const removeActiveClass = () => {
    time.forEach(element => {
        element.classList.remove("date__choice--active");
    });
};