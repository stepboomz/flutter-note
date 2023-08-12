"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let appLogger = (request, response, next) => {
    const url = request.url;
    const method = request.method;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const result = `${url} | ${method} | ${date} | ${time}`;
    console.log(result);
    next();
};
exports.default = appLogger;
