var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognitionn = new SpeechRecognition();

const wakejarvis = document.querySelector('#wakejarvis');

const outermain =  document.querySelector('.outermain');
const innner1 =  document.querySelector('.innner1');
const inner2 =  document.querySelector('.inner2');
const inner3 =  document.querySelector('.inner3');
const inner4 =  document.querySelector('.inner4');
const inner =  document.querySelector('.inner');
const sysinfo_h2 =  document.querySelector('.sysinfo h2');
const timeinside1 =  document.querySelector('.timeinside1');
const timeinside2 =  document.querySelector('.timeinside2');
const dateinside1 =  document.querySelector('.dateinside1');
const dateinside2 =  document.querySelector('.dateinside2');
var innerbtn =  document.querySelector('.innerbtn');

const _0x162d=['speechSynthesis','volume','19EnXfbv','352017ofiPjo','2bgtraX','rate','111OVVWHh','12423toasjB','speak','Please\x20Wait..\x20System\x20Initializing..\x20Backing\x20Up\x20Configurations,\x20Gathering\x20Audio\x20and\x20Video\x20files.\x20\x20System\x20Intialized.\x20I\x20am\x20ready\x20and\x20Online.\x20for\x20asking\x20Question\x20simply\x20click\x20on\x20arc\x20reacter.','54943rAhMup','pitch','789803rnkrKa','1186756BBePiN','776483pQhiEh','text','317441yqKFwX'];function _0x3c42(_0x80d9aa,_0x439eea){_0x80d9aa=_0x80d9aa-0x97;let _0x162d33=_0x162d[_0x80d9aa];return _0x162d33;}(function(_0x3a8e47,_0x3c5d7e){const _0x5cd1b2=_0x3c42;while(!![]){try{const _0x1c9fd4=parseInt(_0x5cd1b2(0xa6))*parseInt(_0x5cd1b2(0x9e))+-parseInt(_0x5cd1b2(0x97))+parseInt(_0x5cd1b2(0x9f))+parseInt(_0x5cd1b2(0xa3))*parseInt(_0x5cd1b2(0xa2))+-parseInt(_0x5cd1b2(0xa0))*parseInt(_0x5cd1b2(0x9b))+-parseInt(_0x5cd1b2(0x98))+parseInt(_0x5cd1b2(0x99));if(_0x1c9fd4===_0x3c5d7e)break;else _0x3a8e47['push'](_0x3a8e47['shift']());}catch(_0x1618ed){_0x3a8e47['push'](_0x3a8e47['shift']());}}}(_0x162d,0xe5799));function readOutLoud1(){const _0xd54b4a=_0x3c42,_0x303533=new SpeechSynthesisUtterance();_0x303533[_0xd54b4a(0x9a)]=_0xd54b4a(0xa5),_0x303533[_0xd54b4a(0x9d)]=0x1,_0x303533[_0xd54b4a(0xa1)]=0x1,_0x303533[_0xd54b4a(0xa7)]=0x1,window[_0xd54b4a(0x9c)][_0xd54b4a(0xa4)](_0x303533);}

function readOutLoud2() {
    const speech = new SpeechSynthesisUtterance();
    speech.text = `sleeping Aarvis..........`;

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

document.querySelector('#wakejarvis').addEventListener('click',()=>{
    readOutLoud1();
    outermain.style.animation = "animate1 5s linear infinite";
    innner1.style.animation = "animate2 20s linear infinite";
    inner2.style.animation = "animate3 15s linear infinite";
    inner3.style.animation = "animate4 10s linear infinite";
    inner4.style.animation = "animate4 5s linear infinite";
    inner.style.animation = "animate5 15s linear infinite";
    sysinfo_h2.style.animation = "animate6 5s linear infinite";
    timeinside1.style.animation = "animate3 5s linear infinite";
    timeinside2.style.animation = "animate4 5s linear 0s infinite";
    dateinside2.style.animation = "animate3 5s linear 0s infinite";
    dateinside1.style.animation = "animate4 5s linear 0s infinite";
    innerbtn.disabled = false;
    setTimeout(() => {
        document.querySelector('#wakejarvis').classList.remove('show');
        document.querySelector('#wakejarvis').classList.add('hide');
        document.querySelector('#sleepjarvis').classList.add('show');
        document.querySelector('#sleepjarvis').classList.remove('hide');
    }, 10000);
    
})
document.querySelector('#sleepjarvis').addEventListener('click',()=>{
    readOutLoud2();    
    outermain.style.animation = "";
    innner1.style.animation = "";
    inner2.style.animation = "";
    inner3.style.animation = "";
    inner4.style.animation = "";
    inner.style.animation = "";
    sysinfo_h2.style.animation = "";
    timeinside1.style.animation = "";
    timeinside2.style.animation = "";
    dateinside2.style.animation = "";
    dateinside1.style.animation = "";
    setTimeout(() => {
        document.querySelector('#sleepjarvis').classList.add('hide');
        document.querySelector('#sleepjarvis').classList.remove('show');
        document.querySelector('#wakejarvis').classList.remove('hide');
        document.querySelector('#wakejarvis').classList.add('show');
    }, 500);
    innerbtn.disabled = true;
})