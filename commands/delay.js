module.exports = {
    name: 'delay',
    description: 'Ini adalah command delay',
    execute(message) {
        setTimeout(() => {
            message.channel.send('Delay testing..');
        }, 5000)
    }
}