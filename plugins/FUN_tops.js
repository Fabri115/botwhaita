import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, participants }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if (command == 'topgays') {
let vn = './media/gay2.mp3'
let top = `🌈𝐓𝐨𝐩 𝟏𝟎 𝐋𝐆𝐁𝐓🌈
    
1. ${user(a)} ${Math.floor (100)}%
2. ${user(b)} ${Math.floor (93)}%
3. ${user(c)} ${Math.floor (85)}%
4. ${user(d)} ${Math.floor (71)}%
5. ${user(e)} ${Math.floor (62)}%
6. ${user(f)} ${Math.floor (55)}%
7. ${user(g)} ${Math.floor (42)}%
8. ${user(h)} ${Math.floor (33)}%
9. ${user(i)} ${Math.floor (27)}%
10. ${user(j)} ${Math.floor (11)}%`
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
conn.sendMessage(m.chat, { quoted: m })    
//conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
    
if (command == 'topscimmie') {
let top =    `𝐓𝐨𝐩 𝟏𝟎 *Scimmia*    
    
1. ${user(a)} ${Math.floor (100)}%
2. ${user(b)} ${Math.floor (93)}%
3. ${user(c)} ${Math.floor (85)}%
4. ${user(d)} ${Math.floor (71)}%
5. ${user(e)} ${Math.floor (62)}%
6. ${user(f)} ${Math.floor (55)}%
7. ${user(g)} ${Math.floor (42)}%
8. ${user(h)} ${Math.floor (33)}%
9. ${user(i)} ${Math.floor (27)}%
10. ${user(j)} ${Math.floor (11)}%`
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
conn.sendMessage(m.chat, { quoted: m })        
//conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}}
handler.help = handler.command = ['topgays','topscimmie']
handler.tags = ['games']
handler.group = true
export default handler  
