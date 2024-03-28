let cookie = document.getElementById("cookie");
let displayCookies = document.getElementById("displayCookies");
let upgradeClicker = document.getElementById("upgCliker");
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
  displayCookies.innerHTML = "<p>You have" + cookies + " cookies!";
}

function upgradeClickerClicked() {
  if (cookies > multplierCost) {
    cookies = cookies - multplierCost;
    multplier = multplier + 1;
    multplierCost = multplierCost * 1.5;
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
    autoClickerCost = autoClickerCost * 1.5;
    displayAutoClikerCost.innerHTML =
      "<p>Auto Clicker costs" + autoClickerCost + "cookies!";
  } else {
    alert("You need to earn more coockies");
  }
}
