// 1.
document.addEventListener("DOMContentLoaded", () => {
const savedFontSize = localStorage.getItem("fontSize");
const savedBgColor = localStorage.getItem("backgroundColor");
const savedFontColor = localStorage.getItem("fontColor");
if (savedFontSize) {
    document.body.style.fontSize = savedFontSize;
    document.getElementById("fontSize").value = savedFontSize;
}
if (savedBgColor) {
    document.body.style.backgroundColor = savedBgColor;
    document.getElementById("backgroundColor").value = savedBgColor;
    }
if (savedFontColor) {
document.body.style.color = savedFontColor;
document.getElementById("fontColor").value = savedFontColor;
}
document.getElementById("saveBtn").addEventListener("click", () => {
const fontSize = document.getElementById("fontSize").value;
const backgroundColor = document.getElementById("backgroundColor").value;
const fontColor = document.getElementById("fontColor").value;
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("backgroundColor", backgroundColor);
    localStorage.setItem("fontColor", fontColor);
document.body.style.fontSize = fontSize;
document.body.style.backgroundColor = backgroundColor;
document.body.style.color = fontColor;
});

document.getElementById("resetBtn").addEventListener("click", () => {
localStorage.removeItem("fontSize");
localStorage.removeItem("backgroundColor");
localStorage.removeItem("fontColor");
document.body.style.fontSize = "16px";
document.body.style.backgroundColor = "#ffffff";
document.body.style.color = "#000000";
document.getElementById("fontSize").value = "16px";
document.getElementById("backgroundColor").value = "#ffffff";
document.getElementById("fontColor").value = "#000000";
    });
});

// 2.
const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

// Capturing phase
outer.addEventListener('click', () => {
  console.log('Capturing: outer');
}, true);

// Bubbling phase
middle.addEventListener('click', () => {
  console.log('Bubbling: middle');
}, false);

inner.addEventListener('click', () => {
  console.log('Bubbling: inner');
}, false);

// 3.
const input = document.getElementById('message');
const display = document.getElementById('display');

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    display.textContent = event.target.value;
  }
});

// 4.
const area = document.getElementById('area');
const info = document.getElementById('info');

area.addEventListener('mousemove', (event) => {
  info.textContent = `Mouse position: X = ${event.clientX}, Y = ${event.clientY}`;
});
