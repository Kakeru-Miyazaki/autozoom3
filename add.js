let buttonAdd = document.getElementById("buttonRegister");
buttonAdd.onclick = function () {
  console.log("reg");
  // window.location.href = './menu.html';
  document.location.assign('https://google.com');
};

// let buttonQuit = document.getElementById("buttonQuit");
// buttonQuit.onclick = function () {
//   console.log("quit");
//   window.location.href = './menu.html';
//   // window.open('https://google.com');
// };


function coladd() {
  var table = document.getElementById("table");
  // 行を行末に追加
  var row = table.insertRow(-1);
  //td分追加
  var cell1 = row.insertCell(-1);
  var cell2 = row.insertCell(-1);
  var cell3 = row.insertCell(-1);
  var cell4 = row.insertCell(-1);
  // セルの内容入力
  cell1.innerHTML = '行を追加しました';
  cell2.innerHTML = '';
  cell3.innerHTML = '';
  cell4.innerHTML = '';
  cell5.innerHTML = 'delete this row<input type="button" value=削除" id="coladd" onclick="coldel(this)">';
  // $('table').html(table);
}
function coldel(obj) {
  var table = document.getElementById("table");
  // 削除ボタンを押下された行を取得
  tr = obj.parentNode.parentNode;
  // trのインデックスを取得して行を削除する
  tr.parentNode.deleteRow(tr.sectionRowIndex);
  // $('table').html(table);
}