let handler = m => m
handler.all = async function (m) {
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === false)
throw ''
if (/^drama$/i.test(m.text)) {
let audio = './Media/Audio/Drama.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '5', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^fail|figura di merda$/i.test(m.text)) {
let audio = './Media/Audio/Fallimento.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '3', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^game over$/i.test(m.text)) {
let audio = './Media/Audio/Perdita.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '3', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^rutto$/i.test(m.text)) {
let audio = './Media/Audio/Rutto.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '3', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^tg5|telegiornale$/i.test(m.text)) {
let audio = './Media/Audio/Telegiornale.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '15', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^timida$/i.test(m.text)) {
let audio = './Media/Audio/Sica1.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '3', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^ma che fai|che fai|che fai?$/i.test(m.text)) {
let audio = './Media/Audio/Sica2.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '3', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^doh$/i.test(m.text)) {
let audio = './Media/Audio/Doh.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '5', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^mitico$/i.test(m.text)) {
let audio = './Media/Audio/Mitico.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '1', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^fanculo|vaffanculo|ma vaffanculo$/i.test(m.text)) {
let audio = './Media/Audio/Vaffanculo.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '2', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^dai cazzo$/i.test(m.text)) {
let audio = './Media/Audio/Cazzo.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '1', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^che cazzo dici$/i.test(m.text)) {
let audio = './Media/Audio/Dici.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '1', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^dica$/i.test(m.text)) {
let audio = './Media/Audio/Dica.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '1', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^ti devi spaventare$/i.test(m.text)) {
let audio = './Media/Audio/Spaventare.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '4', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^i nani|nani$/i.test(m.text)) {
let audio = './Media/Audio/Nani.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '10', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^un pollo|pollo$/i.test(m.text)) {
let audio = './Media/Audio/Pollo.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '4', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^renzi$/i.test(m.text)) {
let audio = './Media/Audio/Renzi.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '8', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^mosconi$/i.test(m.text)) {
let audio = './Media/Audio/Mosconi.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '9', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^io pago$/i.test(m.text)) {
let audio = './Media/Audio/Pago.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '2', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^maccio capatonda|capatonda$/i.test(m.text)) {
let audio = './Media/Audio/Capatonda.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '8', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^sta senza pensieri|senza pensieri$/i.test(m.text)) {
let audio = './Media/Audio/Pensieri.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '1', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^rosario muniz$/i.test(m.text)) {
let audio = './Media/Audio/Muniz.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '5', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^viva la merda|merda$/i.test(m.text)) {
let audio = './Media/Audio/Merda.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '4', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^frocio$/i.test(m.text)) {
let audio = './Media/Audio/Frocio.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '2', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^monella|sei una monella$/i.test(m.text)) {
let audio = './Media/Audio/Monella.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '1', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^ma che mollo|mollo$/i.test(m.text)) {
let audio = './Media/Audio/Mollo.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '10', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^soddisfazione$/i.test(m.text)) {
let audio = './Media/Audio/Soddisfazione.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '7', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^92 min di applausi|applausi$/i.test(m.text)) {
let audio = './Media/Audio/Applausi.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '26', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^mio figlio poteva morire$/i.test(m.text)) {
let audio = './Media/Audio/Morire.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '1', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^dio cancaro|cancaro$/i.test(m.text)) {
let audio = './Media/Audio/Cancaro.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '7', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
if (/^sono giapponese|giapponese$/i.test(m.text)) {
let audio = './Media/Audio/Giapponese.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, {audio: {url: audio}, seconds: '5', ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`}, {quoted: m})
}
}
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}