const { MessageEmbed } = require('discord.js');
const botInfo = require('./botInfo.json')
module.exports = {
    name: 'info',
    description: 'Ini adalah command info',
    execute(message, args) {
        if (!args[1]) {
            const infoEmbed = new MessageEmbed()
                .setTitle('BOT Information Comms')
                .setDescription('Masukkan perintah : ')
                .addField('author', 'BOT Author Information')
                .addField('version', 'BOT Version')
                .addField('bot', 'All Information About BOT')
                .setFooter('NEO-BOT ' + botInfo.version);
            message.channel.send(infoEmbed);
        } else {
            if (args[1] === 'author') {
                message.channel.send(botInfo.author);
            } else if (args[1] === 'versi') {
                message.channel.send('Version : ' + botInfo.version);
            } else if (args[1] === 'bot') {
                const botInfoEmbed = new MessageEmbed()
                    .setTitle('BOT Information')
                    .setDescription('NEO-BOT siap melayani member di dalam server ini.')
                    .addField('Author', botInfo.author, true)
                    .addField('Version', botInfo.version, true)
                    .setColor('#03fcd7')
                    .setFooter('NEO-BOT ' + botInfo.version);
                message.channel.send(botInfoEmbed);
            } else {
                message.channel.send('Command yang dimasukkan tidak terdaftar !');
            }
        }
    }
}