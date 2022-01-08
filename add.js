function createKey(newDay, newTime) {
  return newDay + newTime.slice(0, 2) + newTime.slice(3)
}

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
  const newTime = document.getElementById('inputTime').value
  const newName = document.getElementById('inputName').value
  const newURL = document.getElementById('inputURL').value
  if (document.getElementById('inputTime').value == "" || document.getElementById('inputName').value == "" || document.getElementById('inputURL').value == "") {
    alert("Please Input All Values");
    return false;
  } else {
    // 行を行末に追加
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(-1);
    var cell2 = row.insertCell(-1);
    var cell3 = row.insertCell(-1);
    // var cell4 = row.insertCell(-1);
    var cell5 = row.insertCell(-1);
    // セルの内容入力
    cell1.innerHTML = newDay;
    cell2.innerHTML = newTime;
    cell3.innerHTML = newName;
    // cell4.innerHTML = newURL;
    cell5.innerHTML = '<input type="button" id="coladd" onclick="removeStorage(\'' + createKey(newDay, newTime) + '\')" value="delete">';
    var array = [];
    var obj = {
      'Day': newDay,
      'Time': newTime,
      'Name': newName,
      'URL': newURL
    };
    array.push(obj);

    var setjson = JSON.stringify(obj);
    localStorage.setItem(createKey(newDay, newTime), setjson);
    document.getElementById('inputTime').value = ""
    document.getElementById('inputName').value = ""
    document.getElementById('inputURL').value = ""
    return true;
  }

}

function coldel(obj) {
  var table = document.getElementById("table");
  // 削除ボタンを押下された行を取得
  tr = obj.parentNode.parentNode;
  // trのインデックスを取得して行を削除する
  tr.parentNode.deleteRow(tr.sectionRowIndex);
}

// ローカルストレージに保存
var saveStorage = function () {
  var key = document.getElementById("key").value;
  var value = document.getElementById("value").value;
  if (key && value) {
    localStorage.setItem(key, value);
  }
  key = "";
  value = "";
  viewStorage();
};

// 特定のキーと値を削除
var removeStorage = function (key) {
  localStorage.removeItem(key);
  key = "";
  viewStorage();
};

// 全てのキーと値を削除
var clearStorage = function () {
  localStorage.clear();
  viewStorage();
};

// ローカルストレージのデータを表に出力
var viewStorage = function () {
  var tb = document.getElementById("table")
  // テーブルの初期化
  while (tb.firstChild) {
    tb.removeChild(tb.firstChild);
  }
  // テーブルの出力
  for (var i = 0; i < localStorage.length; i++) {
    var _key = localStorage.key(i);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    // var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    tb.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // tr.appendChild(td4);
    tr.appendChild(td5);
    obj = JSON.parse(localStorage.getItem(_key))
    td1.innerHTML = obj['Day'];
    td2.innerHTML = obj['Time'];
    td3.innerHTML = obj['Name'];
    // td4.innerHTML = obj['URL'];
    td5.innerHTML = '<input type="button" onclick="removeStorage(\'' + _key + '\')" value="delete">';
    // console.log(localStorage)
  }
};

// clearStorage()
viewStorage()

