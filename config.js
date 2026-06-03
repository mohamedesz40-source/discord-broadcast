module.exports = {
    bot: {
        tokens: [
          "MTUxMTgyMzY3ODk2NTQyMDA4Mg.Gr0Ek1.P22dsX6IbZad9x7awpzvZphxNXj_CsTg-VvSgE",              // Main bot token - Replace with your actual token
        //  "MTUxMTgyNzA1ODk0MTIzNTMwMg.Gh-eZa.x7la9vwDDj6QHuzPjDiFCJ4brcfN0NUBZwlqUk",      // 2 bot token - Uncomment and replace to use
        //  "MTUxMTgyNzIyNjE4MDU4NzcyMQ.GPi6li.A7huyww5Fu7o-2z1XIHmT8SSlXgJRDQZJIez6s",       // 3 bot token - Uncomment and replace to use
        //  "MTUxMTgyNzM2MjAwNDU5ODgxNA.GPNGSm.piqncBrfaN6ccFsUVeZcP9sGM9zrfI2rueENYA",      // 4 bot token - Uncomment and replace to use
        //  "MTUxMTgyNzQ4OTYwMzk3NzQ1Nw.G9YLJE.GPdwH_WRwjIn3OjCsmFdn0f8vUgBVczuPHUyec",       // 5 bot token - Uncomment and replace to use
        ].filter(Boolean),

        defaultLanguage: 'ar', // ar | en لغة البوت
        
        activity: {
            name: 'Wick Studio', // رسالة حالة البوت
            type: 'WATCHING', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'dnd' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '1145083762552619048',         // ايدي السيرفر
        broadcastRoleId: '1479826329665798388', // ايدي الرول اللي يستخدم عليها البوت
        reportChannelId: '1145083762997203014' // ايدي الروم اللي يرسل فيه البوت التقارير
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }
};
