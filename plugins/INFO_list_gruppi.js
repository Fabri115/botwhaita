let handler = async (m, { conn, participants }) => { 
  
    let now = new Date() * 1 
    let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0]) 
let txt = '' 
 //let tolgp = `${participants.lenght}` 

for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats))  
txt += `${await conn.getName(jid)}\n${db.data.chats[jid] == undefined ? db.data.chats[jid] = { 
 // isantiLink2: false, 
  messaggi: ''
} : db.data.chats[jid].messaggi} *messaggi totali*\n\n-------------------------
`
m.reply(`*📑 Lista grupos:*
*🚀 Gruppi Totali:* ${groups.length} 

${txt} 
-------------------------
`.trim()) 

} 

handler.help = ['grouplist'] 
handler.tags = ['group'] 

handler.command = /^(group(s|list)|(s|list)|gig)$/i 


export default handler

function msToDate(ms) { 
temp = ms 
days = Math.floor(ms / (24 * 60 * 60 * 1000)); 
daysms = ms % (24 * 60 * 60 * 1000); 
hours = Math.floor((daysms) / (60 * 60 * 1000)); 
hoursms = ms % (60 * 60 * 1000); 
minutes = Math.floor((hoursms) / (60 * 1000)); 
minutesms = ms % (60 * 1000); 
sec = Math.floor((minutesms) / (1000)); 
return days + " hari " + hours + " jam " + minutes + " menit"; 
// +minutes+":"+sec; 
}
