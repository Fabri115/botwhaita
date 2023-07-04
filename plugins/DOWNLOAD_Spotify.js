import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text)
throw `Inserisci con il comando, il nome della canzone da cercare! esempio`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=8e66d0934cf741bfd2182c16&query=${text}`)
let json = await res.json()
let {link} = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=8e66d0934cf741bfd2182c16&url=${link}`)
let json2 = await res2.json()
let {title, artists} = json2.result
m.reply(`🎵 ${title}\n\n 🗣 ${artists}\n\n⏳️ carico..`)
let aa =
conn.sendMessage(m.chat, {
audio: {
url: json2.result.link
}, ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`
}, {
quoted: m
})
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'Audio.mp3', null, m, false, {
mimetype: 'audio/mp4'
})}
catch {
throw 'Ho riscontrato un errore, assicurati di aver digitato correttamente il nome della canzone o riprova più tardi'
}
return}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^spotify?$/i
export default handler
