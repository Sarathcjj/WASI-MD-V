//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tIcDNjUi9WekZ0Qm92Vlg5RzJweVM0Mjg4TlhCMHpjYkNPTWFjNFEzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDAzTHByc3NQdjBEMGlDaEgxTUdZRmxnMC9wRGdwa2E0ckRWVXdpcnFRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRDZRWEFWL3lGbXJFSGlGeklvMXBnOUVrek5pR1JqYWFrVFQ4ZzEwU21JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0c0c1N3J3ZkZaS3NyYWlCbW5hRHk5ZzZSNWovVHNLaElqWkcyOGNRb1RvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBdVZNck8vMDFneVpDRDY1SFkvRERHYkpZeTF0RW5OVVpSaDlUelZlV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktXMkhzVXNtbi9RQWVaT1Y1eVNRTWRLMVdXRXJrVE1pS0drK3F6dGlwREE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NCWlQxK3NUSHIvRXduTjVXTFNyU0VaRjRXZFlVOE42TWVNQmZONVJVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlQrcmptaWFjSXRUV1A3SFhSUFNEdklRMFBQOExnZitOSHBoNTBQWGEwdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJseHV3aU9EUnNKaTJ0TVBVSm92TURmL1RFakJINnlRZGtpbllRVjBTZmFDelhLL25SU3JyNnNCNjgzNXFNT0JycDd6MXA2dnVCZ3VlK2tDZG9BWUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJxSlZPV0xiUkFJQ1R3bmtVc21RUlhNZEJ6anZkSjd1ZWdsWlJPM2N3YW9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI1NjAxMDQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk2RDU4ODhGMjVEMjVCQzAxNTk5NEM5NUI5MDM2MzcyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2MDQ5MzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI1NjAxMDQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQwRjJCNDYzNzA5QkYzMDAwNEIzQzgyNTk3RDNFRTVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2MDQ5MzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI1NjAxMDQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRDM0I4RkJEMEFBMkQyNDA1QzcxNkNDRjJBMjJCREI5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2MDQ5Mzh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI1NjAxMDQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk2NzA3QkJEOTRFODlDRjMzQkFDNUYyN0JEMjE4RkVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2MDQ5Mzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZBRmNibzhtVGFxd3liUDVPSnVRQ2ciLCJwaG9uZUlkIjoiZDkzYTI0MDYtMTNhMi00NmUxLTg0ZTEtYjJlOTMyZTlkMThiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVpek04UFcvRTllcHRkUlAyUHNNbmJ6d3RFbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUS1JvSlRIMWhrNnVVOGFaT0JrM3NpYkFvSzA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFNWWDNXNUQiLCJtZSI6eyJpZCI6Ijk0NzI1NjAxMDQ2OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2F3c2hhbHlhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOYm84WkFERUxqczByb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5N0QzNFA4YUptUUdxUEpRblhwQjNGZmZsSldOSEdPaWhTcHNVeUkwdVhFPSIsImFjY291bnRTaWduYXR1cmUiOiJ2NVU4eE1WNk4rTFpuS1NTbXorK3duVWtydEFPM1NwK3lTKzJLdEw3SE9MQ2FUV0pPbHNBazF4RnBpdlpUc1BvOUMxRXBrbDJoMnI5QndUd1VmQVJEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRExVMVkxdVpEZk12enl5eU5uamphTERqbTVzWnhmQmpLRVNMQ3UxSUY0c0wvamIrblNtOGRncHVqMXROYWl3aS9ka2wwT0xpL3BqL05EWnYzRHBmQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNTYwMTA0NjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN1dzkrRC9HaVprQnFqeVVKMTZRZHhYMzVTVmpSeGpvb1VxYkZNaU5MbHgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM2MDQ5MzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTUFrIn0=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
