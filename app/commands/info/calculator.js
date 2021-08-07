const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require('discord-buttons');
 const { Calculator } = require('weky')
const {MessageButton} = require('discord-buttons');

module.exports = {
  name: "hesap",

  category: "hesap",
  description: "hesap makinesini çalıştırır",
  usage: ["hesap-makinesi"],
  run: async (client, message, args) => {
    await Calculator(message);
  }
};