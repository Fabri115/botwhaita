
import fetch from 'node-fetch'
import Spotify from "spotifydl-x"
import fs from 'fs'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] INSERISCI IL NOME DELLA CANZONE DA CERCARE*`
try {
let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
let linkDL = jsonDL.result[0].link
let spty = await spotifydl(linkDL)
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
let randomName = getRandom(".mp3")
const filePath = `./tmp/${randomName}`
fs.writeFileSync(filePath, spty.audio)
let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n┬\n├‣✨ *TITOLO:* ${spty.data.name}\n┴\n┬\n├‣🗣️ *ARTISTA:* ${spty.data.artists}\n┴\n┬\n├‣🌐 *LINK*: ${linkDL}\n┴`
await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', spotifyi, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mpeg", }, { quoted: m })    
} catch {
throw '*[❗𝐈𝐍𝐅𝐎❗] ERRORE RIPROVA PIU TARDI O ASSICURATI DI AVER SCRITTO IL NOME CORRETTAMENTE*'
}}
handler.command = /^(spotify)$/i
export default handler

const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
async function spotifydl(url) {
const res = await spotify.getTrack(url).catch(() => {
return { error: 'Errore nel Download' }})
return { data: res, audio: await spotify.downloadTrack(url) }} 
