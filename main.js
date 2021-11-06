// 必要なライブラリを取り込む --- (*1)
const {app, BrowserWindow} = require('electron')
let mainWindow = null // メインウィンドウ
// ウィンドウを作成する関数を定義 --- (*2)
function createWindow() {
  mainWindow = new BrowserWindow({
    webPreference: {
      nodeIntegration: true,
    },
    width: 800,   // ウィンドウの幅 --- (*3)
    height: 600,  // ウィンドウの高さ
  })
  // メインウィンドウのHTMLを指定 --- (*4)
  mainWindow.loadFile('menu.html')
  // ウィンドウを閉じた時の処理
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
// アプリのイベントを設定 --- (*5)
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
