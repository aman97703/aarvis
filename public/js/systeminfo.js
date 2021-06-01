const batchar = document.querySelector('.batchary');
const batlevel = document.querySelector('.batlevel');
const batchtimr = document.querySelector('.batchtimr');
const batdisch = document.querySelector('.batdisch');
const hdcon = document.querySelector('.hdcon');

hdcon.innerHTML = `${navigator.hardwareConcurrency}`;
navigator.getBattery().then(function (battery) {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener('chargingchange', function () {
        updateChargeInfo();
    });

    function updateChargeInfo() {
        const value = battery.charging ? "Yes" : "No";
        batchar.innerHTML =  `${value}`;
        
    }

    battery.addEventListener('levelchange', function () {
        updateLevelInfo();
    });

    function updateLevelInfo() {
        batlevel.innerHTML = `${battery.level * 100}%`
    }

    battery.addEventListener('chargingtimechange', function () {
        updateChargingInfo();
    });

    function updateChargingInfo() {
        batchtimr.innerHTML = `${battery.chargingTime} sec`;
    }

    battery.addEventListener('dischargingtimechange', function () {
        updateDischargingInfo();
    });

    function updateDischargingInfo() {
        batdisch.innerHTML = `${battery.dischargingTime} sec`;
    }

});