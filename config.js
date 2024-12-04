const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©AARPN LEWIS" 


global.devs = "22565651420" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_52_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyLFxuICAgICAgICA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjllcFFFcHRlZnJob3ZrOHFTc2FQN3lPRS8zZ3dQK1dRM1J2RXEyOHlSd2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjR1cEhaaVd2VGJtdVpJREQ4eG1TWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTk5NzQyMDItNzQ3Yi00ZjU2LWFhMzctNWE5ZDFkMzY0Y2JlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDIxNyxcbiAgICAgIDIwMyxcbiAgICAgIDY2LFxuICAgICAgMTEzLFxuICAgICAgMzMsXG4gICAgICAxNTYsXG4gICAgICAxNzIsXG4gICAgICAxNjUsXG4gICAgICAyNDcsXG4gICAgICAyMzcsXG4gICAgICAxMjAsXG4gICAgICAxMzgsXG4gICAgICA0MixcbiAgICAgIDEwMixcbiAgICAgIDI0NCxcbiAgICAgIDEyNCxcbiAgICAgIDEzNixcbiAgICAgIDIxOCxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDY3LFxuICAgICAgMzEsXG4gICAgICAzMSxcbiAgICAgIDY0LFxuICAgICAgMTc1LFxuICAgICAgMTI0LFxuICAgICAgMTE4LFxuICAgICAgNTUsXG4gICAgICAxNTMsXG4gICAgICAyMjgsXG4gICAgICAxMjcsXG4gICAgICAxMzEsXG4gICAgICAxODQsXG4gICAgICAxOCxcbiAgICAgIDc2LFxuICAgICAgMTgxLFxuICAgICAgMjI1LFxuICAgICAgOTMsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01UNzJKWUNFUFdFd2JvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVi9Sd0x2MHVXSUphRHltZnErNElhS2p1WXFhdWIwWlJScTdqTlVHTU1VYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuNnpFZ3dqbTJGOURGaUM4STR0b2o4WHpTTE9RR3ZFN1NrN3pCeEtoaWl3MmRTQlN5anpZVkF6bTJaUUVxL01xMUQ1Z2I0WVlzR2JUM05rb1dLUThoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCUTdHK1lFU1dLd0l2a0dWRUNxMFE2eEZtMmIwSWdnNHVCQjJweC9kdWkwZWlBOG00ZWc4aXlOM3A5MXVpZmZBR1h3aksrY2g2VFNXWjYvRW5yZVVEUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTY1NjUxNDIwOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiW8y/zYdTzL/Nh8y3zL/Nh2TMv82Hfsy/zYdBzL/Nh2HMv82Hcsy/zYdvzL/Nh8y4zL/Nh27Nh8y/XSDMv82HXCIsXG4gICAgXCJsaWRcIjogXCI2MjY1MDkyMjg2ODgxOTo4NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTY1NjUxNDIwOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzMxMzE0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp3S1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSndLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMDVWdHlsUnNhWERrTVRmcGY2ZjF5TlNwY2N0WTl2SGwwZDNxVzdNbCtqaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODQ0NjU4NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzMxMTk2MjU0OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "[͇̿S̷͇͇̿̿d͇̿~͇̿A͇̿a͇̿r͇̿o̸͇͇̿̿n͇̿] ͇̿
",
  ownername:process.env.OWNER_NAME|| "[͇̿S̷͇͇̿̿d͇̿~͇̿A͇̿a͇̿r͇̿o̸͇͇̿̿n͇̿] ͇̿
",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
