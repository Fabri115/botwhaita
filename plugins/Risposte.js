
let handler = m => m
handler.all = async function (m) { 
let menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === false)
throw ''
if (/^ciao$/i.test(m.text)) {
m.reply(`Ciao troietta`)
}
if (/^buongiorno$/i.test(m.text)) {
m.reply(`..Ancora non sei morto?`)
{mentions: [menzione.split]
}}
if (/^buonanotte$/i.test(m.text)) {
m.reply(`Magari ti svegli ${pickRandom(['freddo','morto'])}`)
}
if (/^bestemmia$/i.test(m.text)) {
this.reply(m.chat, `${pickRandom(['Porco dio','Porca madonna','Cristo dio','Dio porchetta','Dio forchetta','Puttana madonna','Dio maiale','Dio impanato'])}`)
}
if (/fabribot$/i.test(m.text)) {
m.reply(`${pickRandom(['Nove mesi per uscire, una vita per rientrare','Se trombi come parcheggi la accechi','Minchia in erezione non guarda culo cagato','Un uomo non è mai finito finchè cè lingua e dito','La barba e le seghe si fanno bene da soli','Co na pippa te scopi chi te pare','La figa è umida per non far alzare polvere quando si scopa','La figa è come una carrucola, se la tieni unta non cigola','Il matrimonio è come una gabbia per topi, chi è fuori vorrebbe entrare e chi è dentro vorrebbe uscire','Si lavora e si fatica per il pane e per la fica','La vita è come la scala del pollaio corta e piena di merda','La donna è come una bistecca, quando fa sangue girala','Se vai a dormire che ti prude il culo ti sveglierai col dito che puzza di merda','Cazzo in culo non fa figli ma fa male se lo pigli','Come diceva pilate dal profondo delle grotte, meglio il tuo culo vergine che 100 fighe rotte','Meglio corto che attappa che lungo che ci sciacqua!','Meglio un figlio in guerra che alcol per terra','Una pisciata senza peto è come insalata senza aceto','Cazzo in culo non fa figli ma fa male se lo pigli','Minchia in erezione non guarda culo cagato','La figa deve saper di figa, il culo di sapone','La lingua ha sempre 20 anni','La figa è umida per non far alzare polvere quando si scopa'])}`)
}}
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}