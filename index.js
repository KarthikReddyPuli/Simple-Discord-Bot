
require('dotenv/config');
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
const keywords = ["guys"];
const ileana = ["ileana"]

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

  if (containsWordFromArray(message.content.toLowerCase(), keywords)) {
    message.reply("Please don't use the word 'guys'! Use 'folks' or 'y'all' instead!");
    message.reply("https://tenor.com/view/thatha-agent-thatha-thata-hyderabad-hyderabad-thatha-gif-13271246656811521377");
  }

  if (containsWordFromArray(message.content.toLowerCase(), ileana)) {
    const embed = new EmbedBuilder()
      .setImage(
        "attachment://ileana.jpeg"
      )
      .setTimestamp();

    message.reply({ embeds: [embed], files: ['./images/ileana.jpeg'] });
  }
});

client.login(process.env.TOKEN);


