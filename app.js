let cookie = document.getElementById("cokkie");
let displayCookies = document.getElementById("displayCookies");

cookie.addEventListener("click", cookieClicked);

let cookies = 0;
let multplier = 1;

function cookieClicked() {
  cookies - cookies + multplier;
  displayCookiesAmt();
}

function displayCookiesAmt() {
  displayCookies.innerHTML = "<p>You have" + cookies + " cookies!";
}
