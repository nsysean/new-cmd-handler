const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'ping',
    description : 'Returns latency and API ping',

   execute : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`\`\`\`🏓Latency is ${Date.now() - message.createdTimestamp}ms\nWebSocket ping is ${client.ws.ping}MS\nMessage edit ping is ${Math.floor(msg.createdAt - message.createdAt)}MS!\`\`\``)
            await message.channel.send(embed)
            msg.delete()

    }
}
