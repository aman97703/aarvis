const dateinside = document.querySelector('.dateinside2');
const timeinside = document.querySelector('.timeinside2');
const month = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
const day = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];

const fun = function(){
    setInterval(()=>{
        let date = new Date();
        timeinside.innerHTML = `${date.getDate()} ${month[date.getMonth()]}`;
        dateinside.innerHTML = `${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()} <br> ${day[date.getDay()]}`;
    },1000)
}

fun();
