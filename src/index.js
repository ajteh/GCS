const { app, BrowserWindow } = require('electron');

function createWindow() {
  const w = new BrowserWindow();
  w.maximize();

  w.loadURL('https://www.facebook.com/');
}

app.on('ready', createWindow);