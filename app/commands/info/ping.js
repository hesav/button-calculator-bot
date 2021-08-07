module.exports = {
  name: "ping",
  category: "ping",
  description: "botun pingini görürsünüz",
  run: async (client, message, args) => {
    message.channel.send(`<a:B_Yukleniyor:867736470641836053>  Pingim: ${client.ws.ping}MS`);
  }
};
