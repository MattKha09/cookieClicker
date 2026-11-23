let cookies = 0;
let clickPower = 1;
let clickupg = 10;
let autoclickupg = 40;
let autoclick = 0;

const kaka = document.getElementById("kaka")
const cookieText = document.getElementById("cookies")

const  clickText= document.getElementById("clickPower")
const autoText = document.getElementById("autoPower")

const upgradeClick = document.getElementById("Stakkak")
const buyAuto= document.getElementById("Autokak")

function uppdatetxt() {
    
    cookieText.textContent = "Kakor: " +cookies;
   
    clickText.textContent = "Kakor per klick: " +clickPower;
   
    autoText.textContent = "Kakor per secund: " +autoclick;
   
    upgradeClick.textContent = "Workout + 1: " +clickupg + "kakor";
    
    buyAuto.textContent = "Farmor klickar åt dig +1: " +autoclickupg + "kakor";
}

kaka.addEventListener("click", function(){
    
    cookies = cookies + clickPower

    uppdatetxt();

});

upgradeClick.addEventListener("click", function(){
    if (cookies>=clickupg){
        cookies = cookies - clickupg;

        clickPower++;

        clickupg = clickupg * 2;

        uppdatetxt();
    }
});

buyAuto.addEventListener("click", function(){
   
    if (cookies>=autoclickupg){
       
        cookies = cookies - autoclickupg;

        autoclick++;
        
        autoclickupg = autoclickupg * 2;

        uppdatetxt();
    }
});

setInterval(function() {

    cookies = cookies + autoclick;

    uppdatetxt();
    
}, 1000);

uppdatetxt();