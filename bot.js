const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("595911506818891787")
setInterval(function() {
channel.send(`Õ‰ﬂ”„ «Ì Õœ Ìﬂ”„ ·ﬂ”„‰«`);
}, 30)
})

client.login(process.env.BOT_TOKEN);