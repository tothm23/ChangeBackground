const placeholderText = "type a background color";
let i = 0;

setInterval(() => {
  document.getElementById("color").placeholder += placeholderText.charAt(i);
  i++;
}, 100);

function changeBackground() {
  document.body.style.backgroundColor = document.getElementById("color").value;
}
