import { spawn } from "child_process";
import waitOn from "wait-on";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const electronPath = require("electron");
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let viteProcess;

const start = async () => {
  try {
    // 1. Start Vite manually (not via concurrently)
    viteProcess = spawn("vite", [], {
      stdio: "inherit",
      shell: true,
    });

    // 2. Wait until Vite server is ready
    await waitOn({
      resources: ["http://localhost:5173"],
      timeout: 30000,
    });

    // 3. Start Electron
    const electronProcess = spawn(electronPath, [".", "--disable-gpu-vsync"], {
      stdio: "inherit",
      shell: false,
    });

    electronProcess.on("close", (code) => {
      console.log("Electron exited with code", code);

      // 4. Kill Vite when Electron closes
      if (viteProcess) {
        viteProcess.kill("SIGTERM");
      }

      process.exit(code);
    });
  } catch (err) {
    console.error("❌ Failed to start Electron:", err.message);
    if (viteProcess) viteProcess.kill("SIGTERM");
    process.exit(1);
  }
};

start();
