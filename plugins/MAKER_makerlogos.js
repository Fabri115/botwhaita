
const handler = async (m, {conn, args, text, usedPrefix, command}) => {
  const tee = `inserisci un testo corto`;
  const too = `esempio: ${usedPrefix + command} Enemies + Bot`;
  const type = (command).toLowerCase();
  switch (type) {
    case 'loli':
      if (!text) return;
      const img = global.API('fgmods', '/api/lolimaker', {text}, 'apikey');
      conn.sendFile(m.chat, img, 'logo.png');
      break;
    case 'neon':
      if (!text) return;
      const ne = global.API('fgmods', '/api/textpro/neon', {text}, 'apikey');
      conn.sendFile(m.chat, ne, 'logo.png');
      break;
    case 'devil':
      if (!text) return;
      const de = global.API('fgmods', '/api/textpro/devil', {text}, 'apikey');
      conn.sendFile(m.chat, de, 'logo.png');
      break;
    case 'wolf':
      if (!text) return;
      const wo = global.API('fgmods', '/api/textpro/logowolf2', {text: 'FG98', text2: text}, 'apikey');
      conn.sendFile(m.chat, wo, 'logo.png');
      break;
    case 'pornhub':
      if (!text) return;
      if (!text.includes('+')) return;
      const [a, b] = text.split`+`;
      const ph = global.API('fgmods', '/api/textpro/pornhub', {text: a, text2: b}, 'apikey');
      conn.sendFile(m.chat, ph, 'logo.png');
      break;
    default:
  }
};
handler.help = ['logololi', 'neon', 'devil', 'wolf', 'phlogo'];
handler.tags = ['maker'];
handler.command = /^(loli|neon|devil|wolf|pornhub)$/i;
handler.diamond = true;

export default handler;
