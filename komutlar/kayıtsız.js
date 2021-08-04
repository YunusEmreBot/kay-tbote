

//bu kısımlara dokunma !
//bu kısımlara dokunma !
//bu kısımlara dokunma !

// Komut (.kayıtsız <@etiket,ID> İsim Yaş) Şeklinde Çalışır

const Discord = require('discord.js');
const db = require('quick.db')
const config = require('../config.json')

module.exports = {
    kod: "kayıtsız",
    async run (client, message, args){
        let embed = new Discord.MessageEmbed().setColor(`GREEN`).setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}));
        if(!message.member.roles.cache.has(config.yetkili)&& !message.member.hasPermission("ADMINISTRATOR"))return message.channel.send(embed.setDescription(`Yeterli yetkin yok`));
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if (!member) return message.channel.send(embed.setDescription(`Lütfen Bir kullanıcı belirt!`));
        if(member.roles.cache.has(config.yetkili)) return message.channel.send(embed.setDescription(`Yetkilileri kayıtsıza atamam`));
        if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embed.setDescription(`Bu kişi sizden üst pozisyonda lütfen başkasını deneyin.`))
        member.roles.set(["840313975337254955"])
        message.channel.send(embed.setDescription(`Kişi başarıyla kayıtsıza atıldı.`))
        message.channel.send(`https://gifimage.net/wp-content/uploads/2018/04/l%C3%83%C2%BCtfen-bekleyiniz-gif-9.gif`)
    }
  }
