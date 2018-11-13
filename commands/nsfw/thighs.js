const Command = require('../../struct/custom/Command');
const fetch = require('snekfetch');
const Discord = require('discord.js');
const errors = require('../../assets/json/errors');
const storethighs = "https://nekobot.xyz/api/image?type=thigh";

class thighcmd extends Command {
    constructor() {
        super('thighs', {
            aliases: ['thighs','thigh'],
            channelRestriction: 'guild',
          	category:'NSFW',
			      description:{
			        content:"Posts random thigh pictures | NSFW only",
			        usage:['r!thighs']
        }
        });
    }

    exec(message) {

    //var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
          fetch.get(storethighs).then(r => {
              let body = r.body;
              let thighurl = body.message;
              const embed = this.client.util.embed()
               .setTitle("Thighs~")
               .setImage(thighurl)
               .setColor("#363942");
              message.channel.send(embed);
          });
        }else{
          fetch.get(storethighs).then(r => {
              let body = r.body;
              let thighurl = body.message;
              const embed = this.client.util.embed()
               .setTitle("Thighs~")
               .setImage(thighurl)
               .setColor("#363942");
              message.channel.send(embed);

              console.log("Thigh CMD Used in: " + message.guild.name);
          });
        }
    }
}

module.exports = thighcmd;
