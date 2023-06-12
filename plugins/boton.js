import fs from 'fs'
function handler(m, { conn }) {
let text = `sesso 🎶sesso 🎶sesso 🎶sesso Amnesia Bot si sta avviando, se vedete che fa cazzate non toglietelo brutti froci perchè si sta aggiornando Sesso🎶 sesso 🎶sesso🎶 sesso`.trim()   
conn.reply(m.chat, text, m, {
})
}
handler.command = /^(boton)/i
export default handler