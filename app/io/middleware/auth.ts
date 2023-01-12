/** Import Egg-Modules as Typed Namespace !*/
import type {} from "egg";
/** Import Application Placeholder from Egg:Modules !*/
import type {} from "egg-socket.io"; // Will throw error.

/** Import Pre-Defined Types Helper !*/
import type {IBody} from "@/extend/context";
/** Import Pre-Defined Types Helper !*/
import type {IApplication, IContext} from "@/extend/types";
/* eslint-disable-next-line no-unused-vars */
import type {Next, ParameterizedContext} from "koa";
/* eslint-disable-next-line no-unused-vars */
import type {DefaultState, DefaultContext} from "koa";

declare module "egg" {
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    export interface CustomMiddleware {
        auth: typeof middlewareFn;
    }
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    export interface IController {
        proxy: string;
    }
}

/// <reference path="../../../typings/app/controller/index.d.ts" />
// import type {Application, IController} from "egg";
// import type {} from "../../../typings/app/controller";

/**
 ** @param {IApplication} app - Egg application
 ** @returns {function(ctx: IContext, next: Next): Promise<void>}
 **/
export const middlewareFn = (app: IApplication) => async (
    ctx: ParameterizedContext<DefaultState, DefaultContext & IContext, IBody>,
    next: Next,
): ReturnType<Next> => {
    ctx.helper.Console.trace(`::socket client: ${ctx.socket.handshake}`);

    const {service, socket} = ctx;
    const token = String(socket.handshake.query.token) || '';
    const userInfo = await service.user.findUserByToken(token);

    if (!userInfo) {
        ctx.socket.disconnect();
        return app;
    }

    ctx.socket['user'] = userInfo;
    return next(); // Execute when disconnect
};

/** For ES6 Default Import Statement !*/
export default middlewareFn;

/** For ES5 Default Import Statement !*/
module.exports = middlewareFn;
