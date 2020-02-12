const electron = require('electron')

const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Crea la ventana del navegador.
  let win = new BrowserWindow({
    width: 900,
    height: 600,
    minHeight: 900,
    minWidth: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // y carga el  index.html de la aplicación.
  win.loadFile('Examen.html')
}

app.on('ready', createWindow)