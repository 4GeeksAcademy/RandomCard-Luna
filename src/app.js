/* eslint-disable */
import "bootstrap";
import "./style.css";

function Random(array) {
  return Math.floor(Math.random() * array.length);
}
window.onload = function() {
  let Symbols = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let cornerPosibleIndex = ["♣", "♠", "♦", "♥"];
  let Symbol = Random(Symbols);
  let cornerIndex = Random(cornerPosibleIndex);
  let top = document.getElementById("topCornerIndex");
  let bottom = document.getElementById("bottomCornerIndex");
  top.innerText = cornerPosibleIndex[cornerIndex];
  bottom.innerText = cornerPosibleIndex[cornerIndex];
};
