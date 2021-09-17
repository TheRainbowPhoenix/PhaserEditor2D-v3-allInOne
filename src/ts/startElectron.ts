import { app, BrowserWindow } from "electron"
import { WindowManager } from "./windowManager"

export function startElectron() {

    app.whenReady().then(() => new WindowManager())

    app.on("window-all-closed", () => {

        process.exit()
    })

    app.on("activate", () => {

        if (BrowserWindow.getAllWindows().length === 0) {

            new WindowManager()
        }
    })
}