require("./config");
const {
  default: makeWASocket,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  getContentType,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  getAggregateVotesInPollMessage,
  proto,
  delay
} = require("@whiskeysockets/baileys");
const {
  uncache,
  nocache
} = require("./lib/loader");
const {
  color
} = require("./lib/color");
const readline = require("readline");
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const {
  Low,
  JSONFile
} = require("./lib/lowdb");
const yargs = require("yargs/yargs");
const fs = require("fs");
const chalk = require("chalk");
const fetch = require("node-fetch");
const FileType = require("file-type");
const path = require("path");
const axios = require("axios");
const _ = require("lodash");
const moment = require("moment-timezone");
const PhoneNumber = require("awesome-phonenumber");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/scp/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  await,
  sleep,
  reSize
} = require("./lib/myfunc");
global.autoswview = false;
global.welcome = true;
global.adminevent = true;
global.groupevent = true;
global.anticall = false;
global.public = true;
global.groupOnly = false;
global.privateChatOnly = false;
global.autoBio = true;
const store = makeInMemoryStore({
  logger: pino().child({
    level: "silent",
    stream: "store"
  })
});
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.db = new Low(new JSONFile("src/database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x1e50c4 => {
      const _0x1b4710 = setInterval(() => {
        if (!global.db.READ) {
          clearInterval(_0x1b4710);
          _0x1e50c4(global.db.data == null ? global.loadDatabase() : global.db.data);
        }
      }, 1000);
    });
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  try {
    await global.db.read();
    global.db.data = {
      users: {},
      database: {},
      chats: {},
      game: {},
      settings: {},
      message: {},
      ...(global.db.data || {})
    };
    global.db.chain = _.chain(global.db.data);
  } catch (_0x5d56f0) {
    console.error("âš ï¸ Gagal membaca database:", _0x5d56f0);
  } finally {
    global.db.READ = false;
  }
};
loadDatabase();
if (global.db) {
  setInterval(async () => {
    if (global.db.data && !global.db.READ) {
      try {
        await global.db.write();
      } catch (_0x3dcd65) {
        console.error("âš ï¸ Gagal menyimpan database:", _0x3dcd65);
      }
    }
  }, 30000);
}
require("./case.js");
nocache("../case.js", _0x14e6d9 => console.log(color("[ CHANGE ]", "green"), color("'" + _0x14e6d9 + "'", "green"), "Updated"));
require("./main.js");
nocache("../main.js", _0x27f632 => console.log(color("[ CHANGE ]", "green"), color("'" + _0x27f632 + "'", "green"), "Updated"));
const phoneNumber = ownerNumber;
const owner = JSON.parse(fs.readFileSync("./owner.json"));
const contacts = JSON.parse(fs.readFileSync("./src/data/role/contacts.json"));
const usePairingCode = true;
const session = "./" + sessionName;
const question = _0x1b41fb => {
  const _0x50c2fd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(_0xa6c1c5 => {
    _0x50c2fd.question(_0x1b41fb, _0xa6c1c5);
  });
};
const colors = [chalk.red, chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan];
function displayBanner() {
  const _0x4b825b = "\n\nâ•­â”â”â”â•®â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•­â•®â•­â”â”â•®\nâ”ƒâ•­â”â•®â”ƒâ•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â”ƒâ”ƒâ”ƒâ•­â•®â”ƒ\nâ”ƒâ•°â”â•¯â”£â”â”â”³â•®â•­â•®â•­â”³â”â”â”³â”â”³â”â”â”³â”â•¯â”ƒâ”ƒâ•°â•¯â•°â”³â•®â•±â•­â•®\nâ”ƒâ•­â”â”â”«â•­â•®â”ƒâ•°â•¯â•°â•¯â”ƒâ”ƒâ”â”«â•­â”«â”ƒâ”â”«â•­â•®â”ƒâ”ƒâ•­â”â•®â”ƒâ”ƒâ•±â”ƒâ”ƒ\nâ”ƒâ”ƒâ•±â•±â”ƒâ•°â•¯â”£â•®â•­â•®â•­â”«â”ƒâ”â”«â”ƒâ”ƒâ”ƒâ”â”«â•°â•¯â”ƒâ”ƒâ•°â”â•¯â”ƒâ•°â”â•¯â”ƒ\nâ•°â•¯â•±â•±â•°â”â”â•¯â•°â•¯â•°â•¯â•°â”â”â”»â•¯â•°â”â”â”»â”â”â•¯â•°â”â”â”â”»â”â•®â•­â•¯\nâ•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•­â”â•¯â”ƒ\nâ•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•±â•°â”â”â•¯\nBot whatsapp only termux Â©\nSHO-NHE V3 | Created sychyy & nhebotx\nâ–‘â–ˆâ–€â–€â–€â–ˆ â–‘â–ˆâ”€â–‘â–ˆ â–‘â–ˆâ–€â–€â–€â–ˆ â–‘â–ˆâ–„â”€â–‘â–ˆ â–‘â–ˆâ”€â–‘â–ˆ â–‘â–ˆâ–€â–€â–€ \nâ”€â–€â–€â–€â–„â–„ â–‘â–ˆâ–€â–€â–ˆ â–‘â–ˆâ”€â”€â–‘â–ˆ â–‘â–ˆâ–‘â–ˆâ–‘â–ˆ â–‘â–ˆâ–€â–€â–ˆ â–‘â–ˆâ–€â–€â–€ \nâ–‘â–ˆâ–„â–„â–„â–ˆ â–‘â–ˆâ”€â–‘â–ˆ â–‘â–ˆâ–„â–„â–„â–ˆ â–‘â–ˆâ”€â”€â–€â–ˆ â–‘â–ˆâ”€â–‘â–ˆ â–‘â–ˆâ–„â–„â–„\n\nâ–ˆâ–ˆâ•—â–‘â–‘â–‘â–ˆâ–ˆâ•—â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—â–‘\nâ–ˆâ–ˆâ•‘â–‘â–‘â–‘â–ˆâ–ˆâ•‘â•šâ•â•â•â•â–ˆâ–ˆâ•—\nâ•šâ–ˆâ–ˆâ•—â–‘â–ˆâ–ˆâ•”â•â–‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•”â•\nâ–‘â•šâ–ˆâ–ˆâ–ˆâ–ˆâ•”â•â–‘â–‘â•šâ•â•â•â–ˆâ–ˆâ•—\nâ–‘â–‘â•šâ–ˆâ–ˆâ•”â•â–‘â–‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•”â•\nâ–‘â–‘â–‘â•šâ•â•â–‘â–‘â–‘â•šâ•â•â•â•â•â•â–‘\n";
  const _0x5abdd5 = chalk.cyan(_0x4b825b);
  console.clear();
  console.log(_0x5abdd5);
}
displayBanner();
let versionFetchInProgress = false;
let retryFetchTimeout = null;
async function fetchVersion() {
  if (versionFetchInProgress) {
    return;
  }
  versionFetchInProgress = true;
  try {
    const _0x1ef27c = await fetch("https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json");
    const _0x2b2be8 = await _0x1ef27c.json();
    return _0x2b2be8.version;
  } catch (_0x2eb9c3) {
    console.log("Error fetching version:", _0x2eb9c3.message);
    retryFetchTimeout = setTimeout(() => {
      versionFetchInProgress = false;
      fetchVersion();
    }, 5000);
    return [2, 3000, 1017531287];
  } finally {
    versionFetchInProgress = false;
  }
}
async function startShoNhe() {
  const {
    state: _0x5c24e5,
    saveCreds: _0x11e612
  } = await useMultiFileAuthState(session);
  const _0xfae49c = makeWASocket({
    printQRInTerminal: !usePairingCode,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    patchMessageBeforeSending: _0x1e6aaf => {
      const _0x5592cb = !!_0x1e6aaf.buttonsMessage || !!_0x1e6aaf.templateMessage || !!_0x1e6aaf.listMessage;
      if (_0x5592cb) {
        _0x1e6aaf = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {}
              },
              ..._0x1e6aaf
            }
          }
        };
      }
      return _0x1e6aaf;
    },
    version: await fetchVersion(),
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    logger: pino({
      level: "fatal"
    }),
    auth: {
      creds: _0x5c24e5.creds,
      keys: makeCacheableSignalKeyStore(_0x5c24e5.keys, pino().child({
        level: "silent",
        stream: "store"
      }))
    }
  });
  if (!_0xfae49c.authState.creds.registered) {
    console.clear();
    console.log(chalk.bgBlack.redBright.bold("\n\nðŸ’€ [AKSES TERBATAS] ðŸ’€"));
    console.log(chalk.bgBlack.greenBright.bold("=============================================="));
    await new Promise(_0x255598 => setTimeout(_0x255598, 1500));
    console.log(chalk.cyan.bold("\nðŸ” Sistem Deteksi: Autentikasi Diperlukan..."));
    await new Promise(_0x43d02e => setTimeout(_0x43d02e, 1000));
    const _0x182a56 = await question(chalk.yellowBright.bold("\nâš ï¸ Masukkan Nomor Whatsapp (Awali dengan 62):\n"));
    console.log(chalk.blueBright.bold("\nðŸ“ž Memproses nomor..."));
    await new Promise(_0x434dd5 => setTimeout(_0x434dd5, 1500));
    const _0x42b33e = await _0xfae49c.requestPairingCode(_0x182a56.trim());
    await new Promise(_0x735980 => setTimeout(_0x735980, 2000));
    console.log(chalk.bgBlack.whiteBright.bold("\nðŸ”“ Kode Pairing Bot Whatsapp kamu:"));
    console.log(chalk.bgBlack.red.bold("ðŸ’¬ " + _0x42b33e));
    console.log(chalk.green.bold("\nðŸš€ Siap untuk melanjutkan koneksi..."));
    console.log(chalk.magenta.bold("==============================================\n"));
  }
  _0xfae49c.ev.on("connection.update", async _0x5ef42c => {
    const {
      connection: _0x5d6c5d,
      lastDisconnect: _0x2c1e86
    } = _0x5ef42c;
    if (_0x5d6c5d === "close") {
      let _0x285d58 = new Boom(_0x2c1e86?.error)?.output.statusCode;
      if (_0x285d58 === DisconnectReason.badSession) {
        console.log("âŒ Aduh, sesi-nya bermasalah nih, Kak! Mungkin ada yang salah, coba hapus sesi dulu dan coba lagi deh~ ðŸ› ï¸");
        process.exit();
      } else if (_0x285d58 === DisconnectReason.connectionClosed) {
        console.log("ðŸ”Œ Yahh, koneksinya putus... Mungkin memang nggak jodoh. Sabar ya, shoNhe coba sambungin lagi kalau sempat. ðŸ”„");
        startShoNhe();
      } else if (_0x285d58 === DisconnectReason.connectionLost) {
        console.log("ðŸ“¡ Oops, koneksi ke server hilang, Kak! Mungkin servernya juga butuh istirahat. Tunggu bentar, shoNhe coba sambungin lagi ya~ ðŸš€");
        startShoNhe();
      } else if (_0x285d58 === DisconnectReason.connectionReplaced) {
        console.log("ðŸ”„ Hmm, sesi ini kayaknya lagi dipakai di tempat lain deh... Coba restart bot-nya ya, Kak, siapa tahu bisa lebih â€œcerdasâ€ setelah itu. ðŸ’»");
        process.exit();
      } else if (_0x285d58 === DisconnectReason.loggedOut) {
        console.log("ðŸšª Kak, perangkatnya udah keluar... Mungkin udah kapok. Hapus folder sesi terus scan QR lagi, semoga kali ini berhasil. ðŸ“²");
        process.exit();
      } else if (_0x285d58 === DisconnectReason.restartRequired) {
        console.log("ðŸ”„ Sebentar ya, shoNhe lagi mulai ulang koneksinya, semoga kali ini gak putus-putus lagi. â™»ï¸");
        startShoNhe();
      } else if (_0x285d58 === DisconnectReason.timedOut) {
        console.log("â³ Hmm, koneksinya timeout nih, Kak! Mungkin sudah capek. shoNhe coba sambungin ulang, semoga nggak lama lagi. ðŸŒ");
        startShoNhe();
      } else {
        console.log("â“ Eh, alasan disconnect-nya gak jelas nih, Kak... (" + _0x285d58 + " | " + _0x5d6c5d + ") ðŸ¤” Mungkin servernya juga bingung. Tenang aja, shoNhe coba sambungin lagi, semoga berhasil. ðŸ’ª");
        startShoNhe();
      }
    } else if (_0x5d6c5d === "open") {
      console.clear();
      console.log(chalk.bgBlack.greenBright.bold("\n\nðŸš€ [SISTEM TERKONEKSI DENGAN SEMPURNA] ðŸš€"));
      console.log(chalk.bgBlack.magenta.bold("=============================================="));
      await new Promise(_0x5e1156 => setTimeout(_0x5e1156, 1500));
      console.log(chalk.cyanBright.bold("\nðŸ”‘ Koneksi berhasil dibuka..."));
      await new Promise(_0x2f1df8 => setTimeout(_0x2f1df8, 1000));
      console.log(chalk.white.bold("\nðŸŽ‰ Terhubung dengan sistem ke nomor:"), chalk.greenBright.bold(JSON.stringify(_0xfae49c.user, null, 2)));
      await new Promise(_0x3db182 => setTimeout(_0x3db182, 1500));
      console.log(chalk.green.bold("\nâœ… Semua modul telah siap. Bot siap dijalankan.\nJangan lupa support kami ya @shychyy & @NHEBotx\nwa Sychyy: wa.me/62882008702155\nwa NHEBotx: wa.me/6288989971490"));
      console.log(chalk.blueBright.bold("ðŸ”¥ Koneksi stabil. Eksekusi dimulai... ðŸš€\n\nINFO GROUP&CHðŸ§¾:\nChannel WhatsAppâ•\nhttps://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e\nGroup WhatsApp â•\nhttps://chat.whatsapp.com/GQ5Gp0eSeDS6dPBYeHE6kf"));
      console.log(chalk.bgBlack.magenta.bold("KALO DAPET SCNYA GRATIS. MINIM GAUSA DIJUAL KONTOL.\nSORRY SCNYA KE ENC SEBAGIAN.\n ANTI BACKDORâ•\nBackdor khusus orang miskin yg ga punya otakðŸ¤ðŸ»âš ï¸\nKLO BACKDOR MUNGKIN AUTHOR SC BUKAN LAGI @SHO(sychyy/yuda) / @NHEBOTX(tngx)"));
      const _0x12b7c8 = "0029VaeLhnOAojYqhmXDX90V";
      const _0x443f8e = "0029Vb0hVrzFSAt0OV7fnI2B";
      const _0x466b62 = "0029Vaw0AGCEQIarHspllG1i";
      await sleep(3000);
  /*    const _0x340440 = await _0xfae49c.newsletterMetadata("invite", _0x12b7c8);
      const _0x588038 = await _0xfae49c.newsletterMetadata("invite", _0x443f8e);
      const _0x2e501e = await _0xfae49c.newsletterMetadata("invite", _0x466b62);
      await sleep(3000);
      await _0xfae49c.newsletterFollow(_0x340440.id);
      await sleep(3000);
      await _0xfae49c.newsletterFollow(_0x588038.id);
      await sleep(3000);
      await _0xfae49c.newsletterFollow(_0x2e501e.id);*/
    }
  });
  _0xfae49c.ev.on("creds.update", _0x11e612);
  _0xfae49c.ev.on("messages.upsert", () => {});
  _0xfae49c.ev.on("group-participants.update", async _0xf0973c => {
    if (welcome) {
      try {
        let _0x3531a4 = await _0xfae49c.groupMetadata(_0xf0973c.id);
        let _0x189531 = _0xf0973c.participants;
        for (let _0x25b16f of _0x189531) {
          let _0xd723ec;
          let _0x56b38b;
          try {
            _0xd723ec = await _0xfae49c.profilePictureUrl(_0x25b16f, "image");
          } catch (_0x1e8da8) {
            _0xd723ec = "https://files.catbox.moe/vxymmw.jpg";
          }
          try {
            _0x56b38b = await _0xfae49c.profilePictureUrl(_0xf0973c.id, "image");
          } catch (_0x45117a) {
            _0x56b38b = "https://files.catbox.moe/vxymmw.jpg";
          }
          let _0x15861b = "@" + _0x25b16f.split("@")[0];
          if (_0xf0973c.action === "add") {
            let _0x28167b = "âœ¨ *Selamat Datang, @" + _0x25b16f.split("@")[0] + "!* âœ¨  \n\nHai! Senang kamu bergabung di grup ini. Semoga kamu betah dan bisa berbagi serta berdiskusi dengan nyaman.  \n\nðŸ“Œ *Sebelum mulai, perhatikan beberapa hal berikut:*  \n1ï¸âƒ£ Sapa dan kenalan dengan member lain.  \n2ï¸âƒ£ Baca deskripsi grup untuk tahu aturan dan tujuan komunitas ini.  \n3ï¸âƒ£ Jaga sopan santun dan hargai pendapat orang lain.  \n\nJika ada pertanyaan, jangan ragu untuk bertanya. Selamat berdiskusi dan semoga bermanfaat! ðŸš€";
            _0xfae49c.sendMessage(_0xf0973c.id, {
              mentionedJid: [_0x25b16f],
              image: {
                url: _0xd723ec
              },
              caption: _0x28167b,
              footer: namabot,
              buttons: [{
                buttonId: "menu",
                buttonText: {
                  displayText: "MENU ðŸ§¾"
                }
              }, {
                buttonId: "register",
                buttonText: {
                  displayText: "REGIS ðŸ”§"
                }
              }],
              mentionedJid: [_0x25b16f],
              viewOnce: true
            });
          } else if (_0xf0973c.action === "remove") {
            let _0x5639c7 = "ðŸ˜¢ *Selamat Tinggal, @" + _0x25b16f.split("@")[0] + "!* ðŸ‘‹  \n\nTerima kasih telah menjadi bagian dari grup ini. Kami menghargai waktu, kontribusi, dan kebersamaan yang telah kamu berikan di sini.  \n\nâœ¨ *Semoga sukses dalam perjalanan berikutnya!*  \nDi mana pun kamu berada, semoga selalu diberikan kebahagiaan, kesehatan, dan keberuntungan.  \n\nJika suatu saat ingin kembali, pintu selalu terbuka untukmu. Sampai jumpa lagi di lain kesempatan! ðŸ’";
            _0xfae49c.sendMessage(_0xf0973c.id, {
              image: {
                url: _0xd723ec
              },
              caption: _0x5639c7,
              footer: namabot,
              buttons: [{
                buttonId: "owner",
                buttonText: {
                  displayText: "OWNER ðŸ‘½"
                }
              }, {
                buttonId: "menu",
                buttonText: {
                  displayText: "MENU ðŸ’¬"
                }
              }, {
                buttonId: "register",
                buttonText: {
                  displayText: "REGIS âš¡"
                }
              }],
              mentionedJid: [_0x25b16f],
              viewOnce: true
            });
          }
        }
      } catch (_0x4aadb0) {
        console.error("âŒ Terjadi kesalahan di fitur auto send join/leave:", _0x4aadb0);
      }
    }
  });
  _0xfae49c.ev.on("call", async _0x541a93 => {
    if (anticall) {
      let _0xa7a9bc = await _0xfae49c.decodeJid(_0xfae49c.user.id);
      console.log(_0x541a93);
      for (let _0x2f4167 of _0x541a93) {
        if (!_0x2f4167.isGroup && _0x2f4167.status === "offer") {
          try {
            let _0x3bf115 = _0x2f4167.isVideo ? "ðŸ“¹ Video Call" : "ðŸ“ž Voice Call";
            let _0x145bde = "âš ï¸ *Ups, shoNhe gak bisa menerima panggilan " + _0x3bf115 + ".*\n\nMaaf, @" + _0x2f4167.from.split("@")[0] + ", panggilan seperti ini cuma bikin bot error. Kamu akan diblokir sementara.\n\nðŸ“² Hubungi *Owner* kalau ingin membuka blokir, tapi gak ada jaminan bakal dibuka.";
            await _0xfae49c.rejectCall(_0x2f4167.id, _0x2f4167.from);
            await _0xfae49c.sendMessage(_0x2f4167.from, {
              text: _0x145bde,
              mentions: [_0x2f4167.from]
            });
            await _0xfae49c.sendMessage(_0x2f4167.from, {
              contacts: {
                displayName: "Owner",
                contacts: contacts
              }
            });
            await sleep(5000);
            await _0xfae49c.updateBlockStatus(_0x2f4167.from, "block");
            console.log("ðŸ”’ Pengguna " + _0x2f4167.from + " berhasil diblokir karena melakukan panggilan.");
          } catch (_0xd3e870) {
            console.error("âŒ Gagal memproses panggilan dari " + _0x2f4167.from + ":", _0xd3e870);
          }
        }
      }
    }
  });
  _0xfae49c.ev.on("messages.upsert", async _0x34c82a => {
    if (autoswview) {
      const _0x76e499 = _0x34c82a.messages[0];
      if (_0x76e499.key && _0x76e499.key.remoteJid === "status@broadcast") {
        try {
          await _0xfae49c.readMessages([_0x76e499.key]);
          const _0x3a620a = _0x76e499.message?.extendedTextMessage?.text || null;
          const _0x397295 = _0x76e499.message?.imageMessage?.mimetype || _0x76e499.message?.videoMessage?.mimetype || _0x76e499.message?.audioMessage?.mimetype || _0x76e499.message?.documentMessage?.mimetype || null;
          let _0x6d298a = "https://files.catbox.moe/vxymmw.jpg";
          try {
            _0x6d298a = await _0xfae49c.profilePictureUrl(_0x76e499.key.participant, "image");
          } catch (_0x21d805) {
            console.warn("âš ï¸ Tidak dapat mengambil foto profil, menggunakan foto default.");
          }
          let _0x7c6722 = "";
          if (!_0x3a620a && !_0x397295) {
            _0x7c6722 = "ðŸ—‘ï¸ *Status telah dihapus oleh pengguna!*\n\nðŸ•’ *Waktu:* " + moment.tz("Asia/Jakarta").format("HH:mm:ss DD/MM/YYYY") + "\nðŸ‘¤ *Dari:* " + (_0x76e499.pushName || "Guest") + "\nðŸ“± *Nomor:* " + _0x76e499.key.participant.split("@")[0];
          } else {
            _0x7c6722 = ("ðŸ“¢ *Bot telah melihat status baru!*\n\nðŸ•’ *Waktu:* " + moment.tz("Asia/Jakarta").format("HH:mm:ss DD/MM/YYYY") + "\nðŸ‘¤ *Dari:* " + (_0x76e499.pushName || "Guest") + "\nðŸ“± *Nomor:* " + _0x76e499.key.participant.split("@")[0] + "\nðŸ“ *Caption:* " + (_0x3a620a || "Tidak ada caption") + "\nðŸ—‚ï¸ *Mime Type:* " + (_0x397295 || "Tidak ada mimeType")).trim();
          }
          await _0xfae49c.sendMessage(creator, {
            image: {
              url: _0x6d298a
            },
            caption: _0x7c6722
          });
          console.log("âœ… Status berhasil dikirim ke owner dengan foto profil & informasi.");
        } catch (_0x31eb20) {
          console.error("âŒ Error saat memproses status:", _0x31eb20);
        }
      }
    }
  });
  _0xfae49c.ev.on("group-participants.update", async _0x56e9e0 => {
    if (adminevent) {
      console.log(_0x56e9e0);
      try {
        let _0x586f25 = _0x56e9e0.participants;
        for (let _0x529127 of _0x586f25) {
          try {
            ppuser = await _0xfae49c.profilePictureUrl(_0x529127, "image");
          } catch (_0x1a5466) {
            ppuser = "https://files.catbox.moe/vxymmw.jpg";
          }
          try {
            ppgroup = await _0xfae49c.profilePictureUrl(_0x56e9e0.id, "image");
          } catch (_0x4daea7) {
            ppgroup = "https://files.catbox.moe/vxymmw.jpg";
          }
          if (_0x56e9e0.action == "promote") {
            const _0x9fcc73 = moment.tz("Asia/Jakarta").format("HH:mm:ss");
            const _0x4ee301 = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");
            body = "ðŸŽ‰ *Selamat @" + _0x529127.split("@")[0] + "!* Kamu baru saja dipromosikan menjadi *admin* ðŸ¥³\n\nWaktu: " + _0x9fcc73 + "\nTanggal: " + _0x4ee301;
            _0xfae49c.sendMessage(_0x56e9e0.id, {
              text: body,
              contextInfo: {
                mentionedJid: [_0x529127],
                externalAdReply: {
                  shoNhewAdAttribution: true,
                  containsAutoReply: true,
                  title: "Pemberitahuan Admin",
                  body: "Selamat Bergabung!",
                  previewType: "PHOTO",
                  thumbnailUrl: ppgroup,
                  thumbnail: "",
                  sourceUrl: "" + wagc
                }
              }
            });
          } else if (_0x56e9e0.action == "demote") {
            const _0x2259b1 = moment.tz("Asia/Jakarta").format("HH:mm:ss");
            const _0x2dd5b7 = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");
            body = "ðŸ˜¬ *Ups, @" + _0x529127.split("@")[0] + "!* Kamu telah *di-demote* dari posisi *admin*.\n\nWaktu: " + _0x2259b1 + "\nTanggal: " + _0x2dd5b7;
            _0xfae49c.sendMessage(_0x56e9e0.id, {
              text: body,
              contextInfo: {
                mentionedJid: [_0x529127],
                externalAdReply: {
                  shoNhewAdAttribution: true,
                  containsAutoReply: true,
                  title: "Pemberitahuan Admin",
                  body: "Ada perubahan status admin",
                  previewType: "PHOTO",
                  thumbnailUrl: ppgroup,
                  thumbnail: "",
                  sourceUrl: "" + wagc
                }
              }
            });
          }
        }
      } catch (_0x53f7af) {
        console.log(_0x53f7af);
      }
    }
  });
  _0xfae49c.ev.on("groups.update", async _0x2f0499 => {
    if (groupevent) {
      try {
        let _0x1c2de4 = "https://files.catbox.moe/vxymmw.jpg";
        try {
          _0x1c2de4 = await _0xfae49c.profilePictureUrl(_0x2f0499[0].id, "image");
        } catch (_0x38b184) {
          console.warn("âš ï¸ Gagal dapetin foto grup, pake gambar default aja ya.");
        }
        const _0x562f56 = _0x2f0499[0];
        if (_0x562f56.announce === true) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "ðŸ”’ *Gerbang Grup Ditutup Sementara!* ðŸ”’\n\nSekarang cuma *admin* yang bisa ngobrol di sini. Nunggu aja dulu sampai admin buka lagi."
          });
        } else if (_0x562f56.announce === false) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "ðŸ”“ *Gerbang Grup Terbuka Kembali* ðŸ”“\n\nSekarang semua anggota bisa ngobrol lagi di sini. Silakan ikut berpartisipasi."
          });
        }
        if (_0x562f56.restrict === true) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "ðŸ” *Info Grup Dikunci* ðŸ”\n\nSaat ini hanya *admin* yang bisa mengedit info grup. Mohon tetap tertib."
          });
        } else if (_0x562f56.restrict === false) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "ðŸ”“ *Info Grup Dibuka* ðŸ”“\n\nSemua anggota bisa mengedit info grup. Mohon untuk tetap sopan dan bijak."
          });
        }
        if (_0x562f56.desc) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "ðŸ“ *Deskripsi Baru Nih* ðŸ“\n\nGrup ini punya deskripsi baru lho:\n\n" + _0x562f56.desc + "\n\nCek aja, semoga bermanfaat! ðŸŒ¿"
          });
        }
        if (_0x562f56.subject) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "ðŸ–Šï¸ *Nama Grup Baru* ðŸ–Šï¸\n\nSekarang grup kita punya nama baru:\n\n*" + _0x562f56.subject + "*\n\nSemoga makin nyaman di sini! ðŸŒŸ"
          });
        }
        if (_0x562f56.memberAddMode === true) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "ðŸ›¡ï¸ *Tambah Anggota? Tertutup Dulu* ðŸ›¡ï¸\n\nSekarang cuma *admin* yang bisa nambah anggota baru. Harap patuhi aturan ya. ðŸŒ±"
          });
        } else if (_0x562f56.memberAddMode === false) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "âœ… *Tambah Anggota Bebas* âœ…\n\nSekarang semua anggota bisa ngajak teman-temannya masuk grup ini. Yuk, makin ramai! ðŸŒ¿"
          });
        }
        if (_0x562f56.joinApprovalMode === true) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "ðŸ›¡ï¸ *Pintu Masuk Dijaga Ketat* ðŸ›¡ï¸\n\nCalon anggota baru harus dapet *persetujuan admin* dulu ya sebelum bisa gabung. Tetap aman dan tertib! ðŸŒ±"
          });
        } else if (_0x562f56.joinApprovalMode === false) {
          await sleep(2000);
          _0xfae49c.sendMessage(_0x562f56.id, {
            text: "âœ… *Pintu Masuk Terbuka Lebar* âœ…\n\nAnggota baru bisa langsung gabung tanpa nunggu persetujuan admin. Yuk, tambah ramai di sini! ðŸŒŸ"
          });
        }
      } catch (_0x345bb7) {
        console.error("âŒ Oops, ada yang error waktu proses pembaruan grup:", _0x345bb7);
      }
    }
  });
  _0xfae49c.ev.on("messages.upsert", async _0x122fe1 => {
    try {
      msg = _0x122fe1.messages[0];
      if (!msg.message) {
        return;
      }
      msg.message = Object.keys(msg.message)[0] === "ephemeralMessage" ? msg.message.ephemeralMessage.message : msg.message;
      if (msg.key && msg.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!_0xfae49c.public && !msg.key.fromMe && _0x122fe1.type === "notify") {
        return;
      }
      if (msg.key.id.startsWith("") && msg.key.id.length === 16) {
        return;
      }
      if (msg.key.id.startsWith("BAE5")) {
        return;
      }
      m = smsg(_0xfae49c, msg, store);
      require("./case")(_0xfae49c, m, _0x122fe1, store);
    } catch (_0x4abad4) {
      console.log(_0x4abad4);
    }
  });
  const _0xb78b05 = async (_0x206215, _0x120b68, _0x2688f4) => {
    return new Promise(async (_0x9e018, _0x4bc2b8) => {
      try {
        const _0xd53d3f = require("jimp");
        const _0x576487 = await _0xd53d3f.read(_0x206215);
        const _0x32a614 = await _0x576487.resize(_0x120b68, _0x2688f4).getBufferAsync(_0xd53d3f.MIME_JPEG);
        _0x9e018(_0x32a614);
      } catch (_0x489edd) {
        _0x4bc2b8(_0x489edd);
      }
    });
  };
  _0xfae49c.decodeJid = _0x5b7a61 => {
    if (!_0x5b7a61) {
      return _0x5b7a61;
    }
    if (/:\d+@/gi.test(_0x5b7a61)) {
      let _0x1faacb = jidDecode(_0x5b7a61) || {};
      return _0x1faacb.user && _0x1faacb.server && _0x1faacb.user + "@" + _0x1faacb.server || _0x5b7a61;
    } else {
      return _0x5b7a61;
    }
  };
  _0xfae49c.ev.on("contacts.update", _0x5db969 => {
    for (let _0x5927c8 of _0x5db969) {
      let _0x130c36 = _0xfae49c.decodeJid(_0x5927c8.id);
      if (store && store.contacts) {
        store.contacts[_0x130c36] = {
          id: _0x130c36,
          name: _0x5927c8.notify
        };
      }
    }
  });
  _0xfae49c.getName = (_0x442201, _0x497f8f = false) => {
    id = _0xfae49c.decodeJid(_0x442201);
    _0x497f8f = _0xfae49c.withoutContact || _0x497f8f;
    let _0x1e6d55;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x2ddf54 => {
        _0x1e6d55 = store.contacts[id] || {};
        if (!_0x1e6d55.name && !_0x1e6d55.subject) {
          _0x1e6d55 = _0xfae49c.groupMetadata(id) || {};
        }
        _0x2ddf54(_0x1e6d55.name || _0x1e6d55.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    } else {
      _0x1e6d55 = id === "0@s.whatsapp.net" ? {
        id: id,
        name: "WhatsApp"
      } : id === _0xfae49c.decodeJid(_0xfae49c.user.id) ? _0xfae49c.user : store.contacts[id] || {};
    }
    return (_0x497f8f ? "" : _0x1e6d55.name) || _0x1e6d55.subject || _0x1e6d55.verifiedName || PhoneNumber("+" + _0x442201.replace("@s.whatsapp.net", "")).getNumber("international");
  };
  _0xfae49c.sendContact = async (_0xe87272, _0x5b17d0, _0x2c5bee = "", _0x32964a = {}) => {
    let _0x3435f9 = [];
    for (let _0x4401d9 of _0x5b17d0) {
      _0x3435f9.push({
        displayName: await _0xfae49c.getName(_0x4401d9),
        vcard: "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0xfae49c.getName(_0x4401d9)) + "\nFN:" + (await _0xfae49c.getName(_0x4401d9)) + "\nitem1.TEL;waid=" + _0x4401d9.split("@")[0] + ":" + _0x4401d9.split("@")[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
      });
    }
    _0xfae49c.sendMessage(_0xe87272, {
      contacts: {
        displayName: _0x3435f9.length + " Contact",
        contacts: _0x3435f9
      },
      ..._0x32964a
    }, {
      quoted: _0x2c5bee
    });
  };
  _0xfae49c.public = true;
  _0xfae49c.serializeM = _0xd7c8e5 => smsg(_0xfae49c, _0xd7c8e5, store);
  _0xfae49c.sendText = (_0x191be2, _0x547404, _0x3290e7 = "", _0x17d862) => _0xfae49c.sendMessage(_0x191be2, {
    text: _0x547404,
    ..._0x17d862
  }, {
    quoted: _0x3290e7,
    ..._0x17d862
  });
  _0xfae49c.sendImage = async (_0x56199c, _0x51750c, _0x229794 = "", _0x1c79ab = "", _0x5b0444) => {
    let _0x3a80fd = Buffer.isBuffer(_0x51750c) ? _0x51750c : /^data:.*?\/.*?;base64,/i.test(_0x51750c) ? Buffer.from(_0x51750c.split`,`[1], "base64") : /^https?:\/\//.test(_0x51750c) ? await await getBuffer(_0x51750c) : fs.existsSync(_0x51750c) ? fs.readFileSync(_0x51750c) : Buffer.alloc(0);
    return await _0xfae49c.sendMessage(_0x56199c, {
      image: _0x3a80fd,
      caption: _0x229794,
      ..._0x5b0444
    }, {
      quoted: _0x1c79ab
    });
  };
  _0xfae49c.sendTextWithMentions = async (_0x2d4825, _0x1fce6f, _0x15a609, _0x15e27f = {}) => _0xfae49c.sendMessage(_0x2d4825, {
    text: _0x1fce6f,
    mentions: [..._0x1fce6f.matchAll(/@(\d{0,16})/g)].map(_0x74fa1d => _0x74fa1d[1] + "@s.whatsapp.net"),
    ..._0x15e27f
  }, {
    quoted: _0x15a609
  });
  _0xfae49c.sendImageAsSticker = async (_0x387865, _0x85969a, _0x18d7d4, _0x1c9eac = {}) => {
    let _0x264c1b = Buffer.isBuffer(_0x85969a) ? _0x85969a : /^data:.*?\/.*?;base64,/i.test(_0x85969a) ? Buffer.from(_0x85969a.split`,`[1], "base64") : /^https?:\/\//.test(_0x85969a) ? await await getBuffer(_0x85969a) : fs.existsSync(_0x85969a) ? fs.readFileSync(_0x85969a) : Buffer.alloc(0);
    let _0x2cf17e;
    if (_0x1c9eac && (_0x1c9eac.packname || _0x1c9eac.author)) {
      _0x2cf17e = await writeExifImg(_0x264c1b, _0x1c9eac);
    } else {
      _0x2cf17e = await imageToWebp(_0x264c1b);
    }
    await _0xfae49c.sendMessage(_0x387865, {
      sticker: {
        url: _0x2cf17e
      },
      ..._0x1c9eac
    }, {
      quoted: _0x18d7d4
    });
    return _0x2cf17e;
  };
  _0xfae49c.sendAudio = async (_0x47efab, _0x17b6eb, _0xb16b7f = "", _0x50549d = false, _0x320de1) => {
    let _0x25d0af = Buffer.isBuffer(_0x17b6eb) ? _0x17b6eb : /^data:.*?\/.*?;base64,/i.test(_0x17b6eb) ? Buffer.from(_0x17b6eb.split`,`[1], "base64") : /^https?:\/\//.test(_0x17b6eb) ? await await getBuffer(_0x17b6eb) : fs.existsSync(_0x17b6eb) ? fs.readFileSync(_0x17b6eb) : Buffer.alloc(0);
    return await _0xfae49c.sendMessage(_0x47efab, {
      audio: _0x25d0af,
      ptt: _0x50549d,
      ..._0x320de1
    }, {
      quoted: _0xb16b7f
    });
  };
  _0xfae49c.sendVideo = async (_0x1131ec, _0x41e5a6, _0x30d4f1 = "", _0x1d2f75 = "", _0x43aef4 = false, _0x3faaa4) => {
    let _0x47eff3 = Buffer.isBuffer(_0x41e5a6) ? _0x41e5a6 : /^data:.*?\/.*?;base64,/i.test(_0x41e5a6) ? Buffer.from(_0x41e5a6.split`,`[1], "base64") : /^https?:\/\//.test(_0x41e5a6) ? await await getBuffer(_0x41e5a6) : fs.existsSync(_0x41e5a6) ? fs.readFileSync(_0x41e5a6) : Buffer.alloc(0);
    return await _0xfae49c.sendMessage(_0x1131ec, {
      video: _0x47eff3,
      caption: _0x30d4f1,
      gifPlayback: _0x43aef4,
      ..._0x3faaa4
    }, {
      quoted: _0x1d2f75
    });
  };
  _0xfae49c.sendVideoAsSticker = async (_0x539f6a, _0x5ab914, _0x2b9cdc, _0x28fa99 = {}) => {
    let _0x2a50f0 = Buffer.isBuffer(_0x5ab914) ? _0x5ab914 : /^data:.*?\/.*?;base64,/i.test(_0x5ab914) ? Buffer.from(_0x5ab914.split`,`[1], "base64") : /^https?:\/\//.test(_0x5ab914) ? await await getBuffer(_0x5ab914) : fs.existsSync(_0x5ab914) ? fs.readFileSync(_0x5ab914) : Buffer.alloc(0);
    let _0x1feb9c;
    if (_0x28fa99 && (_0x28fa99.packname || _0x28fa99.author)) {
      _0x1feb9c = await writeExifVid(_0x2a50f0, _0x28fa99);
    } else {
      _0x1feb9c = await videoToWebp(_0x2a50f0);
    }
    await _0xfae49c.sendMessage(_0x539f6a, {
      sticker: {
        url: _0x1feb9c
      },
      ..._0x28fa99
    }, {
      quoted: _0x2b9cdc
    });
    return _0x1feb9c;
  };
  _0xfae49c.sendFileUrl = async (_0x1b67ee, _0x5c3a07, _0x4b943e, _0x21f074, _0x5c6f19 = {}) => {
    let _0x4340c1 = "";
    let _0x43dfe1 = await axios.head(_0x5c3a07);
    _0x4340c1 = _0x43dfe1.headers["content-type"];
    if (_0x4340c1.split("/")[1] === "gif") {
      return _0xfae49c.sendMessage(_0x1b67ee, {
        video: await getBuffer(_0x5c3a07),
        caption: _0x4b943e,
        gifPlayback: true,
        ..._0x5c6f19
      }, {
        quoted: _0x21f074,
        ..._0x5c6f19
      });
    }
    let _0x33b1ce = _0x4340c1.split("/")[0] + "Message";
    if (_0x4340c1 === "application/pdf") {
      return _0xfae49c.sendMessage(_0x1b67ee, {
        document: await getBuffer(_0x5c3a07),
        mimetype: "application/pdf",
        caption: _0x4b943e,
        ..._0x5c6f19
      }, {
        quoted: _0x21f074,
        ..._0x5c6f19
      });
    }
    if (_0x4340c1.split("/")[0] === "image") {
      return _0xfae49c.sendMessage(_0x1b67ee, {
        image: await getBuffer(_0x5c3a07),
        caption: _0x4b943e,
        ..._0x5c6f19
      }, {
        quoted: _0x21f074,
        ..._0x5c6f19
      });
    }
    if (_0x4340c1.split("/")[0] === "video") {
      return _0xfae49c.sendMessage(_0x1b67ee, {
        video: await getBuffer(_0x5c3a07),
        caption: _0x4b943e,
        mimetype: "video/mp4",
        ..._0x5c6f19
      }, {
        quoted: _0x21f074,
        ..._0x5c6f19
      });
    }
    if (_0x4340c1.split("/")[0] === "audio") {
      return _0xfae49c.sendMessage(_0x1b67ee, {
        audio: await getBuffer(_0x5c3a07),
        caption: _0x4b943e,
        mimetype: "audio/mpeg",
        ..._0x5c6f19
      }, {
        quoted: _0x21f074,
        ..._0x5c6f19
      });
    }
  };
  _0xfae49c.getFile = async (_0xd23c4e, _0x53db30) => {
    let _0x5ccd70;
    let _0x4186b0 = Buffer.isBuffer(_0xd23c4e) ? _0xd23c4e : /^data:.*?\/.*?;base64,/i.test(_0xd23c4e) ? Buffer.from(_0xd23c4e.split`,`[1], "base64") : /^https?:\/\//.test(_0xd23c4e) ? await (_0x5ccd70 = await getBuffer(_0xd23c4e)) : fs.existsSync(_0xd23c4e) ? (filename = _0xd23c4e, fs.readFileSync(_0xd23c4e)) : typeof _0xd23c4e === "string" ? _0xd23c4e : Buffer.alloc(0);
    let _0x3b8582 = (await FileType.fromBuffer(_0x4186b0)) || {
      mime: "application/octet-stream",
      ext: ".bin"
    };
    filename = path.join(__filename, "../src/" + new Date() * 1 + "." + _0x3b8582.ext);
    if (_0x4186b0 && _0x53db30) {
      fs.promises.writeFile(filename, _0x4186b0);
    }
    return {
      res: _0x5ccd70,
      filename: filename,
      size: await getSizeMedia(_0x4186b0),
      ..._0x3b8582,
      data: _0x4186b0
    };
  };
  _0xfae49c.sendFile = async (_0x14213a, _0xbae2b1, _0x47642f = "", _0x573c45 = "", _0x1439cd, _0xc5b51f = false, _0x1daff9 = {}) => {
    let _0x30ee60 = await _0xfae49c.getFile(_0xbae2b1, true);
    let {
      res: _0x2cb9c0,
      data: _0x41e0d8,
      filename: _0x27cfc4
    } = _0x30ee60;
    if (_0x2cb9c0 && _0x2cb9c0.status !== 200 || _0x41e0d8.length <= 65536) {
      try {
        throw {
          json: JSON.parse(_0x41e0d8.toString())
        };
      } catch (_0x97df75) {
        if (_0x97df75.json) {
          throw _0x97df75.json;
        }
      }
    }
    let _0xf3c8e2 = {
      filename: _0x47642f
    };
    if (_0x1439cd) {
      _0xf3c8e2.quoted = _0x1439cd;
    }
    if (!_0x30ee60) {
      _0x1daff9.asDocument = true;
    }
    let _0x49e026 = "";
    let _0x37901e = _0x30ee60.mime;
    let _0x11e93d;
    if (/webp/.test(_0x30ee60.mime) || /image/.test(_0x30ee60.mime) && _0x1daff9.asSticker) {
      _0x49e026 = "sticker";
    } else if (/image/.test(_0x30ee60.mime) || /webp/.test(_0x30ee60.mime) && _0x1daff9.asImage) {
      _0x49e026 = "image";
    } else if (/video/.test(_0x30ee60.mime)) {
      _0x49e026 = "video";
    } else if (/audio/.test(_0x30ee60.mime)) {
      _0x11e93d = await (_0xc5b51f ? toPTT : toAudio)(_0x41e0d8, _0x30ee60.ext);
      _0x41e0d8 = _0x11e93d.data;
      _0x27cfc4 = _0x11e93d.filename;
      _0x49e026 = "audio";
      _0x37901e = "audio/ogg; codecs=opus";
    } else {
      _0x49e026 = "document";
    }
    if (_0x1daff9.asDocument) {
      _0x49e026 = "document";
    }
    delete _0x1daff9.asSticker;
    delete _0x1daff9.asLocation;
    delete _0x1daff9.asVideo;
    delete _0x1daff9.asDocument;
    delete _0x1daff9.asImage;
    let _0x235809 = {
      ..._0x1daff9,
      caption: _0x573c45,
      ptt: _0xc5b51f,
      [_0x49e026]: {
        url: _0x27cfc4
      },
      mimetype: _0x37901e
    };
    let _0x44eab1;
    try {
      _0x44eab1 = await _0xfae49c.sendMessage(_0x14213a, _0x235809, {
        ..._0xf3c8e2,
        ..._0x1daff9
      });
    } catch (_0x113c52) {
      _0x44eab1 = null;
    } finally {
      if (!_0x44eab1) {
        _0x44eab1 = await _0xfae49c.sendMessage(_0x14213a, {
          ..._0x235809,
          [_0x49e026]: _0x41e0d8
        }, {
          ..._0xf3c8e2,
          ..._0x1daff9
        });
      }
      _0x41e0d8 = null;
      return _0x44eab1;
    }
  };
  _0xfae49c.cMod = (_0xfc37e1, _0x361930, _0x2ca378 = "", _0x50b685 = _0xfae49c.user.id, _0x4ff740 = {}) => {
    let _0x6b8133 = Object.keys(_0x361930.message)[0];
    let _0xcd1693 = _0x6b8133 === "ephemeralMessage";
    if (_0xcd1693) {
      _0x6b8133 = Object.keys(_0x361930.message.ephemeralMessage.message)[0];
    }
    let _0x3216e = _0xcd1693 ? _0x361930.message.ephemeralMessage.message : _0x361930.message;
    let _0x4dbef6 = _0x3216e[_0x6b8133];
    if (typeof _0x4dbef6 === "string") {
      _0x3216e[_0x6b8133] = _0x2ca378 || _0x4dbef6;
    } else if (_0x4dbef6.caption) {
      _0x4dbef6.caption = _0x2ca378 || _0x4dbef6.caption;
    } else if (_0x4dbef6.text) {
      _0x4dbef6.text = _0x2ca378 || _0x4dbef6.text;
    }
    if (typeof _0x4dbef6 !== "string") {
      _0x3216e[_0x6b8133] = {
        ..._0x4dbef6,
        ..._0x4ff740
      };
    }
    if (_0x361930.key.participant) {
      _0x50b685 = _0x361930.key.participant = _0x50b685 || _0x361930.key.participant;
    } else if (_0x361930.key.participant) {
      _0x50b685 = _0x361930.key.participant = _0x50b685 || _0x361930.key.participant;
    }
    if (_0x361930.key.remoteJid.includes("@s.whatsapp.net")) {
      _0x50b685 = _0x50b685 || _0x361930.key.remoteJid;
    } else if (_0x361930.key.remoteJid.includes("@broadcast")) {
      _0x50b685 = _0x50b685 || _0x361930.key.remoteJid;
    }
    _0x361930.key.remoteJid = _0xfc37e1;
    _0x361930.key.fromMe = _0x50b685 === _0xfae49c.user.id;
    return proto.WebMessageInfo.fromObject(_0x361930);
  };
  _0xfae49c.sendMedia = async (_0x4dd5ed, _0x56637b, _0x1f26e2 = "", _0x6eb0bb = "", _0x172a0e = "", _0x26f7f3 = {}) => {
    let _0x11688d = await _0xfae49c.getFile(_0x56637b, true);
    let {
      mime: _0x2cc58c,
      ext: _0x377237,
      res: _0x43af83,
      data: _0x2dcb8f,
      filename: _0x2c6d2a
    } = _0x11688d;
    if (_0x43af83 && _0x43af83.status !== 200 || file.length <= 65536) {
      try {
        throw {
          json: JSON.parse(file.toString())
        };
      } catch (_0x5037a8) {
        if (_0x5037a8.json) {
          throw _0x5037a8.json;
        }
      }
    }
    let _0x4c50e6 = "";
    let _0x4fe035 = _0x2cc58c;
    let _0x10b80d = _0x2c6d2a;
    if (_0x26f7f3.asDocument) {
      _0x4c50e6 = "document";
    }
    if (_0x26f7f3.asSticker || /webp/.test(_0x2cc58c)) {
      let {
        writeExif: _0x425041
      } = require("./lib/scp/exif");
      let _0x23114d = {
        mimetype: _0x2cc58c,
        data: _0x2dcb8f
      };
      _0x10b80d = await _0x425041(_0x23114d, {
        packname: _0x26f7f3.packname ? _0x26f7f3.packname : global.packname,
        author: _0x26f7f3.author ? _0x26f7f3.author : global.author,
        categories: _0x26f7f3.categories ? _0x26f7f3.categories : []
      });
      await fs.promises.unlink(_0x2c6d2a);
      _0x4c50e6 = "sticker";
      _0x4fe035 = "image/webp";
    } else if (/image/.test(_0x2cc58c)) {
      _0x4c50e6 = "image";
    } else if (/video/.test(_0x2cc58c)) {
      _0x4c50e6 = "video";
    } else if (/audio/.test(_0x2cc58c)) {
      _0x4c50e6 = "audio";
    } else {
      _0x4c50e6 = "document";
    }
    await _0xfae49c.sendMessage(_0x4dd5ed, {
      [_0x4c50e6]: {
        url: _0x10b80d
      },
      caption: _0x6eb0bb,
      mimetype: _0x4fe035,
      fileName: _0x1f26e2,
      ..._0x26f7f3
    }, {
      quoted: _0x172a0e,
      ..._0x26f7f3
    });
    return fs.promises.unlink(_0x10b80d);
  };
  _0xfae49c.copyNForward = async (_0x20173a, _0x524796, _0x3c91e2 = false, _0x2fecea = {}) => {
    let _0x3dda76;
    if (_0x2fecea.readViewOnce) {
      _0x524796.message = _0x524796.message && _0x524796.message.ephemeralMessage && _0x524796.message.ephemeralMessage.message ? _0x524796.message.ephemeralMessage.message : _0x524796.message || undefined;
      _0x3dda76 = Object.keys(_0x524796.message.viewOnceMessage.message)[0];
      delete (_0x524796.message && _0x524796.message.ignore ? _0x524796.message.ignore : _0x524796.message || undefined);
      delete _0x524796.message.viewOnceMessage.message[_0x3dda76].viewOnce;
      _0x524796.message = {
        ..._0x524796.message.viewOnceMessage.message
      };
    }
    let _0x25c12c = Object.keys(_0x524796.message)[0];
    let _0x42583c = await generateForwardMessageContent(_0x524796, _0x3c91e2);
    let _0x228893 = Object.keys(_0x42583c)[0];
    let _0x15a345 = {};
    if (_0x25c12c != "conversation") {
      _0x15a345 = _0x524796.message[_0x25c12c].contextInfo;
    }
    _0x42583c[_0x228893].contextInfo = {
      ..._0x15a345,
      ..._0x42583c[_0x228893].contextInfo
    };
    const _0x164f9e = await generateWAMessageFromContent(_0x20173a, _0x42583c, _0x2fecea ? {
      ..._0x42583c[_0x228893],
      ..._0x2fecea,
      ...(_0x2fecea.contextInfo ? {
        contextInfo: {
          ..._0x42583c[_0x228893].contextInfo,
          ..._0x2fecea.contextInfo
        }
      } : {})
    } : {});
    await _0xfae49c.relayMessage(_0x20173a, _0x164f9e.message, {
      messageId: _0x164f9e.key.id
    });
    return _0x164f9e;
  };
  _0xfae49c.parseMention = (_0x11d6ad = "") => {
    return [..._0x11d6ad.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x5843b5 => _0x5843b5[1] + "@s.whatsapp.net");
  };
  _0xfae49c.downloadAndSaveMediaMessage = async (_0x4c9635, _0xd69f8d, _0x2db9e7 = true) => {
    let _0xc0561a = _0x4c9635.msg ? _0x4c9635.msg : _0x4c9635;
    let _0x514ee1 = (_0x4c9635.msg || _0x4c9635).mimetype || "";
    let _0x106f89 = _0x4c9635.mtype ? _0x4c9635.mtype.replace(/Message/gi, "") : _0x514ee1.split("/")[0];
    const _0x331ba8 = await downloadContentFromMessage(_0xc0561a, _0x106f89);
    let _0x163f93 = Buffer.from([]);
    for await (const _0x3efebe of _0x331ba8) {
      _0x163f93 = Buffer.concat([_0x163f93, _0x3efebe]);
    }
    let _0x54be7f = await FileType.fromBuffer(_0x163f93);
    let _0x10236b = _0x2db9e7 ? "./temp/" + _0xd69f8d + "." + _0x54be7f.ext : "./temp/" + _0xd69f8d;
    await fs.writeFileSync(_0x10236b, _0x163f93);
    return _0x10236b;
  };
  _0xfae49c.downloadMediaMessage = async _0x29af85 => {
    let _0x163421 = (_0x29af85.msg || _0x29af85).mimetype || "";
    let _0x494a02 = _0x29af85.mtype ? _0x29af85.mtype.replace(/Message/gi, "") : _0x163421.split("/")[0];
    const _0x2573eb = await downloadContentFromMessage(_0x29af85, _0x494a02);
    let _0x1538b3 = Buffer.from([]);
    for await (const _0x70b2f1 of _0x2573eb) {
      _0x1538b3 = Buffer.concat([_0x1538b3, _0x70b2f1]);
    }
    return _0x1538b3;
  };
  return _0xfae49c;
}
;
startShoNhe();