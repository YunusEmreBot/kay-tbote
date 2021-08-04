
//bu kısımlara dokunma !
//bu kısımlara dokunma !
//bu kısımlara dokunma !

// Komut (.e <@etiket,ID> İsim Yaş) Şeklinde Çalışır

const Discord = require('discord.js');
const db = require('quick.db')
const config = require('../config.json')

module.exports = {
    kod: "e",
    async run (client, message, args){
        let embed = new Discord.MessageEmbed().setColor(`BLUE`).setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}));
        if(!message.member.roles.cache.has(config.yetkili)&& !message.member.hasPermission("ADMINISTRATOR"))return message.channel.send(embed.setDescription(`Yeterli yetkiniz yok`));
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if (!member) return message.channel.send(embed.setDescription(`Lütfen Bir kullanıcı belirt!`)); 
      if(config.man.some(xd => member.roles.cache.has(xd))) return message.channel.send(embed.setDescription('Kullanıcı Zaten Sunucuda Kayıtlı'));
      let name = args[1]
        let age = Number(args[2])
        if(!name || !age) return message.channel.send(embed.setDescription(`Bir isim ya da yaş belirtmelisin!`))        
        const ad = `${name} | ${age}`;
       await member.setNickname(ad)
       await member.roles.add(config.man);
       await member.roles.remove(config.kayıtsız);
        let toplamkayıt = db.get(`toplamkayıt_${message.author.id}`)
        let toplamerkekkayıt = db.get(`toplamerkekkayıt_${message.author.id}`)
        if(!toplamkayıt){
            message.channel.send(`https://gifimage.net/wp-content/uploads/2018/04/l%C3%83%C2%BCtfen-bekleyiniz-gif-9.gif`).then(x => x.edit(embed.setDescription(`${member} İsimli kullanıcı başarıyla <@&840313975337254956>,<@&845396080690069545>,<@&845396342759227405> rolleriyle içeri giriş yaptı herkes ona merhaba desin.`))({timeout: 3000}))  
            
            db.set(`toplamkayıt_${message.author.id}`,1)
            db.set(`toplamerkekkayıt_${message.author.id}`, +1)
        }
        
        else {
            message.channel.send(`https://gifimage.net/wp-content/uploads/2018/04/l%C3%83%C2%BCtfen-bekleyiniz-gif-9.gif`) .then(x => x.delete({timeout: 3000}) && message.channel.send(embed.setDescription(`${member} İsimli kullanıcı başarıyla <@&840313975337254956>,<@&845396080690069545>,<@&845396342759227405> rolleriyle içeri giriş yaptı herkes ona merhaba desin.`)))
            db.add(`toplamkayıt_${message.author.id}`, +1)
            db.add(`toplamerkekkayıt_${message.author.id}`, +1)

            //bu kısımlara dokunma !
            //bu kısımlara dokunma !
            //bu kısımlara dokunma !



            
        }

    }
}