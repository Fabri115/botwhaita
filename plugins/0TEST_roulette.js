const users = global.db.data.users;
const timers = {}; // Nuova variabile per gestire i timer

const handler = async (m, { conn, text, usedPrefix }) => {
  if (!text || !text.includes('@')) {
    m.reply('⚠️ Formato del comando errato. Utilizza: roulette <durata> @utente (durata in m/h)');
    return;
  }

  const durationText = '⛔ Durata non valida, specifica un tempo tra 1m e 24h. prima del tag @';
  const menzione = m.mentionedJid[0] || '';

  if (!menzione) {
    m.reply('Non hai menzionato l\'utente fortunato.');
    return;
  }

  const timeInput = text.split(' ')[0].toLowerCase();
  let duration = 0;

  if (timeInput.endsWith('m')) {
    duration = parseInt(timeInput) * 60 * 1000; // Minuti
  } else if (timeInput.endsWith('h')) {
    duration = parseInt(timeInput) * 60 * 60 * 1000; // Ore
  }

  if (duration >= 60000 && duration <= 86400000) {
    users[menzione] = { muto: true };

    m.reply(`Utente @${menzione.split`@`[0]} se vuoi essere risparmiato avrai ${timeInput} per scrivere un msg`);

    // Imposta il timer per la persona menzionata
    timers[menzione] = setTimeout(async () => {
      if (users[menzione] && users[menzione]) {
        users[menzione] = false;

        const rand = Math.random() < 0.5 ? 'testa' : 'croce';
        let msg = '';

        if (rand === 'testa') {
          await conn.groupParticipantsUpdate(m.chat, [menzione], 'remove');
          msg = `L'utente @${menzione.split`@`[0]} è stato bannato dal gruppo (testa) il destino ha scelto per lui.`;
        } else {
          msg = `L'utente @${menzione.split`@`[0]} non è stato bannato dal gruppo (croce) fortunato il ragazzo.`;
        }

        m.reply(msg);
      }
    }, duration);

    // Aggiungi un listener per interrompere il timer se la persona menzionata scrive un messaggio
      ('chat-update', async (chatUpdate) => {
      if (
        chatUpdate.jid === menzione &&
        chatUpdate.hasNewMessage &&
        chatUpdate.messages.some((msg) => msg.key.fromMe === false)
      ) {
        // Se la persona menzionata ha inviato un messaggio, interrompi il timer
        clearTimeout(timers[menzione]);
        m.reply('Il timer è stato interrotto perché l\'utente ha scritto un messaggio. Bravo ragazzo. non verrai bannato, questa volta');
        timers[menzione] = null; // Resetta il timer
      }
    });
  } else {
    m.reply(durationText);
  }
};

const rouletteHandler = async (m) => {
  if (m.isGroup && global.db.data.chats[m.chat].spacobot !== false && /^roulette|pisda|rr$/i.test(m.text)) {
    const sticker = `./Media/Moneta/${pickRandom(['01', '02'])}.webp`;
    await conn.sendFile(m.chat, sticker, 'sticker.webp', '', m);
  }
};

const pickRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

export { handler as mutetimeHandler, rouletteHandler };

handler.command = /^roulette|pisda|rr$/i;
handler.admin = true;
export default handler;