import fs from 'fs'
function handler(m, { conn }) {
let text = `sesso 🎶sesso 🎶sesso 🎶sesso amnesia bot sta chiudendo, preghiamo a tutti di non usare più comandi. Sesso🎶 sesso 🎶sesso🎶 sesso`.trim()   
conn.reply(m.chat, text, m, {
})
}
handler.command = /^(botoff)/i
export default handler