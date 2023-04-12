import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
try {
const buttons = [
{ buttonId: `${usedPrefix}1 ${command}`, buttonText: { displayText: 'attiva' }, type: 1 },
{ buttonId: `${usedPrefix}0 ${command}`, buttonText: { displayText: 'disattiva' }, type: 2 }, ]
let texto1 = `*OPZIONE* ⭔ ${command}`
const buttonMessage = { text: texto1, footer: '✦S҉U҉P҉E҉R҉F҉A҉B҉R҉I҉B҉O҉T✦', buttons: buttons, headerType: 4 }
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
return}}
handler.help = ['menu'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^benvenuto|antilink|antilinkhard|antispam|detect|antielimina|antiviewonce|antitrava|antipaki|modoadmin|autosticker|restrict|antiprivato|sologruppo|autoread$/i
export default handler