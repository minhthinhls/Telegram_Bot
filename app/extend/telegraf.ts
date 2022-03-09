/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

/**!*********************************!*
 ** PUT THIS ON MAIN ENTRY FILES !
 ** WRITE RESOLVED PATH IN BOTH FILES
 ** [PACKAGE.JSON] AND [TSCONFIG.JSON]
 **!*********************************!*/
import "@/plugin/global";

/** Import ES6 Default Core Dependencies !*/
import {Context as TelegrafContext} from "telegraf";

/** Import ES6 Custom [Utils && Helper] Dependencies !*/
import * as Helper from "@/extend/helper";

/** Import ES6 Custom [Utils && Helper] Typing Dependencies !*/
import SceneContextScene, {SceneSessionData} from "telegraf/typings/scenes/context";
/** Import ES6 Custom [Utils && Helper] Typing Dependencies !*/
import WizardContextWizard, {WizardSessionData} from "telegraf/typings/scenes/wizard/context";

/** Import ES6 Custom [Utils && Helper] Typing Dependencies !*/
import type {SceneSession, WizardSession} from "telegraf/typings/scenes";
/** Import ES6 Custom [Utils && Helper] Typing Dependencies !*/
import type {Deunionize, PropOr} from "telegraf/src/deunionize";
/** Import ES6 Custom [Utils && Helper] Typing Dependencies !*/
import type {SessionContext} from "telegraf/typings/session";
/** Import ES6 Custom [Utils && Helper] Typing Dependencies !*/
import type {Update} from "telegraf/src/core/types/typegram";

declare interface ISceneSessionData extends SceneSessionData {
    /* [[Optional Attributes Placeholder]] */
}

declare interface IWizardSessionData extends WizardSessionData {
    /* [[Optional Attributes Placeholder]] */
}

declare module "telegraf" {
    export interface Context<U extends Deunionize<Update> = Update> extends Partial<{
        /* [[Optional Attributes Placeholder]] */
    }> {
        /* [[Mandatory Attributes Placeholder]] */
        session: SceneSession<ISceneSessionData> & {
            check: 1;
            __scenes: ISceneSessionData & IWizardSessionData;
        } & WizardSession<IWizardSessionData>;
        scene: SceneContextScene<SessionContext<SceneSession<ISceneSessionData> & {
            __scenes: ISceneSessionData & IWizardSessionData;
        }>, IWizardSessionData>;
        wizard: WizardContextWizard<SessionContext<WizardSession<IWizardSessionData> & {
            __scenes: ISceneSessionData & IWizardSessionData;
        }>>;
        /** @description * Set all Helper Utilities into Context Prototype Instance !*/
        helper: typeof Helper;
        /**
         ** - A Shorthand for ``${ctx.message}`` and Unionize all property within Typegram Message.
         ** @take-note When you want to have a strict message type checking. Consider using ``${ctx.message}`` instead.
         **/
        msg: Deunionize<PropOr<U, 'message'>>;
    }
}

export * from "telegraf";

export class Context<U extends Deunionize<Update> = Update> extends TelegrafContext {
    /** @description * Set all Helper Utilities into Context Prototype Instance !*/
    public readonly helper: typeof Helper = Helper;
    public readonly session: any;

    /**
     ** - A Shorthand for ``${ctx.message}`` and Unionize all property within Typegram Message.
     ** @take-note When you want to have a strict message type checking. Consider using ``${ctx.message}`` instead.
     **/
    get msg(): Deunionize<PropOr<U, 'message'>> {
        return this.update['message'] as Deunionize<PropOr<U, 'message'>>;
    }

    async getZero(): Promise<number> {
        return 0;
    }
}
