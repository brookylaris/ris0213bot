const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Removerole Command", "Usage: r?removerole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`Removerole command`)
  .addField("Descriptio/n:", "Take role from member", true)
  .addField("Usage", "r?removerole [user] [role]", true)
  .addField("Example", "r?removerole @Rage Member")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Larissa needs to give you `manage members` premission to do that!.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);

  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("This user doesn't have that role.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`***I just removed ${rMember.user.username}'s ${gRole.name} role!***`)

  message.delete();

}

module.exports.help = {
  name: "removerole"
}
