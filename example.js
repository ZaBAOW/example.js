var bot = new Eris("MzYzNjk1OTY2ODI3NzA4NDM4.DLFDVg.NdwAuP6aZslSpGDG3Z5HAAuD3Go");
bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
});
bot.connect();