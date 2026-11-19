let cookies = 0;
let clickPower = 1;
let clickupg = 10;
let autoclickupg = 50;
let autoclick = 0;

const kaka = document.getElementById("kaka")
const cookieText = document.getElementById("cookies")

const  auto= document.getElementById("autopower")
const kaka = document.getElementById("kaka")

const kaka = document.getElementById("kaka")
const kaka = document.getElementById("kaka")

function uppdatetxt() {
    
    cookieText.textContent = "Kakor: " +cookies;
    clickText.textContent = "Kakor per klick: " +clickPower;
    autoText.textContent = "Auto click: " +autoClickers;
    upgradeClick.textContent = "Starkare klick - kostar: " +clickCost + "kakor";
    buyAuto.textContent = "Köp auto clicker - kostar: " +autocost + "kakor";
}

kaka.addEventlistener("click", function(){
    cookies = cookies + clickPower

    uppdatetxt();

});
