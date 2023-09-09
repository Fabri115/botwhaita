import fetch from 'node-fetch'
import fs from 'fs'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'


let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let pp = imagen4;
    let name = await conn.getName(who)
    let ucpn = `${ucapan()}`
    let emot = `${pickRandom(['⎔', '◈▻', '✦', 'ᯬ', '⭔', '◉', '⬟', '᭻', '〆', '々', '⛥', '✗',])}`
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)


    
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
    break 
    case 'menu': case 'help': case 'list': case 'listmenu': {
        hisoka.sendPoll(m.chat, "List Menu", ['MenuAll','MenuGroup','MenuDownload','MenuSearch','MenuRandom','MenuMaker','MenuFun','MenuPrimbon','MenuConvert','MenuMain','MenuOwner'])
    }
    break
    case 'menuall': case 'allmenu': {
        let anu = `┌──⭓ *All Menu*
│
${allCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break
    case 'menugc': case 'menugrup': case 'menugroup': {
        let anu = `┌──⭓ *Group Menu*
│
${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break 
    case 'menudownload': case 'menudl': case 'menudown': {
        let anu = `┌──⭓ *Downloader Menu*
│
${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break 
    case 'menusearch': {
        let anu = `┌──⭓ *Search Menu*
│
${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break
    case 'menurandom': {
        let anu = `┌──⭓ *Random Menu*
│
${cmdRand.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break 
    case 'menumaker': {
        let anu = `┌──⭓ *Maker Menu*
│
${cmdMaker.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break
    case 'menufun': {
        let anu = `┌──⭓ *Fun Menu*
│
${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break 
    case 'menuprimbon': {
        let anu = `┌──⭓ *Primbon Menu*
│
${cmdPrimbon.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break 
    case 'menuconvert': {
       let anu = `┌──⭓ *Convert Menu*
│
${cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break 
    case 'menumain': {
        let anu = `┌──⭓ *Main Menu*
│
${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }
    break 
    case 'menuowner': {
        let anu = `┌──⭓ *Owner Menu*
│
${cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
        hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
    }

handler.command = /^(menu|volpe)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

//----------- FUNCTION -------


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang️"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Night Rider')
  }
  if (time >= 4) {
    wishloc = ('Good Morning')
  }
  if (time >= 12) {
    wishloc = ('Good Afternoon')
  }
  if (time >= 16) {
    wishloc = ('️Good Evening')
  }
  if (time >= 23) {
    wishloc = ('Night Rider')
  }
  return wishloc
}

async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}