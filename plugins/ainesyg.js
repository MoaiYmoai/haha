let fs = require('fs')
let handler = async (m) => {
let huaaa = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-10-at-20.46.49.opus')
conn.sendFile(m.chat, huaaa, '', '', m, true)
}

handler.customPrefix = /^(Nay|nay|Nayla|Syg)$/i
handler.command = new RegExp

handler.limit = true
handler.owner = true

module.exports = handler
