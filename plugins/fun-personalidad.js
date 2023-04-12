let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Inserisci un nome?', m)
	
  let personalidad = `
┏━━°❀❬ *Personalità}* ❭❀°━━┓
*┃*
*┃• Nome* : ${text}
*┃• Buoni Costumi* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Cattivo Morale* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Tipo di persona* : ${pickRandom(['Di buon cuore','Arrogante','Taccagno','Generoso','Umile','Tímido','Vigliacco','Invasivo','Cristallino','No binario XD', 'Stupido'])}
*┃• Sempre* : ${pickRandom(['Pesante','Cattivo','Distratto','Fastidioso','A Spettegolare','a litigare','a scopare','Guarda anime','Chatta su WhatsApp perché è single','falso o buono a nulla','donnaiolo','sul cellulare'])}
*┃• Intelligenza* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Delinquenza* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Coraggio* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Paura* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Fama* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Genere* : ${pickRandom(['Uomo', 'Donna', 'Omosessuale', 'BiSessuale', 'PanSessuale', 'Femminista', 'EteroSesssuale', 'Maschio Alfa', 'PrimaDonna', 'PaloSessuale', 'PlayStationSessuale', 'FabriSessuale'])}
┗━━━━━━━━━━━━━━━━
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['personalidad *<nombre>*']
handler.tags = ['fun']
handler.command = /^gender/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
