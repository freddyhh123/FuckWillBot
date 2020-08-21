const Discord = require('discord.js');
const client = new Discord.Client();
const userID = "215913035318034437"
const insulter = require('insult');
let IDs = ['189070288028172289', '400971256230576128', '490304406697279499']

client.once('ready',()=> {
    console.log('Oh fuck here we go again');
});

client.login('')

client.on('message', message => {
    if (message.content === 'pog') {
        message.channel.send('STFU');
    }
    if (IDs.indexOf(message.author.id) > -1) {
        message.channel.send(insulter.Insult());
    }
});