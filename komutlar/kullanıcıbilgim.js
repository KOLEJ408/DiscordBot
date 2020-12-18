const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("�evrimi�i") : (Durum == "offline" ? ("�evrimd���") : (Durum == "idle" ? ("Bo�ta") : (Durum == "dnd" ? ("Rahats�z Etmeyin") : ("Bilinmiyor/bulunamad�.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Ad:', message.author.username + '#' + message.author.discriminator)
      .addField('ID:', message.author.id)
      .addField('Kay�t tarihi:', message.author.createdAt)
      .addField('Durum:', durm)
      .addField('�u an oynad��� oyun:', message.author.presence.game ? message.author.presence.game.name : '�u an oyun oynam�yor')
      .addField('BOT mu?', message.author.bot ? '\n Evet' : 'Hay�r')
      console.log("!kullan�c�bilgim komutu " + message.author.username + " taraf�ndan kullan�ld�.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullan�c�', 'kullan�c� bilgim', 'kbilgim'],
  permLevel: 0
};

exports.help = {
  name: 'kullan�c�bilgim',
  description: 'Komutu kullanan ki�i hakk�nda bilgi verir.',
  usage: 'kullan�c�bilgim'
};
