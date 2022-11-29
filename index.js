const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const TOKEN = "OTM1NjM3NTYyODA1MDU5NjI0.GdU8Xv.OAHI95hTBlK4Mk1A94ZJjJjIh2MzJ2Kxm2Ulls";

const loadEvents = (dir) => {
    fs.readdirSync(dir).forEach(dirs => {
        let events = fs.readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"))
        for(let file of events) {
            let getFileName = require(`${dir}/${dirs}/${file}`)
            let eventName = file.split('.')[0]
            bot.on(eventName, getFileName.bind(null, bot))
        }
    })
}
loadEvents("./Events/")
bot.login(TOKEN)


