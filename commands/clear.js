module.exports = {
    name: 'clear',
    description: 'Ini adalah command clear.',
    execute(message, args) {
        var role = message.member.roles.cache.find(r => r.name === 'Administrator');
        if (role) {
            if (!args[1]) {
                return message.reply('Masukkan jumlah chat yang ingin dihapus.');
            } else {
                message.channel.bulkDelete(args[1]);
            }
        } else {
            message.reply("You're not Administrator,can't use this commands !");
        }
    }
}