let fs = require('fs')
let handler = async (m) => {
let huaaa = fs.readFileSync('./mp3WhatsApp-Ptt-2021-05-30-at-00.27.37.opus)
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(ya ga?|ya ga si|)$/i
handler.command = new RegExp

handler.limit = false
handler.owner = true

module.exports = handler
