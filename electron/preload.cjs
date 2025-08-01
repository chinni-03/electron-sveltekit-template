const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  chooseDirectory: () => ipcRenderer.invoke("chooseDirectory"),
  createFolderInPath: (folderName, basePath) =>
    ipcRenderer.invoke("createFolderInPath", folderName, basePath),
});
