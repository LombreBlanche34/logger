const dsicord = require("discord.js")
const config = require("./config.json")
const client = new dsicord.Client()

client.on("ready", ready => {
    console.log("pret !")
    client.user.setStatus("invisible")
});

client.on("message", async message => {
    let args = message.content.trim().split(/ + /g);

    if (message.guild.id != "710509847543808183") return

    if (message.channel.id === "710509847543808187") { // général
        var embedGeneral = new dsicord.RichEmbed()
            .setDescription(message.author.username + " : " + message.content)
            .setThumbnail(message.author.avatarURL)

        client.guilds.get("710509987905929469").channels.find(x => x.id === "710509988807704880").send(embedGeneral)
    }

    if (message.channel.id === "710512242575147019") { // musique
        var embedMusique = new dsicord.RichEmbed()
            .setDescription(message.author.username + " : " + message.content)
            .setThumbnail(message.author.avatarURL)

        client.guilds.get("710509987905929469").channels.find(x => x.id === "710518519644815424").send(embedMusique)
    }

     if (message.channel.id === "710512430811447366") { // question reponse
         var embedQuestion = new dsicord.RichEmbed()
             .setDescription(message.author.username + " : " + message.content)
             .setThumbnail(message.author.avatarURL)

         client.guilds.get("710509987905929469").channels.find(x => x.id === "710518904845500427").send(embedQuestion)
     }

})

client.login(config.token)