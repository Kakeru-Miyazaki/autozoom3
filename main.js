const { app, BrowserWindow } = require('electron')
let mainWindow = null
// ウィンドウを作成する関数を定義 --- (*2)
function createWindow() {
  mainWindow = new BrowserWindow({
    webPreference: {
      nodeIntegration: true,
    },
    width: 1000,
    height: 800,
  })
  mainWindow.loadFile('menu.html')
  // ウィンドウを閉じた時の処理
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
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
