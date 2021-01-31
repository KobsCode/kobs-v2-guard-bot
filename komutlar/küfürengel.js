const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**Küfür engel** komutunu kullanmak için **__SUNUCUYU YÖNET__** Yetkisine sahip olman gerkeli")
  
  
  if (!args[0]){
    message.channel.send("Küfür Engel için Doğru Kullanım:``!küfür-engelaç / !küfür-engel kapat `` :hammer: ")
  }
  if(args[0] === "aç") {
    
    message.channel.send("**Küfür engel başarıyla açıldı :hammer: **")
    
    db.set(`küfür_${message.guild.id}`, "açık")
  }
    if(args[0] ===   "kapat") {
      
      message.channel.send("**Küfür engel başarıyla kapatıldı :hammer: **")
      
      db.set(`küfür_${message.guild.id}`, "kapalı")
      
    }
  
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "küfür-engel",
  description: "Küfür engel açar yada kapatır.",
  usage: "küfür-engel"
}