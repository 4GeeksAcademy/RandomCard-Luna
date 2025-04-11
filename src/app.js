/* eslint-disable */
import "bootstrap";
import "./style.css";

function Random(array) {
  return Math.floor(Math.random() * array.length);
}
window.onload = function() {
  let randomButton = document.getElementById("randomButton");
  randomButton.addEventListener("click", function() {
    let symbols = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let cornerPosibleIndex = ["♣", "♠", "♦", "♥"];
    let symbol = Random(symbols);
    let cornerIndex = Random(cornerPosibleIndex);
    let top = document.getElementById("topCornerIndex");
    let bottom = document.getElementById("bottomCornerIndex");
    let center = document.getElementById("centerRank");
    top.innerText = cornerPosibleIndex[cornerIndex];
    bottom.innerText = cornerPosibleIndex[cornerIndex];
    center.innerText = symbols[symbol];
    if (cornerIndex >= 2) {
      top.style.color = "red";
      bottom.style.color = "red";
      return;
    } else {
      top.style.color = "black";
      bottom.style.color = "black";
    }
  });
};
