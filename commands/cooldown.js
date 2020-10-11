const { Collection } = require("discord.js");
const cooldown = new Collection();

module.exports = {
    name: 'cooldown',
    description: 'Ini adalah command cooldown',
    execute(message) {
        if (cooldown.has(message.author.id)) {
            message.reply('Sabar bosqu..');
        } else {
            message.channel.send('Test Cooldown..');
            cooldown.set(message.author.id);
            setTimeout(() => {
                cooldown.delete(message.author.id);
            }, 1000 * 10)
        }
    }
}