export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 5) {
                //global.db.data.users[m.sender].banned = true
                m.reply('*𝐒𝐏𝐀𝐌 𝐑𝐈𝐋𝐄𝐕𝐀𝐓𝐎 ⛔!!*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}