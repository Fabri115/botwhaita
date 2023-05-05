let handler = async(m, { conn, text, participants }) => {
  let chats = global.db.data.chats[m.chat]
  global.db.data.chats[m.chat].blacklist = chats.blacklist || []
  let users = [m?.quoted?.sender]
  if(!users[0]) users = conn.parseMention(text)

  if(users.some(user => participants.find(v => v.id == user)?.admin == "superadmin")) return m.reply("One of the members you tagged is the owner of this group ;-;")
  let args = text.split(" ")
  if(args[0] == "add") {
    if(!users[0]) return m.reply("Mention or reply to the message of the person you want to add to the blacklist")
    let txt = ""
    for(let user of users) {
      if(user.endsWith("@s.whatsapp.net")) {
        if(chats.blacklist.includes(user)) txt += `can\'t add @${user.split("@")[0]} because it\'s already in blacklist\n`
        else {
          global.db.data.chats[m.chat].blacklist.push(user)
          txt += `successfully added @${user.split("@")[0]} to blacklist\n`
        }
      }
    }
    m.reply(txt, null, { mentions: users })
  } else if(args[0] == "del" || args[0] == "delete") {
    if(!users[0]) return m.reply("Mention or reply to the message of the person who wants to be removed from the blacklist")
    let txt = ""
    for(let user of users) {
      if(user.endsWith("@s.whatsapp.net")) {
        if(!chats.blacklist.includes(user)) txt += `can\'t remove ${user.split("@")[0]} from blacklist because he is not blacklisted\n`
        else {
          global.db.data.chats[m.chat].blacklist = del(chats, user)
          txt += `successfully removed @${user.split("@")[0]} from blacklist\n`
        }
      }
    }
    m.reply(txt, null, { mentions: users })
  } else if(args[0] == "list") {
    let txt = "-".repeat(5) + "BlackList" + "-".repeat(5)
    txt += "\n"
    if(!chats.blacklist.length) txt += "There\'s nothing here"
    else chats.blacklist.forEach((v,i) => txt += String(Number(i) + 1).padStart(2, "0") + ". @" + v.split("@")[0] + "\n")
    txt = txt.trim()
    m.reply(txt, null, { mentions: [conn.parseMention(txt)] })
  } else {
    let txt = "-".repeat(5) + "BlackList" + "-".repeat(5)
    txt += "\n"
    txt += "List of available commands:"
    txt += "\n"
    txt += "01. add <tag|reply>"
    txt += "\n"
    txt += "02. delete / del <tag|reply>"
    txt += "\n"
    txt += "03. list"
    txt += "\n"
    txt += "\n"
    txt += "\n"
    txt += "Example:"
    txt += "\n"
    txt += "01 :"
    txt += "\n"
    txt += "  .blacklist add @foo @bar"
    txt += "\n"
    txt += "  .blacklist add [reply]"
    txt += "\n"
    txt += "02 :"
    txt += "\n"
    txt += "  .blacklist del @foo @bar"
    txt += "\n"
    txt += ".blacklist del [reply]"
    txt += "\n"
    m.reply(txt)
  }
}
handler.help = ["blacklist"].map(v => v + " @user")
handler.tags = ["group"]
handler.command = /^(blacklist)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler

function del( val) {
  let result = []
  for(let i of val) {
    if(i == val) continue
    else result.push(i)
  }
  return result
}