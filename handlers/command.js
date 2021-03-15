const {readdirSync} = require('fs');
var Table = require('cli-table');
var table = new Table({
    head: ['Command', 'Status']
  , colWidths: [15, 10]
});
module.exports= (client) => {
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name){
                client.commands.set(pull.name, pull);
              table.push(
    [pull.name, '✅']
 
);
}else{table.push[file.name, '❌']}if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))}});
 console.log(table.toString());

}
