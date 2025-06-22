const hispamemes = require("hispamemes");

const handler = async (msg, { conn }) => {
  try {
    const meme = hispamemes.meme();
    await conn.sendMessage(msg.key.remoteJid, {
      react: { text: "😆", key: msg.key }
    });

    await conn.sendMessage(msg.key.remoteJid, {
      image: { url: meme },
      caption: "🤣 *¡Aquí tienes un meme!*\n\n© ISAGI-YOICHI-MD subbots"
    }, { quoted: msg });

  } catch (e) {
    console.error("❌ Error en el comando .memes:", e);
    await conn.sendMessage(msg.key.remoteJid, {
      text: "❌ *Hubo un error al obtener el meme. Inténtalo de nuevo.*"
    }, { quoted: msg });
  }
};

handler.command = ['meme', 'memes'];
module.exports = handler;
