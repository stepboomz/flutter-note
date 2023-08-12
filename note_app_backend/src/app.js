"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongodb_client_1 = require("./config/mongodb_client");
const app_logger_1 = __importDefault(require("./middleware/app_logger"));
const user_router_1 = __importDefault(require("./router/user_router"));
const note_router_1 = __importDefault(require("./router/note_router"));
const app = (0, express_1.default)();
const hostName = "localhost";
const portNumber = 8889;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(app_logger_1.default);
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/v1/user", user_router_1.default);
app.use("/v1/note", note_router_1.default);
app.listen(portNumber, hostName, async () => {
    await (0, mongodb_client_1.connectToDatabase)();
    console.log("Welcome to Note App backed Service ");
});
