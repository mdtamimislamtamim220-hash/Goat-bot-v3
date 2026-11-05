const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    aliases: ["admininfo", "botinfo", "info", "ownerinfo"],
    version: "2.0",
    author: "Mᴏʜᴀᴍᴍᴀᴅ Aᴋᴀsʜ",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText = 
`╭─ 👑 Oᴡɴᴇʀ Iɴғᴏ 👑 ─╮
│ 👤 Nᴀᴍᴇ       : Tᴀᴍɪᴍ Iꜱʟᴀᴍ
│ 🧸 Nɪᴄᴋ       : NᴇxXʏ
│ 🎂 Aɢᴇ        : 14+
│ 💘 Rᴇʟᴀᴛɪᴏɴ : Sɪɴɢʟᴇ
│ 🎓 Pʀᴏғᴇssɪᴏɴ : Vᴏɴᴅᴀᴍɪ
│ 📚 Eᴅᴜᴄᴀᴛɪᴏɴ :   1     [ lie ]
│ 🏡 Lᴏᴄᴀᴛɪᴏɴ : ᴅʜᴀᴋᴀ_ɴᴀʀᴀʏᴀɴɢᴏɴᴊ
├─ 🔗 Cᴏɴᴛᴀᴄᴛ ─╮
│ 📘 ɪɴꜱᴛᴀɢʀᴀᴍ  :  obito__bbz
│ 💬 Messenger: ɴᴀɪ 
│ 📞 WhatsApp  : +966 57 662 6771
╰────────────────╯`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgLink = "https://i.imgur.com/hlKcnCf.jpeg";

    const send = () => {
      api.sendMessage(
        {
          body: ownerText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send);
  }
};
