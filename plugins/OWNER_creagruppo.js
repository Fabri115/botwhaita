let handler  = async (m, { conn, text }) => {
   let [namagc, partici] = text.split('|')
   let name = conn.getName(conn.user.jid)
let owner1 = `3`
let owner2 = `393285484506`
let owner3 = `393241526425`
   const petik = '```'
if (!partici) partici = `@${owner1.split('@')[0]}`
   if (!namagc) namagc = text
  let ha = await conn.groupCreate(namagc, conn.parseMention(partici))
  }
handler.help = ['buatgrup']
handler.tags = ['owner', 'premium']
handler.command = /^(creagruppo)$/i
handler.premium = true
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.fail = null

export default handler