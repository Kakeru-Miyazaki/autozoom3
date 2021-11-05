function coladd() {
  var table = document.getElementById("table");


  let elements = document.getElementsByName('accessible-radio');
  let len = elements.length;
  let newDay = '';

  for (let i = 0; i < len; i++) {
    if (elements.item(i).checked) {
      newDay = elements.item(i).value;
    }
  }

  const newTime = document.getElementsByName('inputTime')
  const newName = document.getElementsByName('inputName')
  const newURL = document.getElementsByName('inputURL')

  // 行を行末に追加
  var row = table.insertRow(-1);
  //td分追加
  var cell1 = row.insertCell(-1);
  var cell2 = row.insertCell(-1);
  var cell3 = row.insertCell(-1);
  var cell4 = row.insertCell(-1);
  var cell5 = row.insertCell(-1);
  // セルの内容入力
  cell1.innerHTML = newDay;
  cell2.innerHTML = newTime;
  cell3.innerHTML = newName;
  cell4.innerHTML = newURL;
  cell5.innerHTML = '<input type="button" value="delete this row" id="coladd" onclick="coldel(this)">';
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