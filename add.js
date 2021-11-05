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
    cell5.innerHTML = '<input type="button" value="delete this data" id="coladd" onclick="coldel(this)">';
    // $('table').html(table);
    return true;
  }
}

function coldel(obj) {
  var table = document.getElementById("table");
  // 削除ボタンを押下された行を取得
  tr = obj.parentNode.parentNode;
  // trのインデックスを取得して行を削除する
  tr.parentNode.deleteRow(tr.sectionRowIndex);
  // $('table').html(table);
}


// read csv


let fileInput = document.getElementById('csv_file');
let message = document.getElementById('message');
let fileReader = new FileReader();

// ファイル変更時イベント
fileInput.onchange = () => {
  message.innerHTML = "読み込み中..."

  let file = fileInput.files[0];
  // let file = fileInput.files[0];
  fileReader.readAsText(file, "Shift_JIS");
};

// ファイル読み込み時
let items = [];
fileReader.onload = () => {
  // ファイル読み込み
  let fileResult = fileReader.result.split('\r\n');

  // 先頭行をヘッダとして格納
  let header = fileResult[0].split(',')
  // 先頭行の削除
  fileResult.shift();

  // CSVから情報を取得
  items = fileResult.map(item => {
    let datas = item.split(',');
    let result = {};
    for (const index in datas) {
      let key = header[index];
      result[key] = datas[index];
    }
    return result;
  });

  // テーブル初期化
  let tbody = document.querySelector('#table tbody');
  // let tbody = document.querySelector('#csv_data_table tbody');
  tbody.innerHTML = "";

  //　CSVの内容を表示
  let tbody_html = "";
  for (item of items) {
    tbody_html += `<tr>
        <td>${item.Day}</td>
        <td>${item.Time}</td>
        <td>${item.Name}</td>
        <td>${item.URL}</td>
        <td>${item.Del}</td>
      </tr>
      `
  }
  tbody.innerHTML = tbody_html;

  // message.innerHTML = items.length + "件のデータを読み込みました。"
}

// ファイル読み取り失敗時
fileReader.onerror = () => {
  items = [];
  message.innerHTML = "Cannot open the file"
}



//CSV出力＆ダウンロード

// テーブルデータのCSVダウンロード
function onCSVDownload(a, table, filename) {
  var escaped = /,|\r?\n|\r|"/;
  var e = /"/g;

  // データ作成
  var bom = new Uint8Array([0xEF, 0xBB, 0xBF]); // UTF-8BOMあり
  var csv = [], row = [], field, r, c;
  for (r = 0; r < table.rows.length; r++) {
    row.length = 0;
    for (c = 0; c < table.rows[r].cells.length; c++) {
      field = table.rows[r].cells[c].textContent;
      row.push(escaped.test(field) ? '"' + field.replace(e, '""') + '"' : field);
      // 区切り、改行、エスケープ文字を含む場合、エスケープ文字文字で囲む（エスケープ文字は二重にする）
    }
    csv.push(row.join(','));
  }
  //var blob = new Blob([/*bom, */csv.join('\n')], {'type': 'text/csv'}); // BOMなし
  var blob = new Blob([bom, csv.join('\n')], { 'type': 'text/csv' });

  // 保存
  if (window.navigator.msSaveBlob) {
    // IE用(保存 or 開く保存)
    window.navigator.msSaveBlob(blob, filename);
    //window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
  }
  console.log("Added")
}
