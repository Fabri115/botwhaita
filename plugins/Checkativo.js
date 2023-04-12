let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    let id = m.chat
    let mCount = {}
    let totalM = 0
    await ( m => {
        if (!user) return
        if (user in mCount) mCount[user]++
        else mCount[user] = 1
        totalM++
    }, 1000)
}
handler.help = ['totalpesan']
handler.tags = ['group']
handler.command = /^tital(message|msg|pesan)$/i

export default handler