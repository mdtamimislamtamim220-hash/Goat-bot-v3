const fs = require("fs-extra");
const request = require("request");
const path = require("path");
const os = require("os");

module.exports = {
	config: {
		name: "owner",
		version: "3.0",
		author: "—͟͞Tᴀᴍɪᴍ ㅤ⸙",
		role: 0,
		shortDescription: "Owner information",
		longDescription: "Show owner information",
		category: "information",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {

		const uptime = process.uptime();
		const hours = Math.floor(uptime / 3600);
		const minutes = Math.floor((uptime % 3600) / 60);
		const seconds = Math.floor(uptime % 60);

		const totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
		const freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

		const msg = `
╔═════════╗
  𝗢𝗪𝗡𝗘𝗥 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 
╚═════════╝
╭──────────⭓
│💌𝗡𝗮𝗺𝗲 :     —͟͞Tᴀᴍɪᴍ ㅤ⸙
│🧸𝗡𝗶𝗰𝗸      :  NᴇXxʏ
│🔮 𝗔𝗴𝗲       : 14+
│🖤 𝘀𝘁𝗮𝘁𝘂𝘀   :  Sɪɴɢʟᴇ
│✡️ 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 :  Vᴏɴᴅᴀᴍɪ
 | 🚸𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 :   class -1
│🔶 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻  :  Dʜᴀᴋᴀ_Nᴀʀᴀʏᴀɴɢᴏɴᴊ
╰──────────⭓
╭─────────⭓
 |🆙  ${hours}h ${minutes}m ${seconds}s
 |
 |💾     : ${freeMem}GB / ${totalMem}GB
╰─────────⭓
╭──────────⭓
│💠 WhatsApp
│🆔  +966 57 662 6771
╰──────────⭓
`;

		const cacheFolder = path.join(__dirname, "cache");
		const imagePath = path.join(cacheFolder, "owner.jpg");

		fs.ensureDirSync(cacheFolder);

		const imageUrl = "https://i.imgur.com/Rtana3w.png";

		request(imageUrl)
			.pipe(fs.createWriteStream(imagePath))
			.on("close", () => {
				api.sendMessage(
					{
						body: msg,
						attachment: fs.createReadStream(imagePath)
					},
					event.threadID,
					() => {
						if (fs.existsSync(imagePath))
							fs.unlinkSync(imagePath);
					},
					event.messageID
				);
			})
			.on("error", () => {
				api.sendMessage(msg, event.threadID, event.messageID);
			});
	}
};
