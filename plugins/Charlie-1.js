let handler  = async (m, { conn }) => { 

   conn.reply(m.chat,`*╭══• ೋ•✧๑🧿๑✧•ೋ •══╮* 
                   𝐒𝐚𝐦𝐚𝐞𝐥 𝐃𝐢𝐜𝐞\n*“${pickRandom(global.charlie)}”*\n*╰══• ೋ•✧๑🧿๑✧•ೋ •══╯*   
${author} 
   `, m) 
 } 

 handler.help = ['ᴄʜᴀʀʟɪᴇ'] 

 handler.tags = ['juegos'] 

 handler.command = /^(Say)$/i 

 handler.owner = false 

 handler.mods = false 

 handler.premium = false 

 handler.group = false  

 handler.private = false 

  

 handler.admin = false 

 handler.botAdmin = false 

  

 handler.fail = null 

  

 export        default handler 

  

 function pickRandom(list) { 

   return list[Math.floor(list.length * Math.random())] 

 } 

  

 // charlie charlie by odin el fucker kkkkkkkkkk 

 global.charlie = [ 

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No" 

 ] 
