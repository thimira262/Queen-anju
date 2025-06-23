//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZ6aHF0dnBYbmJZUjloZ2Z4cHU2bFEvQWVkL29RS3Rzbk41cXlNdVIxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1FPWGg3TEttUG8rdWhteW15WUVMVWRRRmhZd3hBRElWVzRsMnFod2Z4ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT0F1ajYwaml5Qlc3K2ZSTnVlWGhnR1JVUkgxdUZwb1dGb2lacHo0WlZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvakxWWkp2TUFqOUlJVFJGTlhsbTlmWDFMaHltM1BlOW5zTmovTFBZQXpJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNUWFiTlVmZUFHY2pRcHQ2VCsvZThFUEE0NktkVThnZ1N5OGtJVUdBM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ZZzFtOHJhTTZVTG9uODlhbk4zLzVoR1dHNjRxWHNjZjIxT1ZpOFZxbmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0taeTZwTkkzL3IrU2pJT29MNVpMWmV3R3ZSSzQ5VDdGRVpJYnltcXFrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVdZOFY1cHFzd2MyRnJYbWJmYUpmMTIrVTNQRm1zUDVFRHRTNFRYblZuaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhGVGNsMXVTUHBTcFBSeGpzbUluc2xiRU1zcC81eEs4NmhPa3JudjFUNGJOWkt4L1F6YnlZMjVxbnZTUG1ldkplZGphRzNZb01xVTQxYmNWZ1ZJSkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJKWE9mSUZBSHQzT3IrOW1idURRWVZlZXZBaXVCTU84TmdyRmMyRFhpR3M0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWdGtLdXZNV1M0bU4wNHhpS3dVdW9nIiwicGhvbmVJZCI6IjdkZjY4ZjdhLWZkYWItNGE0OS04NWRkLWEwZTVlZDBlOWFlZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxYnpYT3ZPdkR3T0VWejlrT3B5THZUYjRtNFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU91YVVRR2lLNXd5NE81SFE2cmUvTjlyalZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik45UUhDVFk0IiwibWUiOnsiaWQiOiI5NDc4NjczNTYzNzoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJHYW1pbmcgSHlkZXIiLCJsaWQiOiIyMTkzNjE2NDYyMzU2NzA6MjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcm9tNzRCRUovRjVjSUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrczE3aUV2ZTQ3QU4wMysvTEFDdVVaVjNGdjZ1dm9lYkFMQ3lRKzhHVDJ3PSIsImFjY291bnRTaWduYXR1cmUiOiJSazVBaUg1dHpOZitBTDRNaDgxbFJhSHFDR1dKbDExTVYrK2Ivc1RuNlpIVklWc2lZYUszSE5welYwTkFuOTl2MjhmZmJlblhxNTNzUTFtQVRIK2dCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiczhMaTJJL2dDNlVyaEdBTUhvRkpqKzVVcnNsUklCVHFWVUNkTCtVZVNzU2tHUGY1QWdCVmxhemR4UHNWRkFYU0RweXgxL21nQ3l5MldwaWZJa2tyQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NjczNTYzNzoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaTE5lNGhMM3VPd0RkTi92eXdBcmxHVmR4YitycjZIbXdDd3NrUHZCazlzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXNJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA2ODg0MjgsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEalEifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0786735637",
  PASSWORD: 
    process.env.PASSWORD || "@thimira2009#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
