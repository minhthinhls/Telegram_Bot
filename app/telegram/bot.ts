/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

/**!*****************************!*
 ** PUT THIS ON MAIN ENTRY FILES !
 ** WRITE RESOLVED PATH IN BOTH FILES
 ** [PACKAGE.JSON] AND [TSCONFIG.JSON]
 **!*****************************!*/
require("module-alias/register");

/** Import ES6 Default Core Dependencies !*/
import * as path from "path";
/** Import ES6 Default Core Dependencies !*/
import * as ngrok from "ngrok";
/** Import ES6 Default Core Dependencies !*/
import {Telegraf, Context} from "@/extend/telegraf";

const __TelegramBot__ = new Telegraf<Context>("**********:***********************************", {
    contextType: Context,
});

/** @see {@link https://www.youtube.com/watch?v=NXevT_0GtNU}
 ** @see {@link https://www.npmjs.com/package/ngrok} ~!*/
ngrok.connect({
    authtoken: '************************************************',
    region: 'ap',
    proto: 'http',
    addr: 8443,
}).then((httpsProxy) => {
    console.log('> [Ngrok Endpoints]:', `${httpsProxy}/telegram/bot/${__TelegramBot__.secretPathComponent()}`);
    return __TelegramBot__.telegram.setWebhook(`${httpsProxy}/telegram/bot/${__TelegramBot__.secretPathComponent()}`);
});

const DEFAULT_TELEGRAM_USER_ID = 1660520397; // Username of ${`EdgarHuynh`}

__TelegramBot__.on('message', (ctx) => {
    if (ctx.from?.id !== DEFAULT_TELEGRAM_USER_ID) {
        return void 0;
    }
    console.log('> [Message]:', ctx.message);
    console.log('> [BotInfo]:', ctx.botInfo);
    return ctx.reply('> Hello!');
});

/** For ES6 Default Import Statement !*/
export default __TelegramBot__;

/** For ES5 Default Import Statement !*/
module.exports = __TelegramBot__;
