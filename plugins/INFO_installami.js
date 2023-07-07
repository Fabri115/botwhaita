import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let sticker = `./Media/Video/bot.mp4`
let text = `
𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐩𝐞𝐫 𝐓𝐄𝐑𝐌𝐔𝐗 📱

> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/Fabri115/BotWhaIta.git o tuo link del fork
> cd BotWhaIta o tuo nome bot
> yarn install 
> npm install
> npm update
> npm start

𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐩𝐞𝐫 𝐓𝐄𝐑𝐌𝐔𝐗 📱 PER SCARICARE IL BOT
> cd /sdcard && rm -rf BotWhaIta && git clone https://github.com/Fabri115/BotWhaIta.git o tuo link del fork && cd BotWhaIta o tuo nome bot && sh start.sh 

⚙️ CONFIGURAZIONE 𝑴☁️ ⚙️
> CLONARE LA REPOSITORY [qui](https://github.com/Fabri115/BotWhaIta/fork)
>  CAMBIARE NUMERO DEL PROPRIETARIO [qui](https://github.com/Fabri115/BotWhaIta/blob/master/config.js)

💥 ATTIVA SU KOYEB 💥
> https://app.koyeb.com/deploy?type=git&repository=github.com/Fabri115/BotWhaIta&branch=master&name=BotWhaIta

🌌 ATTIVA 𝑴☁️ SU REPLIT 🌌
> https://replit.com/new/github/Fabri115/botwhaita

🌌 ATTIVA 𝑴☁️ SU HEROKU 🌌
> https://heroku.com/deploy?template=https://github.com/Fabri115/botwhaita

VERSIONE DI TERMUX NECESSARIA:
> https://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com.apk/file

👽 OTTIENI UN ALTRO CODICE QR 𝑴☁️ 👽
> rm -rf MysticSession

Tutorial: https://www.youtube.com/watch?v=6Cg1yUMz-Do
`.trim()   

conn.reply(m.chat, text, m,{
})   
}
handler.command = /^(installa)/i
export default handler
