module.exports = {
    name: 'ping',
    description: 'Ini adalah command ping',
    execute(message) {
        message.channel.bulkDelete(1);
        message.reply('pong !');
    }
}