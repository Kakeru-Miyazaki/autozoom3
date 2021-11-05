let buttonAdd = document.getElementById("buttonAdd");
buttonAdd.onclick = function () {
  console.log("add");
  window.location.href = './add.html';
  // window.open('https://google.com');
};

let buttonQuit = document.getElementById("buttonQuit");
buttonQuit.onclick = function () {
  console.log("quit");
  window.location.href = './menu.html';
  // window.open('https://google.com');
};