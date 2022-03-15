"use strict";

/** Import Node Native Dependencies !*/
// import * as path from "path";
/** Import ES6 Default Core Dependencies !*/
import * as ngrok from "ngrok";
/** Import ES6 Default Core Dependencies !*/
import {Telegraf, Context} from "@/extend/telegraf";

const __TelegramBot__ = new Telegraf<Context>("2132304526:AAF2IsHrcM1I7YCPQivnQcOhbXCf8PNhKiI", {
    contextType: Context,
});

/** @see {@link https://www.youtube.com/watch?v=NXevT_0GtNU}
 ** @see {@link https://www.npmjs.com/package/ngrok} ~!*/
ngrok.connect(8443).then((httpsProxy) => {
    return __TelegramBot__.telegram.setWebhook(`${httpsProxy}/telegram/bot/${__TelegramBot__.secretPathComponent()}`);
});

__TelegramBot__.on('message', (ctx) => {
    return ctx.reply('> Hello!');
});

/** For ES6 Default Import Statement !*/
export default __TelegramBot__;

/** For ES5 Default Import Statement !*/
module.exports = __TelegramBot__;
