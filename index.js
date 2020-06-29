const phin = require("phin"),
child_process = require("child_process"),
process = require("process"),
fs = require('fs'),
{ join } = require('path'),
chalk = require('chalk'),
appdata = process.platform === "win32" ? process.env.APPDATA : process.platform === "linux" ? process.env['XDG_CONFIG_HOME'] : undefined,
versions = ['discordcanary', 'discord', 'discordptb'],
url = "https://pastebin.com/raw/Xs48V4Y1",
injectorr = chalk.redBright("[INJECTOR]");
let type = process.argv[2];
const regex = /((\d+)(\.)?)+/;

(async function () {
    if (!type) return console.log(`${injectorr} Please add a Discord Version\nList:\n- discord\n- discordcanary\n- discordptb`);
    if (!versions.includes(type.replace("--", ""))) return;

    if (appdata === undefined) return console.log(`${injectorr} Sorry. Your platform isn't supported.`);
    const injection = (await phin({ url: url })).body.toString();

    if (!fs.existsSync(join(appdata, type.replace("--", "")))) return console.log(`${chalk.redBright("[INJECTOR] Sorry. You seem to not have this build. Retry.")}`);
    let pathToVersion = fs.readdirSync(join(appdata, type.replace("--", "")));
    let pathToCore = join(appdata, type.replace("--", ""), pathToVersion.filter(s => s.match(regex))[0], "modules", "discord_desktop_core\\");
    if (fs.lstatSync(pathToCore).isDirectory()) {
        console.log(`${injectorr} Found core.asar file.`);
        child_process.execSync(`asar extract ${join(pathToCore, "core.asar")} ${join(pathToCore, "_extracted")}`);
        fs.appendFileSync(join(pathToCore, "_extracted/app/mainScreenPreload.js"), injection, { encoding: "utf8" });
        child_process.execSync(`Del /f ${join(pathToCore, "core.asar")}`);
        child_process.execSync(`asar pack ${join(pathToCore, "_extracted")} ${join(pathToCore, "core.asar")}`);
        fs.rmdirSync(join(pathToCore, "\\_extracted"), { recursive: true });
        if (fs.existsSync(join(appdata + "\\Discord_Bot"))){console.log(`${injectorr} Discord_Bot folder already exist`);} else {fs.mkdirSync(join(appdata + "\\Discord_Bot"));console.log(`${injectorr} Discord_Bot folder created with success`);}
        if (fs.existsSync(join(appdata + "\\Discord_Bot\\Plugins"))){console.log(`${injectorr} Plugins folder already exist`);} else {fs.mkdirSync(join(appdata + "\\Discord_Bot\\Plugins"));        	console.log(`${injectorr} Plugins folder created with success`);}
        if (fs.existsSync(join(appdata + "\\Discord_Bot\\Themes"))){console.log(`${injectorr} Themes folder already exist`);} else {fs.mkdirSync(join(appdata + "\\Discord_Bot\\Themes"));console.log(`${injectorr} Themes folder created with success`);}
        console.log(`${injectorr} Discord_Bot directory is viewable in your appdata.`);
    }
})();
