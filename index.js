const { Client,
    MessageEmbed,
    Collection } = require('discord.js');
const bot = new Client;

const token = 'INSERT YOUR DISCORD BOT TOKEN HERE.';
var PREFIX = '$';
var version = '1.0.0';

const fs = require('fs');

const commands = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of files) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command)
}

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'test-room')
    const rules = member.guild.channels.cache.find(ch => ch.name === 'rules')
    if (!channel) return;

    if (member.guild.name === 'Bot Test Server') {
        channel.send(`Halo ${member}, Selamat datang di server ini. Baca rules terlebih dahulu di ${rules}`);
    }
})

bot.on('ready', () => {
    console.log('Bot berhasil online !');

    bot.user.setActivity('Online Now.', {
        type: "LISTENING"
    }).catch(console.error);
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');


    switch (args[0]) {
        case 'ping':
            commands.get('ping').execute(message);
            break;

        case 'info':
            commands.get('info').execute(message, args);
            break;

        case 'help':
            commands.get('help').execute(message);
            break;

        case 'clear':
            commands.get('clear').execute(message, args);
            break;

        case 'delay':
            commands.get('delay').execute(message);
            break;

        case 'cooldown':
            commands.get('cooldown').execute(message);
            break;

        case 'cekAdmin':
            commands.get('cekAdmin').execute(message);
            break;
    }
})

bot.login(token);
