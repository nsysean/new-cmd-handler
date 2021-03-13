const {Collection, Client, Discord} = require('discord.js')
const client = new Client
const config = require("./config.json")
let prefix = (config.prefix)
const fs = require("fs")
module.exports = client;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
client.on('ready', () => {
client.user.setActivity(`to ${prefix}help`, { type: 'LISTENING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
client.user.setStatus('idle')
console.log(`${client.user.tag} ✅`)
})
client.on('message', message => {
	
	  if(!message.content.startsWith(prefix)) return;
	  const args = message.content.slice(prefix.length).trim().split(' ');
		console.log(args)
    const cmd = args.shift().toLowerCase();
    let command = client.commands.get(cmd)
		 if(!command)
    command = client.commands.get(client.aliases.get(cmd))
  
 if(command){
try {
 command.execute(client, message, args)
} catch (error) {
  console.error(error);
}}
		if(!command)message.channel.send("Couldn't find that command, to get my commands, type !help :\)")
	
})
client.login(config.token)
const express = require("express")
    const app = express();
    const port = 2000;//should be 3000 || 3001; lol
    app.get("/", (req, res) => {
        //res.status(200).sendFile(path.join(__dirname, "..", "pages", "main.html"))
				res.send('Hello world')
    })
    app.listen(port)