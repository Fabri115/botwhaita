import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let res = await fetch(`https://docs-jojo.herokuapp.com/api/fake_identity?lang=en&type=json`) 


m.reply(`╭═✧═•⛩️•𝐈𝐃𝐄𝐍𝐓𝐈𝐓𝐀•⛩️•═✧═╮
*𓆩✧𓆪* Nome: ${json.name}
*𓆩✧𓆪* Età: ${json.age}
*𓆩✧𓆪* Genere: ${json.gender}
*𓆩✧𓆪* Lavoro: ${json.occupation}
*𓆩✧𓆪* Codice Postale: ${json.zip_code}
*𓆩✧𓆪* Stato: ${json.state}
*𓆩✧𓆪* Paese: ${json.country}
*𓆩✧𓆪* Email: ${json.email}
*𓆩✧𓆪* Password: ${json.password}
*𓆩✧𓆪* Telefono: ${json.phone}
*𓆩✧𓆪* Targ: ${json.card}
*𓆩✧𓆪* CCV: ${json.code}
*𓆩✧𓆪* Data di Nascita: ${json.date}
*𓆩✧𓆪* Codice pin: ${json.pin_code}
*𓆩✧𓆪* Tipo di sangue: ${json.blood_type}
*𓆩✧𓆪* Stato fiscale: ${json.status}
╰═✧═•⛩️•𝐈𝐃𝐄𝐍𝐓𝐈𝐓𝐀•⛩️•═✧═╯
𝚩𝐘:✧🪬𝐒𝚫𝐌𝚫𝚵𝐋-𝚩𝚯𝐓🪬✧`)

}

handler.command = /^(identita|identità)$/i
export default handler
