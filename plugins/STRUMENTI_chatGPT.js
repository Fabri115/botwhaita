import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix , command }) => {
if (!text) return
try {

let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=059cd524890a2bbb5d6edb46&text=${text}&user`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
return
}}
handler.command = /^(daniela)$/i
export default handler
