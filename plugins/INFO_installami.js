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
cd /sdcard && rm -rf BotWhaIta && git clone https://github.com/Fabri115/BotWhaIta.git o tuo link del fork && cd BotWhaIta o tuo nome bot && sh start.sh 

Tutorial: https://www.youtube.com/watch?v=6Cg1yUMz-Do
`.trim()   

conn.reply(m.chat, text, m,{
})   
}
handler.command = /^(installa)/i
export default handler
