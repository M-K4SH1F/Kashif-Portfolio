"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = exports.sendForm = exports.send = exports.init = void 0;
const EmailJSResponseStatus_1 = require("./models/EmailJSResponseStatus");
Object.defineProperty(exports, "EmailJSResponseStatus", { enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
const init_1 = require("./methods/init/init");
Object.defineProperty(exports, "init", { enumerable: true, get: function () { return init_1.init; } });
const send_1 = require("./methods/send/send");
Object.defineProperty(exports, "send", { enumerable: true, get: function () { return send_1.send; } });
const sendForm_1 = require("./methods/sendForm/sendForm");
Object.defineProperty(exports, "sendForm", { enumerable: true, get: function () { return sendForm_1.sendForm; } });
exports.default = {
    init: init_1.init,
    send: send_1.send,
    sendForm: sendForm_1.sendForm,
    EmailJSResponseStatus: EmailJSResponseStatus_1.EmailJSResponseStatus,
};
