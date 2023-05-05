import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) return
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '𝐄𝐜𝐜𝐨 𝐚 𝐭𝐞', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
export default handler
