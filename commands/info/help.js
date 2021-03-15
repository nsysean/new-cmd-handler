const { MessageEmbed } = require('discord.js')
const { readdirSync } = require("fs")

module.exports = {
    name : 'help',
		aliases: ['h'],
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
          `\`\`\`Use \`${prefix}help\` followed by a command name to get more additional information on a category. For example: \`${prefix}help help\`.\`\`\``
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
      return message.inlineReply(embed);
   
})
return console.log(" ")
}
 else{
	 
const cmd = client.commands.get(args.join(" "))
if(client.categories.includes(args.join(" "))){
	const commands = readdirSync(`./commands/${args.join(" ")}/`).filter((file) =>
          file.endsWith(".js")
        );

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
return message.inlineReply(embed)
}
if(cmd){
	const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setDescription(`Name: \`${cmd.name}\`\nDescription: \`${cmd.description||("No description owo")}\`\nAliases: \`${cmd.aliases || ("No aliases")}\`\nUsage: \`${cmd.usage || (`${prefix}${cmd.name}`)}\``)
return message.inlineReply(embed)}
 else{

const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setTitle(`\`Can't find the command: ${args.join(" ")} :(\``)
return message.inlineReply(embed)
}}



 
    }
}
