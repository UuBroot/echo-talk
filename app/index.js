"use strict";
const { app, BrowserWindow } = require('electron');
const Gun = require('gun');
/*******************
* Start and Close  *
*******************/
app.whenReady().then(() => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
/********************
*   Window Creation *
********************/
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadFile('./public/index.html');
    win.webContents.openDevTools();
};
/*********
* Gun JS *
*********/ 
