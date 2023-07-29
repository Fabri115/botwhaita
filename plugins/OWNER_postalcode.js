import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Use:\n${usedPrefix + command} <text>\n\nExample:\n${usedPrefix + command} Lamongan`
    let res = await fetch(API('xteam', '/kodepos', { q: text }, 'APIKEY'))
    if (!res.ok) throw `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. Provincia: ${v.province}\nCitta: ${v.city}\nDistricts: ${v.subdistrict}\nUrban: ${v.urban}\nCodice postale: ${v.postalcode}`).join('\n\n')
    m.reply(mes)
}
handler.help = ['postalcode <city>']
handler.tags = ['tools']
handler.command = /^postalcode$/i
handler.owner = true
handler.limit = 0
export default handler
