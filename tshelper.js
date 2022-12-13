/* eslint valid-jsdoc: "off", complexity: "off", no-unused-vars: "off", @typescript-eslint/naming-convention: "off" */

/** @ts-nocheck - Turn this on to ignore this file !*/

"use strict";

const __main__ = () => {
    const ignores = ['model', 'mongoose'];

    const exports = (ignores = ignores) => {
        const config = {
            watchDirs: {
                model: {
                    directory: 'app/model', // files directory.
                    pattern: '**/*.(ts|js)', // glob pattern, default is **/*.(ts|js). it doesn't need to configure normally.
                    ignore: '', // ignore glob pattern, default to empty.
                    generator: 'function', // generator name, eg: class、auto、function、object
                    interface: 'IModel', // interface name
                    declareTo: 'Context.model', // declare to this interface
                    watch: true, // whether need to watch files
                    caseStyle: 'upper', // caseStyle for loader
                    interfaceHandle: Interface => `ReturnType<typeof ${Interface}>`, // interfaceHandle
                    trigger: ['add', 'unlink'], // recreate d.ts when receive these events, all events: ['add', 'unlink', 'change']
                },
                mongoose: {
                    directory: 'app/mongoose', // files directory.
                    pattern: '**/*.(ts|js)', // glob pattern, default is **/*.(ts|js). it doesn't need to configure normally.
                    ignore: '', // ignore glob pattern, default to empty.
                    generator: 'function', // generator name, eg: class、auto、function、object
                    interface: 'IMongoose', // interface name
                    declareTo: 'Context.mongoose', // declare to this interface
                    watch: true, // whether need to watch files
                    caseStyle: 'upper', // caseStyle for loader
                    interfaceHandle: Interface => `ReturnType<typeof ${Interface}>`, // interfaceHandle
                    trigger: ['add', 'unlink'], // recreate d.ts when receive these events, all events: ['add', 'unlink', 'change']
                },
                service: {
                    directory: 'app/service', // files directory.
                    pattern: '**/*.(ts|js)', // glob pattern, default is **/*.(ts|js). it doesn't need to configure normally.
                    ignore: '', // ignore glob pattern, default to empty.
                    generator: 'class', // generator name, eg: class、auto、function、object
                    interface: 'IService', // interface name
                    declareTo: 'Context.service', // declare to this interface
                    watch: true, // whether need to watch files
                    caseStyle: 'lower', // caseStyle for loader
                    interfaceHandle: Interface => `${Interface}`, // Interface Handler
                    trigger: ['add', 'unlink'], // recreate d.ts when receive these events, all events: ['add', 'unlink', 'change']
                }
            },
            autoRemoveJs: true,
        };

        for (const ignore of ignores) {
            delete config.watchDirs[ignore];
        }

        return config;
    };

    return exports(ignores);
};

/** @description - Immediately Run MicroTask. ~!*/
const exec = (task) => task();

/** For ES5 Import Statement !*/
module.exports = exec(__main__);
