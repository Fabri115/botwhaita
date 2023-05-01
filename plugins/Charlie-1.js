let handler  = async (m, { conn }) => { 
   conn.reply(m.chat,` *Fabri ha detto* \n*“${pickRandom(global.charlie)}”*\n   
   `, m) 
 } 

 handler.help = ['si o no']
handler.tags = ['si o no']
handler.customPrefix = /si|no/i
handler.command = new RegExp



  

 export        default handler 

  

 function pickRandom(list) { 

   return list[Math.floor(list.length * Math.random())] 

 } 

  

 // charlie charlie by odin el fucker kkkkkkkkkk 

 global.charlie = [ 

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",  

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",  

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi",   

 "Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi","Si, puoi","No, non puoi"

 ] 
