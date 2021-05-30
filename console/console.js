const buttonHide = document.getElementById("buttonHide");

const buttonShow = document.getElementById("buttonShow");

buttonHide.onclick = function () { hide() };
buttonShow.onclick = function () { showConsole() };

function hide() {
    cons.style.height = "0";
    cons.style.width = "32px";
}

function showConsole() {
    cons.style.width = "800px"
    cons.style.height = "450px"
}

const display = document.getElementById("display");

const cons = document.getElementById("cons");
const topBar = document.getElementById("topBar");


topBar.addEventListener("mousedown", (e) => {

    const mouseDownX = e.offsetX;
    const mouseDownY = e.offsetY;

    function moveConsole(e) {
        cons.style.top = e.clientY - mouseDownY + "px";
        cons.style.left = e.clientX - mouseDownX + "px";
    }
    document.addEventListener("mousemove", moveConsole, false);

    document.addEventListener("mouseup", (e) => {
        document.removeEventListener("mousemove", moveConsole);
    }, false);

}, false);