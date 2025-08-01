import { app, BrowserWindow, dialog, ipcMain } from "electron";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { create } from "domain";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.disableHardwareAcceleration();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      sandbox: false,
    },
  });

  win.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle("chooseDirectory", async () => {
    const result = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    return result.filePaths[0];
  });

  ipcMain.handle("createFolderInPath", async (event, folderName, basePath) => {
    const newFolderPath = path.join(basePath, folderName);

    try {
      if (!fs.existsSync(newFolderPath)) {
        fs.mkdirSync(newFolderPath);
        return newFolderPath;
      } else {
        throw new Error("Folder already exists");
      }
    } catch (error) {
      throw error;
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
