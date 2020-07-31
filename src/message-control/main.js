const { ipcMain } = require('electron');

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg); // prints "ping"
    if (arg === 'ping') event.reply('asynchronous-reply', 'pong!');
    else event.reply('asynchronous-reply', 'please, send me ping.');
});
