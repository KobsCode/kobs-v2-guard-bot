const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const kobscode= new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Kobs`, client.user.avatarURL) 
      .setDescription('**[Youtube](https://youtube.com/ogünsertkobs)**')
      .addField('** Komutlar (5)**', '`ban-limit`, `banlananlar`, `kullanıcı-bilgi`, `ban`, `kilit`')
      .addField('** Komutlar (5)**', '`capslock-engelleme`, `küfür-engel`, `reklam-engel`, `reklamtaraması`, `rol-k`')
      .addField('** Komutlar (4)**', '`unbanall`, `temizle`, `sohbet-kapat`, `sohbet-aç`')
    .setFooter(``, client.user.avatarURL)
    message.channel.send(kobscode).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım Menüsü',
      description: 'bilgi',
};