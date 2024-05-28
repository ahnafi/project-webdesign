const lamp = document.getElementById("lamp");
const toggle = document.getElementById("toggleLamp");

toggle.addEventListener("change",()=>{

    const on = "src/img/lamp-on.svg";
    const off = "src/img/lamp-off.svg";

    if(lamp.src.includes(off)){
        lamp.src = on;
    }else {
        lamp.src = off;
    }
})