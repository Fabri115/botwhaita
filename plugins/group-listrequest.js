/* import { parsePhoneNumber } from 'awesome-phonenumber'
import { someincludes } from '../lib/others.js'

let handler = async (m, { conn, args }) => {
	let response = await conn.groupRequestParticipantsList(m.chat)
	if (args[0]) {
		response = response.map(v => v.jid)
		if (someincludes(['accetta', 'approve'], args[0])) args[0] = 'approve'
		else if (someincludes(['rifiuta', 'reject'], args[0])) args[0] = 'reject'
		else return m.reply('vuoi  rifiutare o accettare ?')
		let anu = await conn.groupRequestParticipantsUpdate(m.chat, response, args[0])
		m.reply(`Successo *${args[0]}* Tutte le richieste`)
	} else {
		let txt = `*[ LISTA RICHIESTE JOIN ]*\n%${response.length} Utente%`.replace(/%/g, '```')
		for (let x of response) {
			let y = await parsePhoneNumber(x.jid.split('@')[0], { regionCode: 'ID' })
			let date = new Date(parseInt(x.request_time))
			let date2 = date.getHours() + ':' + date.getMinutes() + ', '+ date.toDateString()
			txt += `\n\n*Numero :* ${y.number.international}\n`
			txt += `*Richiesta By :* ${x.request_method}\n`
			txt += `*Ora :* ${date2}\n`
			txt += `───────────────────`
		}
		m.reply(txt)
	}
}

handler.menugroup = ['listreq <acc/reject>']
handler.tagsgroup = ['group']
handler.command = /^(listreq(uest)?)$/i

handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler*/
