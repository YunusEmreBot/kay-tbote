
//bu kısımlara dokunma !
//bu kısımlara dokunma !
//bu kısımlara dokunma !

// Komut (.isim <@etiket,ID> İsim Yaş) Şeklinde Çalışır

const Discord = require('discord.js');
const config = require('../config.json')

module.exports = {
    kod: "isim",
    async run (client, message, args){
        let embed = new Discord.MessageEmbed().setColor(`RED`).setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}));
        if(!message.member.roles.cache.has(config.yetkili)&& !message.member.hasPermission("ADMINISTRATOR"))return message.channel.send(embed.setDescription(`Yeterli yetkin yok`));
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if (!member) return message.channel.send(embed.setDescription(`Lütfen Bir kullanıcı belirt!`));
        let name = args[1]
        let age = Number(args[2])
        if(!name || !age) return message.channel.send(embed.setDescription(`Bir isim ya da yaş belirtmelisin!`))        
        const ad = `${name} `;
        member.setNickname(ad)
        message.channel.send(embed.setDescription(`Kişinin adı **${ad}** olarak yenilendi.`))
        message.channel.send(`https://gifimage.net/wp-content/uploads/2018/04/l%C3%83%C2%BCtfen-bekleyiniz-gif-9.gif`)
    }
}

//bu kısımlara dokunma !
//bu kısımlara dokunma !
//bu kısımlara dokunma !