let cookie = document.getElementById("cookie");
let displayCookies = document.getElementById("displayCookies");
let upgradeClicker = document.getElementById("upgClicker");
let displayUpgradeCost = document.getElementById("displayUpgradeCost");
let autoClicker = document.getElementById("autoClicker");
let displayAutoClikerCost = document.getElementById("displayAutoClikerCost");

cookie.addEventListener("click", cookieClicked);
upgradeClicker.addEventListener("click", upgradeClickerClicked);
autoClicker.addEventListener("click", autoClickerClicked);

let cookies = 0;
let multplier = 1;
let multplierCost = 25;
let autoClickers = 0;
let autoClickerCost = 50;

function cookieClicked() {
  cookies = cookies + multplier;
  displayCookiesAmt();
}

function displayCookiesAmt() {
  displayCookies.innerHTML =
    "<p>You have" + cookies + Math.floor(cookies * 100) / 100 + "cookies!";
}

function upgradeClickerClicked() {
  if (cookies > multplierCost) {
    cookies = cookies - multplierCost;
    multplier = multplier + 1;
    multplierCost = multplierCost * 1.3;
    displayUpgradeCost.innerHTML =
      "<p>Upgrade costs" + multplierCost + "cookies!";

    displayCookiesAmt();
  } else {
    alert("Not enough cookies");
  }
}

function autoClickerClicked() {
  if (cookies > -autoClickerCost) {
    cookies = cookies - autoClickerCost;
    autoClickers - autoClickers + 1;
    displayCookiesAmt();
    autoClickerCost = autoClickerCost * 1.3;
    displayAutoClikerCost.innerHTML =
      "<p>Auto Clicker costs" + autoClickerCost + "cookies!";
  } else {
    alert("You need to earn more coockies");
  }
}

setInterval(function () {
  cookies = cookies + autoClickers * 0.1;
  displayCookiesAmt();
}, 100);

let currCookieTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    //<div id ="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
}

setInterval(setCookie, 1000);
setInterval(setPlant, 2000);

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setCookie() {
  if (gameOver) {
    return;
  }
  if (currCookieTile) {
    currCookieTile.innerHTML = "";
  }

  let cookie = document.createElement("img");
  cookie.src = "./cookie image  4 .png";

  let num = getRandomTile();
  if (currPlantTile && currPlantTile.id == num) {
    return;
  }
  currCookieTile = document.getElementById(num);
  currCookieTile.appendChild(cookie);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";

  let num = getRandomTile();
  if (currCookieTile && currCookieTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}
function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currCookieTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString();
    gameOver = true;
  }
}
localStorage.setItem(`name`, `Cookie`);
localStorage.removeItem(`name`);
