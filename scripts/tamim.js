module.exports = {
  config: {
      name: "tamim",
          version: "1.0.4",
              author: "—͟͞Tᴀᴍɪᴍ ㅤ⸙",
                  role: 0,
                      shortDescription: "tamim Profile ",
                          category: "Information",
                              guide: {
                                    en: "type tamim"
                                        }
                                          },
  onStart: async function () {},
  onChat: async function ({ api, event }) {
      const msg = event.body?.toLowerCase();
          if (!msg || msg !== "tamim") return;
    const profileText = 
    `⏤͟͟͞͞𝗧𝗔𝗠𝗜𝗠  𝗜𝗡𝗙𝗢 ☺︎
 ⏤͟͟͞͞☺︎ ┏━━━━━━━━━━━━━━━
 ⏤͟͟͞͞𝐍𝐚𝐦𝐞 ➯ 𝐓𝐀𝐌𝐈𝐌 ⏤͟͟͞͞ ᜊ
 
⏤͟͟͞͞𝐍𝐢𝐜𝐤𝐧𝐚𝐦𝐞 ➯⏤͟͟͞͞ NexXy 🌪️

⏤͟͟͞͞𝐂𝐨𝐮𝐧𝐭𝐫𝐲 ➯⏤͟͟͞͞𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡 🇧🇩

🏤⏤͟͟͞͞𝐇𝐨𝐦𝐞 ➯⏤͟͟͞͞𝐦𝐲𝐦𝐞𝐧𝐬𝐢𝐧𝐠  ☠️

🏛️⏤͟͟͞͞𝐃𝐢𝐬𝐭𝐫𝐢𝐜𝐭 ➯⏤͟͟͞͞𝐣𝐚𝐦𝐚𝐥𝐩𝐮𝐫 💀

⛪⏤͟͟͞͞𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 ➯ 𝟏- ✍︎❤️‍🩹

⏤͟͟͞͞𝐀𝐠𝐞 ➯ 𝟏𝟒+  🐣✨

🕌⏤͟͟͞͞𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 ➯ 𝐈𝐬𝐥𝐚𝐦 ❤️♡♡

⏤͟͟͞͞𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 ➯ 𝐒𝐢𝐧𝐠𝐥𝐞  ‍♡

⏤͟͟͞͞𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 ➯ obito__bbz ,,✨

⏤͟͟͞͞𝐅𝐯𝐭 𝐂𝐨𝐥𝐨𝐮𝐫➯ ⏤͟͟͞͞𝐁𝐥𝐚𝐜𝐤 😺🖤


 ⏤͟͟͞͞ ☻ 𝗬𝗢𝗨𝗥 𝗕𝗕𝗭 
 ⏤͟͟͞͞𝑂𝑊𝑁𝐸𝑅⏤☺︎ `;
    api.sendMessage(profileText, event.threadID, event.messageID);
      }
      };
