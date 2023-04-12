export async function all(m, conn) { 
let texto
let user = global.db.data.users[m.sender]  
if (!m.message)
return
if (!user.antispam)
return !0
if (+new Date() > user.antispam) {
let tiempo = 300000 * 5
setTimeout(() => {
//this.updateBlockStatus(m.chat, 'unblock') ok
user.banned = false
texto = `froci`
}, tiempo)        
user.antispam = null
}}