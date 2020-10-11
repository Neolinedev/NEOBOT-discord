module.exports = {
    name: 'cekAdmin',
    description: 'Ini adalah command untuk mengecek apakah yang melakukan command admin/bukan',
    execute(message) {
        var role = message.member.roles.cache.find(r => r.name === 'Administrator')
        if (role) {
            message.channel.send('Hello Admin :)');
        } else {
            message.channel.send("You're not Administrator !")
        }
    }
}