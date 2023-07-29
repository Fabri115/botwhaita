let handler = async (m, { conn, command }) => {
let str = `
💜 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘼𝘾𝘾𝙊𝙐𝙉𝙏𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *GITHUB*
https://github.com/fabriziodee
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *INSTAGRAM*
https://www.instagram.com/_fabri115/
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *TIKTOK*
https://www.tiktok.com/@3r1z10
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*If you have doubts, suggestions or questions just write on Instagram.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, 'https://github.com/', '𝘽𝙤𝙩-𝙈𝘿', null, null, [
['x'],
['c'],
['v']
], m,)}

handler.command = /^acc$/i
export default handler
