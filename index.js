
require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
const keywords = ["guys", "everyone"];

client.on('ready', () => {
  console.log('The bot is online!');
});

function containsWordFromArray(inputString, wordArray) {
  for (let i = 0; i < wordArray.length; i++) {
    if (inputString.includes(wordArray[i])) {
      return true;
    }
  }
  return false;
}

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (containsWordFromArray(message.content, keywords)) {
    message.reply("Please don't use the word 'guys' or 'everyone'! Use 'folks' or 'y'all' instead!");
  }
});

client.login(process.env.TOKEN);


