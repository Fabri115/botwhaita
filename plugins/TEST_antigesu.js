export async function all(m, conn) {
  let texto;
  let user = global.db.data.users[m.sender];
  
  if (!m.message || !user.antispam) {
    return false;
  }
  
  if (+new Date() > user.antispam) {
    let tiempo = 300000 * 5;
    setTimeout(() => {
      // Blocca o espelli l'utente che ha spammatto nel gruppo
      // Assicurati di utilizzare i metodi appropriati forniti dalla tua libreria o piattaforma
      // Esempio:
      conn.groupRemove(m.chat, [m.sender], true);
      
      // Aggiorna lo stato dell'utente nel database
      user.banned = true;
      texto = "Utente bannato per spam.";
    }, tiempo);
    
    user.antispam = null;
  }
}