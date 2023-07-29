let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) 
if (!m.mentionedJid[0] && !m.quoted) return 
if (command == 'pajero') {
conn.reply(m.chat, `
oko
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'gay') {
conn.reply(m.chat, `
${text} è ${command.replace('how', '')} 🏳️‍🌈 al ${(100).getRandom()}%
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'frocio') {
conn.reply(m.chat, `
${text} è ${command.replace('how', '')} 🏳️‍🌈 al ${(100).getRandom()}%
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'lesbica') {
conn.reply(m.chat, `
${text} è ${command.replace('how', '')} 🏳️‍🌈 al ${(100).getRandom()}%
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'nero') {
conn.reply(m.chat, `
${text} è ⚫ ${command.replace('how', '')} al ${(100).getRandom()}% 
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'nera') {
conn.reply(m.chat, `
${text} è ⚫ ${command.replace('how', '')} al ${(100).getRandom()}%
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'puttana') {
conn.reply(m.chat, `
${text} è al ${(100).getRandom()}% ${command.replace('how', '')} 🔞
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'random') {
conn.reply(m.chat, `
${text} è al ${(100).getRandom()}% ${command.replace('how', '')} 🤡 
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'puttaniere') {
conn.reply(m.chat, `
${text} è al ${(100).getRandom()}% ${command.replace('how', '')} 🔞
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
}
handler.help = ['gay', 'lesbica', 'pajero', 'pajera', 'puto', 'puttana', 'manco', 'manca', 'rata', 'prostituta', 'puttaniere'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^gay|lesbica|frocio|random|puto|puttana|nero|nera|rata|prostituta|puttaniere/i
export default handler
