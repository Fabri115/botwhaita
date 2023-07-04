let handler = async (m, {
conn, text
}) => {
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === false)
throw ''
let menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
if (!menzione) throw 'Chi vuoi minacciare?'
m.reply(`@${menzione.split`@`[0]} ${pickRandom(['spaco botilia e ti amazo familia','ti farò guardare Milley Cyrus 24/7','ti infilo una mano in culo, ti sfilo la spina dorsale e la uso per frustarti','ti do un calcio in culo così forte che rimane dentro la scarpa','ti inculo con sabbia, sale, e cocci di vetro','ti do mezza ora di schiaffi in cinque minuti','ti faccio inculare dai negri sordi, così quanno dici basta non ti sentono','ti smonto e do fuoco alle istruzioni','ti metto un dito in bocca, uno nel culo e ti sciaqquo come una damigiana','ti do un calcio che ti mando le palle a far salotto con le tonsille','ti infilo un bastone nel culo e ti sventolo come na bandiera','ti piglio per le orecchie e ti scarto come una golia','ti farò sentire Justin Bieber 24/7','ti stacco le braccia e le uso per menarti','ti faccio due occhi neri che se te metti a masticare il bambù il WWF te protegge'])}`, null, {
mentions: [menzione]
})
}
handler.customPrefix = /minaccia/i
handler.command = new RegExp
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}