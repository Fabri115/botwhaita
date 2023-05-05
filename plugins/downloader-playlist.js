import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) return
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['𝐕𝐢𝐝𝐞𝐨 🎥', `${usedPrefix}ytmp4 ${v.title}`],
['𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜 🎥', `${usedPrefix}ytmp4doc`, `${v.title}`],    
['𝐀𝐮𝐝𝐢𝐨 🎧', `${usedPrefix}ytmp3 ${v.title}`],
['𝐀𝐮𝐝𝐢𝐨𝐝𝐨𝐜 🎧', `${usedPrefix}ytmp3doc ${v.title}`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, '𝐌𝐮𝐬𝐢𝐜𝐚 𝐭𝐫𝐨𝐯𝐚𝐭𝐚', `${args.join(" ")}`, '𝐬𝐞𝐥𝐞𝐳𝐢𝐨𝐧𝐚 𝐪𝐮𝐢 𝐬𝐨𝐭𝐭𝐨', '𝐫𝐢𝐬𝐮𝐥𝐭𝐚𝐭𝐢', listSections, m)
} catch {
try {     
let get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result 
const listSerch = []
const listSerch2 = []
const listSerch3 = []
const listSerch4 = []
let teskd = `Musica per: ${args.join(" ")}`
const sections = [{ title: `AUDIO`, rows: listSerch }, { title: `VIDEO`, rows: listSerch2 }, { title: `DOCUMENTO MP3`, rows: listSerch3 }, { title: `DOCUMENTO MP4`, rows: listSerch4 }]
for (let x of get_result2) {
listSerch.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3 http://www.youtube.com/watch?v=${x.videoId}`})
listSerch2.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4 http://www.youtube.com/watch?v=${x.videoId}`})
listSerch3.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3doc http://www.youtube.com/watch?v=${x.videoId}`})
listSerch4.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4doc http://www.youtube.com/watch?v=${x.videoId}`})}
const listMessage = { text: teskd, footer: 'scegli una opzione', title: "Musica trovata", buttonText: "risultati", sections }
conn.sendMessage(m.chat, listMessage, { quoted: m })    
} catch {    
return
}}}
handler.command = /^playlist|playlist2$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return
}}
