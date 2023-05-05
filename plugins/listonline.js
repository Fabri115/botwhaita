let handler =   
 async (m, {conn,args,
      client,id
   }) => {
      let online = [...Object.keys(online[m.chat])]
      client.reply(m.chat, online.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n'), m)
conn.reply
   }
   
  
handler.help = ['here','listonline']
handler.tags = ['group']
handler.command = /^(onl)$/i
export default handler