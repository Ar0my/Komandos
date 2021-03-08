const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor('Bu komutu kullanan kullanıcı ' + message.author.tag)
.setDescription(`**[Davet Et](https://discord.com/api/oauth2/authorize?client_id=801088331890950164&permissions=8&scope=bot) | [Sitemiz](https://www.rylan.ml/) | [Destek Sunucusu](https://discord.gg/FAchvKXF9r) | [Youtube](https://www.youtube.com/channel/UCkCb5aCRW_3mEzpcPP18iVw?sub_confirmation=1)**

**__Gecikme Sürem__** **${client.ws.ping}**

**__Kullanıcı Sayısı__** **${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}**

**\`Komutlarım\`**

\`?!yetkili\` ᲼᲼᲼᲼᲼᲼
Yetkili Komutlarını Atar

\`?!botlist-ayar\` ᲼᲼᲼᲼᲼᲼
Botlist Komutlarını Atar

\`?!abone-yardım\` ᲼᲼᲼᲼᲼᲼
Abone Komutlarını Atar

\`?!koruma\` ᲼᲼᲼᲼᲼᲼
Koruma Komutlarını Atar

\`?!sayaç-yardım\` ᲼᲼᲼᲼᲼᲼
Sayaç Komutlarını Atar

\`?!eğlence\` ᲼᲼᲼᲼᲼᲼
Eğlence Komutlarını Atar

\`?!mute-yardım\` ᲼᲼᲼᲼᲼᲼
Mute Komutlarını Atar
`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım2",
  description: 'yardım kodu.',
  usage: 'yardım'
};