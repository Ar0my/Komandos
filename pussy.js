const Discord = require('discord.js')

exports.run = async (client, message, args) => {
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
if (!message.channel.nsfw){
return message.channel.send(new Discord.MessageEmbed().setTitle("NSFW").setDescription("NSFW komutları NSFW olmayan kanalda çalışmaz."))
}
const image = await nsfw.pgif();
const embed = new Discord.MessageEmbed()
    .setTitle(`pgif`)
    .setColor("GREEN")
    .setImage(image);
message.channel.send(embed);


}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nsfw-gif'],
    permLevel: 0
}

exports.help = {
    name: 'pgif',
    description: 'hentai göt atar.',
    usage: 'hentaigöt'
}