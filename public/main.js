const { app, BrowserWindow } = require('electron');

const path = require('path');

function createWindow() {
    var win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: false
        }
    })
    win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})