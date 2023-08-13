import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'Fabri115';
const repo = 'botwhaita';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
      const {sha, commit: {message}, html_url} = response.data[0];

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha;
        previousUpdatedAt = message;
        conn.sendMessage(m.chat, {text: `*[❗] Il repository è stato aggiornato!*\n*- Repository:* ${html_url}\n*- Messaggio commit:* ${message}`}, {quoted: m});
      }
    } catch (error) {
      m.reply('*[❗] Errore quando si verifica il repository:*', error.message);
    }
  }
  setInterval(checkRepoUpdates, 60000);
};
handler.command = /^(commit|actualizacion)/i;
handler.rowner = true;
export default handler;
