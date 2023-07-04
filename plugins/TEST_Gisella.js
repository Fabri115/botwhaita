import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, usedPrefix, command, args, 	command }) => {
// Variabile per tenere il conteggio dei partecipanti
let partecipanti = 0;

// Funzione per incrementare il conteggio dei partecipanti
function incrementaPartecipanti() {
  partecipanti++;
  m.reply(`Un partecipante è entrato. Totale: ${partecipanti}`);
}

// Funzione per decrementare il conteggio dei partecipanti
function decrementaPartecipanti() {
  if (partecipanti > 0) {
    partecipanti--;
    m.reply(`Un partecipante è uscito. Totale: ${partecipanti}`);
  }
}

// Funzione per visualizzare il conteggio dei partecipanti
function visualizzaConteggioPartecipanti() {
  m.reply(`Il numero di partecipanti attuali è: ${partecipanti}`);
}

// Handler per gestire i comandi
const handler = {
  counterpartecipanti: visualizzaConteggioPartecipanti
};

// Esempio di utilizzo del plugin
incrementaPartecipanti();
incrementaPartecipanti();
decrementaPartecipanti();
handler.counterpartecipanti();
}
handler.help = ['Checkativo @user']
handler.tags = ['group']
handler.command = /^com$/i

export default handler