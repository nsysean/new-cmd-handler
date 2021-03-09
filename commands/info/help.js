const { MessageEmbed } = require('discord.js')
const { readdirSync } = require("fs")

module.exports = {
    name : 'help',
    description : 'help cmd',

   execute : async(client, message, args) => {

		 var config = require("../../config.json")
      var prefix = config.prefix
		
if(!args[0]){

  let categories = [];
  const fs = require("fs")
const dirt = ("./commands/");
    // list all files in the directory
    
    fs.readdir(dirt, (err, dir) => {
        if (err) {
            throw err;
        }
    
        
        dir.forEach(dir => {
      

        categories.push({
          name: `${dir.toUpperCase()}`,
          value: `\`${prefix}help ${dir.toLowerCase()}\``,
          inline: true,
        });
        console.log(categories)
      });
      const embed = new MessageEmbed()
        .setTitle("Here is my help command")
       
       
        .addFields(categories)
        
     
        .setDescription(
          `Use \`${prefix}help\` followed by a command name to get more additional information on a category. For example: \`${prefix}help info\`.`
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
      return message.channel.send(embed);
   
})
return console.log(" ")
}
 else{
	 

const commands = readdirSync(`./commands/${args.join(" ")}/`)
let command = []
commands.forEach(cmd => {
  let file = require(`../../commands/${args.join(" ")}/${cmd}`);
  command.push({
    name: `**\`${file.name}\`**`,
    value: `\`\`\`${file.description || ("No description")}\`\`\``,
    inline: true
  })


})
console.log(command)


const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setTitle(`${args.join(" ")} commands`)
.addFields(command)
return message.channel.send(embed)}



 
    }
}
