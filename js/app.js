
// setting the elements
let bk = document.querySelector(".gameBackGround");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#c3");
let c4 = document.querySelector("#c4");
let c5 = document.querySelector("#c5");
let c6 = document.querySelector("#c6");
let c7 = document.querySelector("#c7");
let c8 = document.querySelector("#c8");
let c9 = document.querySelector("#c9");
let c10 = document.querySelector("#c10");
let c11 = document.querySelector("#c11");
// notice-to-close-window
let noticeclosewindow = 'Dlouble click to close this window';
// score
let s_fish = document.getElementById('score-fish');
let n_fish = 0;
let s_crab = document.getElementById('score-crab');
let n_crab = 0;
let s_dolphin = document.getElementById('score-dolphin');
let n_dolphin = 0;
// sounds
let sonido = document.querySelector("#sonido");
sonido.src = "media/ocean2.wav";
sonido.play();
const fish = document.querySelector("#btn1");
fish.addEventListener("click", () => {
    n_fish++;
    sonido.src = "../media/fish.mp3";
    sonido.play();
    welcome.style.display = "inline";
    cardTitle.textContent = "Fish";
    cardText.innerHTML = `${data[0].parraph}`;
    stopPicture = true;
    idHistory.src = pictures[0];
    s_fish.textContent = n_fish;
});
const crab = document.querySelector("#btn2");
crab.addEventListener("click", () => {
    n_crab++;
    sonido.src = "../media/crab.wav";
    sonido.play();
    welcome.style.display = "inline";
    cardTitle.textContent = "Crab";
    cardText.innerHTML = `${data[1].parraph}`;
    stopPicture = true;
    idHistory.src = pictures[1];
    s_crab.textContent = n_crab;
});
const dolphin = document.querySelector("#btn3");
dolphin.addEventListener("click", () => {
    n_dolphin++;
    sonido.src = "../media/Dolphinsound.mp3";
    sonido.play();
    welcome.style.display = "inline";
    cardTitle.textContent = "Dolphin";
    cardText.innerHTML = `${data[2].parraph}`;
    stopPicture = true;
    idHistory.src = pictures[2];
    s_dolphin.textContent = n_dolphin;
});
let _nClick = 0;
const clickOnBody = document.querySelector("body");
clickOnBody.addEventListener(
    "click",
    () => {
        _nClick++;
      //  console.log("Click times", _nClick);
        sonido.src = "../media/ocean2.wav";
        sonido.play();
    },
    true
);

clickOnBody.addEventListener("dblclick", () => {
    welcome.style.display = "none";
});

/* Welcome and History Screen  */
const welcome = document.querySelector("#history");
welcome.style.display = "inline";

let idTitle = document.getElementById("idTitle");
idTitle.innerHTML = "<h3>Welcome To The Ocean Game</h3>";
const btnClose = document.querySelector("#btnClose");
btnClose.addEventListener("click", () => {
    welcome.style.display = "none";
});

let pictures = ["../img/m1.png", "../img/m2.png", "../img/m3.png"];
let idHistory = document.getElementById("idHistory");
let cardTitle = document.querySelector("#card-title");
cardTitle.textContent = "Fish/Crab/Dolphin";
let cardText = document.querySelector(".card-text");
cardText.innerHTML = `<em class="notice">${noticeclosewindow}</em><br><br>${data[3].parraph}`;
let p = 0;
let stopPicture = false;
let showWelcomeImages = setInterval(() => {
    if (p > 2) {
        p = 0;
    }
    if (stopPicture) {
        clearInterval(true);
    }
    idHistory.src = pictures[p];
    p++;
}, 1000);

let t = 0;

setInterval(() => {
    switch (t) {
        case 0:
            {
                c2.className = "c1";
                c1.className = "col-1 rc c3";
                bk.style.background = "url('../img/a1.jpg')";
                break;
            }
        case 1:
            {
                c3.className = "c1";
                c2.className = "col-1 rc c2";
                c1.className = "col-1 rc c3";
                break;
            }
        case 2:
            {
                deactivate();
                c4.className = "c1";
                c2.className = "col-1 rc c3";
                c3.className = "col-1 rc c2";
                break;
            }
        case 3:
            {
             
                deactivate();
                c5.className = "c1";
                c2.className = "col-1 rc c4";
                c3.className = "col-1 rc c3";
                c4.className = "col-1 rc c2";
                bk.style.background = "url('../img/a2.jpg')";
                break;
            }
        case 4:
            {
                deactivate();
                c6.className = "c1";
                c5.className = "col-1 rc c2";
                c3.className = "col-1 rc c4";
                c4.className = "col-1 rc c3";
                break;
            }
        case 5:
            {
                deactivate();
                c7.className = "c1";
                c6.className = "col-1 rc c2";
                c4.className = "col-1 rc c4";
                c5.className = "col-1 rc c3";
                break;
            }
        case 6:
            {
                deactivate();
                c8.className = "c1";
                c7.className = "col-1 rc c2";
                c5.className = "col-1 rc c4";
                c6.className = "col-1 rc c3";
                bk.style.background = "url('../img/a3.jpg')";
                break;
            }
        case 7:
            {
                deactivate();
                c8.className = "col-1 rc c2";
                c6.className = "col-1 rc c4";
                break;
            }
        case 8:
            {
                deactivate();
                c9.className = "col-1 rc c1";
                c8.className = "col-1 rc c2";
                c7.className = "col-1 rc c3";
                c6.className = "col-1 rc c4";
                break;
            }
        case 9:
            {
                c10.className = "col-1 rc c1";
                c9.className = "col-1 rc";
                break;
            }
        case 10:
            {
                c11.className = "col-1 rc c1";
                c10.className = "col-1 rc";
                break;
            }
        case 11:
            {
                deactivate();
                c12.className = "col-1 rc c1";
                c11.className = "col-1 rc c2";
                c9.className = "col-1 rc c3";
                c8.className = "col-1 rc c4";
                break;
            }
        case 12:
            {

                deactivate();
                c13.className = "col-1 rc c1";
                c12.className = "col-1 rc c2";
                c11.className = "col-1 rc c3";
                c10.className = "col-1 rc c4";
                break;
            }
        case 13:
            {
                deactivate();
                c14.className = "col-1 rc c1";
                c13.className = "col-1 rc c2";
                c12.className = "col-1 rc c3";
                c11.className = "col-1 rc c4";
                break;
            }
        case 14:
            {
                deactivate();
                c15.className = "col-1 rc c1";
                c14.className = "col-1 rc c2";
                c13.className = "col-1 rc c3";
                c12.className = "col-1 rc c4";
                break;
            }
        case 15:
            {
                deactivate();
                c16.className = "col-1 rc c1";
                c15.className = "col-1 rc c2";
                c14.className = "col-1 rc c3";
                c13.className = "col-1 rc c4";
                break;
            }
        case 16:
            {
                c16.className = "col-1 rc";
                break;
            }
        case 17:
            {
                deactivate();
                c17.className = "col-1 rc c1";
                c16.className = "col-1 rc c2";
                c15.className = "col-1 rc c3";
                c14.className = "col-1 rc c4";
                break;
            }
        case 18:
            {
                deactivate();
                c17.className = "col-1 rc c1";
                c16.className = "col-1 rc c2";
                c15.className = "col-1 rc c3";
                c14.className = "col-1 rc c4";
                break;
            }
        case 19:
            {
                deactivate();
                c18.className = "col-1 rc c1";
                c17.className = "col-1 rc c2";
                c16.className = "col-1 rc c3";
                c15.className = "col-1 rc c4";
                break;
            }
        case 20:
            {
                deactivate();
                c19.className = "col-1 rc c1";
                c18.className = "col-1 rc c2";
                c17.className = "col-1 rc c3";
                c16.className = "col-1 rc c4";
                break;
            }
        case 21:
            {
                deactivate();
                c20.className = "col-1 rc c1";
                c19.className = "col-1 rc c2";
                c18.className = "col-1 rc c3";
                c17.className = "col-1 rc c4";
                break;
            }

        case 22:
            {
                deactivate();
                c21.className = "col-1 rc c1";
                c20.className = "col-1 rc c2";
                c19.className = "col-1 rc c3";
                c18.className = "col-1 rc c4";
                break;
            }
        case 23:
            {
                deactivate();
                c22.className = "col-1 rc c1";
                c21.className = "col-1 rc c2";
                c20.className = "col-1 rc c3";
                c19.className = "col-1 rc c4";
                break;
            }
        case 24:
            {
                c22.className = "col-1 rc";
                c1.className = "col-1 rc c1";
                break;
            }
    }

    t++;
    if (t > 24) {
        t = 0;
    }
}, 1000);

function deactivate(){
    c18.className = "col-1 rc";
    c17.className = "col-1 rc";
    c16.className = "col-1 rc";
    c15.className = "col-1 rc";
    c14.className = "col-1 rc";
    c13.className = "col-1 rc";
    c12.className = "col-1 rc";
    c11.className = "col-1 rc";
    c10.className = "col-1 rc";
    c9.className = "col-1 rc";
    c8.className = "col-1 rc";
    c7.className = "col-1 rc";
    c1.className = "col-1 rc";
    c2.className = "col-1 rc";
    c3.className = "col-1 rc";
    c4.className = "col-1 rc";
    c5.className = "col-1 rc";
    c6.className = "col-1 rc";
}