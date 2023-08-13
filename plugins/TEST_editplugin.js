import {tmpdir} from 'os';
import path, {join} from 'path';
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch,
  writeFileSync,
} from 'fs';

const handler = async (m, {conn, usedPrefix: _p, __dirname, args, text}) => {
  const ar = Object.keys(plugins);
  const ar1 = ar.map((v) => v.replace('.js', ''));

  if (!text) throw `📌 *_Esempio uso:_*\n*#editplugin Menu-official*`;

  if (!ar1.includes(args[0])) return m.reply(`*🗃️ Non esiste questo plugin!*\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••\n\n${ar1.map((v) => ' ' + v).join`\n`}`);

  const pluginFile = join(__dirname, '../plugins/' + args[0] + '.js');

  if (!existsSync(pluginFile)) return m.reply(`*❌ Il file del plugin non esiste!*`);

  // Leggi il contenuto del file del plugin
  const pluginContent = readFileSync(pluginFile, 'utf-8');

  // Effettua le modifiche desiderate al contenuto del plugin
  // Ad esempio, puoi sostituire una parte specifica del codice del plugin
  // con un nuovo codice o effettuare altre modifiche necessarie.
  const modifiedPluginContent = pluginContent.replace('vecchio_codice', 'nuovo_codice');

  // Sovrascrivi il file del plugin con il nuovo contenuto
  writeFileSync(pluginFile, modifiedPluginContent);

  conn.reply(m.chat, `⚙️ Plugin "plugins/${args[0]}.js" modificato con successo!`, m);
};

handler.help = ['editplugin <nome>'];
handler.tags = ['owner'];
handler.command = /^(editplugin|ep|editplu)$/i;
handler.mods = true;

export default handler;
