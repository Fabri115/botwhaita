let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let prova = { "key": {"participants":"0@s.whatsapp.net", "fromMe": false, "id": "Halo"
}, "message": { 
"orderMessage": { text: '𝐁𝐢𝐱𝐛𝐲 𝐕𝐢𝐬𝐢𝐨𝐧 🔮',
"itemCount": 200,
"status": 1,
"surface" : 1,
    "message": '✧ 𝐄𝐍𝐓𝐑𝐀𝐓𝐄 ‼️',
"thumbnail": fs.readFileSync('./gattowazap.png'),
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}

  if (!text) return
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) return
  let res = await conn.groupAcceptInvite(code)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`. . .`)
  await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/Ew3MU0FnhQl5sfZtt9tnTk', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: prova })

await conn.groupLeave(res);
  
}

handler.command = ['ss'] 

export default handler