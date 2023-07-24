import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, args, command }) => {
// Definisci un array per tenere traccia dei partecipanti
var participants = [];

// Funzione per aggiungere un partecipante
function addParticipant(name) {
  if (!participants.includes(name)) {
    participants.push(name);
    console.log(name + ' è entrato nel gruppo.');
  }
}

// Funzione per rimuovere un partecipante
function removeParticipant(name) {
  var index = participants.indexOf(name);
  if (index !== -1) {
    participants.splice(index, 1);
    console.log(name + ' ha lasciato il gruppo.');
  }
}

// Esempio di utilizzo
addParticipant('Alice');
addParticipant('Bob');
removeParticipant('Alice');
}
handler.command = /^(h)$/i
export default handler

