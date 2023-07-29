import {parsePhoneNumber} from 'awesome-phonenumber';
import {someincludes} from '../lib/others.js';

const handler = async (m, {conn, args}) => {
  let response = await conn.groupRequestParticipantsList(m.chat);
  if (args[0]) {
    response = response.map((v) => v.jid);
    if (someincludes(['acc', 'terima'], args[0])) args[0] = 'approve';
    else if (someincludes(['reject', 'tolak'], args[0])) args[0] = 'reject';
    else return m.reply('mau di reject atau acc ?');
    const anu = await conn.groupRequestParticipantsUpdate(m.chat, response, args[0]);
    m.reply(`succes *${args[0]}* all request`);
  } else {
    let txt = `*[ LIST REQUEST JOIN ]*\n%${response.length} User%`.replace(/%/g, '```');
    for (const x of response) {
      const y = await parsePhoneNumber(x.jid.split('@')[0], {regionCode: 'ID'});
      const date = new Date(parseInt(x.request_time));
      const date2 = date.getHours() + ':' + date.getMinutes() + ', '+ date.toDateString();
      txt += `\n\n*Number :* ${y.number.international}\n`;
      txt += `*Req By :* ${x.request_method}\n`;
      txt += `*Time :* ${date2}\n`;
      txt += `───────────────────`;
    }
    m.reply(txt);
  }
};

handler.menugroup = ['listreq <acc/reject>'];
handler.tagsgroup = ['group'];
handler.command = /^(listreq(uest)?)$/i;

handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
