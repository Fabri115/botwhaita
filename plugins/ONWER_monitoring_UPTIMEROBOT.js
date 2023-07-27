import fetch from 'node-fetch';

// const MONITOR_API_KEY = process.env['MONITOR'];
const MONITOR_API_KEY = `${global.uptime}`

var handler = async (m, { conn }) => {
  conn.reply(m.chat, 'Attualmente Caricamento delle informazioni sul monitor ... Attendi', m);

  try {
    const [monitorResponse, accountResponse] = await Promise.all([
      fetch('https://api.uptimerobot.com/v2/getMonitors', {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          api_key: MONITOR_API_KEY,
          format: 'json',
          logs: '1'
        })
      }),
      fetch('https://api.uptimerobot.com/v2/getAccountDetails', {
        method: 'POST',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          api_key: MONITOR_API_KEY,
          format: 'json'
        })
      })
    ]);

    if (!monitorResponse.ok || !accountResponse.ok) {
      throw new Error('Impossibile recuperare i dati del monitor');
    }

    const { monitors } = await monitorResponse.json();
    const { account } = await accountResponse.json();
    const monitorData = monitors.map(monitor => `Monitor ID: ${monitor.id}\nTitolo: ${monitor.friendly_name}\nMonitor URL: ${monitor.url}\nMonitor Stato: ${monitor.status}\nPort: ${monitor.port}\nIntervallo: ${monitor.interval}\n\n`).join('');

    conn.reply(m.chat, `Di seguito sono riportati le informazioni sul monitoraggio:\n\n${monitorData}\nTotal Monitor Aktif: ${account.up_monitors}\nMonitor totale inattivi: ${account.down_monitors}\nIl monitor totale è disattivato: ${account.paused_monitors}`, m);
  } catch (error) {
    conn.reply(m.chat, 'Scusa, c è stato un errore.La possibilità della chiave API ha raggiunto il limite limite (10 req/min). Si prega di attendere 1 minuto per fare un altra richiesta.', m);
    console.error(error);
  }
};

handler.help = ['monitor']
handler.tags = ['internet', 'tools']
handler.owner = true
handler.command = /^(monitor)$/i

export default handler