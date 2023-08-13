import fs from 'fs';
const handler = async (m, {conn, args, command}) => {
  let _muptime;
  if (process.send) {
    process.send('uptime');
    _muptime = await new Promise((resolve) => {
      process.once('message', resolve);
      setTimeout(resolve, 1000);
    }) * 1000;
  }
  const muptime = clockString(_muptime);
  conn.reply(m.chat, ` *R U N T I M E* \n${muptime}\n`, m, {
  });
};


handler.help = ['runtime'];
handler.tags = ['info'];
handler.command = ['runtime', 'rt'];
export default handler;

function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map((v) => v.toString().padStart(2, 0)).join('');
}
