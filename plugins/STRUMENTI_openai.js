import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `dica??`
await m.reply('aspe...')
let zykomd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino_2&text=${text}&user=user-unique-id`)
let hasil = await zykomd.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(aii)$/i
export default handler

