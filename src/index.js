// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
let app = document.querySelector("h2");

const superEventHandler = {
  mouseover: function () {
    app.innerText = "The mouse is here!";
    app.style.color = colors[0];
  },
  mouseleave: function () {
    app.innerText = "The mouse is gone!";
    app.style.color = colors[1];
  },
  resized: function () {
    app.innerText = "You just resized!";
    app.style.color = colors[2];
  },
  contextmenu: function () {
    app.innerText = "That was a right click!";
    app.style.color = colors[3];
  }
};

app.addEventListener("mouseover", superEventHandler.mouseover);
app.addEventListener("mouseleave", superEventHandler.mouseleave);
window.addEventListener("resize", superEventHandler.resized);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
