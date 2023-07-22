import fetch from 'node-fetch'
import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

//choose the language you want to use to play
//
const defaultLang = 'it'

let handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!text) throw 'Inserisci un testo da elaborare.'

  await m.reply('Aspetta un attimo...')

  let zykomd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino_2&text=${text}&user=user-unique-id`)
  let hasil = await zykomd.json()

  let lang = args[0]
  let ttsText = hasil.result

  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    ttsText = hasil.result
  }

  let res

  try {
    res = await tts(ttsText, lang)
  } catch (e) {
    m.reply(e + '')
    ttsText = args.join(' ')
    if (!ttsText) return
    res = await tts(ttsText, defaultLang)
  } finally {
    if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
}

handler.help = ['tts <lang> <teks>']
handler.tags = ['tools']
handler.command = /^ai_voce$/i

export default handler

function tts(text, lang = 'it') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) {
      reject(e)
    }
  })
}
