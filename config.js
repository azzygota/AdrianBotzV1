/**
   * Create By Dika Ardnt.
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '9d30efca66',
}

// Other
global.owner = ['6289513081052']
global.ownernomer = "6289513081052"
global.premium = ['6289513081052',]
global.packname = '𝐴𝑑𝑟𝑖𝑎𝑛𝑛𝑛𝑋𝐷'
global.author = '𝑇𝑖𝑘𝑡𝑜𝑘 & 𝑌𝑜𝑢𝑡𝑢𝑏𝑒 @𝐴𝑑𝑟𝑖𝑎𝑛𝑝𝑟𝑒𝑠𝑒𝑡03'
global.sessionName = 'adrian'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./image/adrian.jpg')
global.vaze = { url: 'https://telegra.ph/file/25fc3b6bd0af102120491.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
