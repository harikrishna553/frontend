import {app, BrowserWindow} from "electron";
import path from 'path'

app.on("ready", () => {
    const mainWindow = new BrowserWindow({});

    mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react', 'index.html'));
    //mainWindow.loadURL("https://self-learning-java-tutorial.blogspot.com/2019/07/maven-tutorial.html")
});