const { MessageEmbed } = require('discord.js');
const botInfo = require('./botInfo.json')
module.exports = {
    name: 'help',
    description: 'Ini adalah command help',
    execute(message) {
        const helpEmbed = new MessageEmbed()
            .setTitle('BOT Commands')
            .setDescription('NEO-BOT dibuat oleh seorang mahasiswa jurusan IT yang belum sama sekali mempelajari Javascript :)')
            .addField('PREFIX', botInfo.prefix)
            .addField('VERSION : ', botInfo.version)
            .addField('Help', 'BOT Commands')
            .addField('About Author', 'github.com/Neolinedev')
            .addField('Clear <count>', 'Clear message')
            .setColor('#03fcd7')
            .setURL('https://github.com/Neolinedev')
            .setFooter('NEO-BOT ' + botInfo.version);
        message.channel.send(helpEmbed);
    }
}