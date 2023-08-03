const Discord = require('discord.js');
const client = new Discord.Client();


const token = 'Your Bot Token'; // your bot token


const botspam = [
  'Spam',
  'Spam',
  'Spam',
  'Spam',
  // Add more words for spam here
];

// time for sending spam
const timeInterval = 1 * 1 * 200;

// Channel where you can run bot for spam , just type !start
const commandChannelID = 'Channel id for !start command';

let sendingEnabled = false;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Bot is ready!`);
  console.log(`Code by 约 - Wick`);
});

client.on('message', (message) => {
  if (message.content === '!start' && message.channel.id === commandChannelID) {
    sendingEnabled = !sendingEnabled;
    message.channel.send(sendingEnabled ? 'Spam started' : 'Spam stopped');
  }
});

client.login(token);

function printMessage() {
  if (!sendingEnabled) return;

  const randomSpam = botspam[Math.floor(Math.random() * botspam.length)];
  const channelID = 'Channel id for spam'; // put here channel id where you want bot spamming there

  const channel = client.channels.cache.get(channelID);
  if (channel) {
    channel.send(randomSpam);
  } else {
    console.error(`Channel with ID ${channelID} not found.`);
  }
}


printMessage();
setInterval(printMessage, timeInterval);