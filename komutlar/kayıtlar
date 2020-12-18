const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (client, message, args) => {
  let csm;
  let csm1 = message.mentions.members.first();
  let csm2 = message.guild.members.get(args[0]);
  if (csm1) {
    csm = csm1;
  }
  if (csm2) {
    csm = csm2;
  }
  if (!csm) {
    csm = message.member;
  }

  let data = db.get(`csgiriş.${csm.user.id}_${message.guild.id}`);
  if (data) {
    let cse = new Discord.RichEmbed()
      .setTitle("Kayıt Bilgisi")
      .setThumbnail(csm.user.avatarURL)
      .setColor("BLUE")
      .addField("Giriş Sayısı", `\`${data}\``)
      .setTimestamp()
      .setFooter("Made By. Code Share");
    message.channel.send(cse);
  } else {
    message.reply("**Kayıtlı Bir Data Bulunamadı!**");
  }
};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "kayıtlar"
};
