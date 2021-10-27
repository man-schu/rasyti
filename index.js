const { app, BrowserWindow, Menu, Tray } = require('electron');

// für Tray icon in Linux

var win = '',
    appIcon = null,
    iconpath = path.join(__dirname, '/images/icons/icon.png');



const path = require('path');

var mainWindow;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
 //  show: false,icon: __dirname + '/images/icons/icon.ico',
    show: false,icon: __dirname + '/images/icons/icon.png',
   webPreferences: {
    contextIsolation: true
  }
  });


  // and load the index.html of the app.
  
 mainWindow.setMenuBarVisibility(false);
  
  mainWindow.maximize();
  
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
//  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: 'File',
    submenu: [
            {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}

