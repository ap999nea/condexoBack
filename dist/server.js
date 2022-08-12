"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("./prisma");
const web_1 = require("./routes/web");
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use("/", express_1.default.static(__dirname + "/"));
server.use("/web-api", web_1.web);
const PORT = 8000;
const serverInstance = server.listen(PORT, () => {
    console.log("🚀 Server is up at http://localhost:" + PORT);
});
process.on("SIGTERM", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Spegnimento...");
    serverInstance.close();
    prisma_1.prisma.$disconnect();
}));
exports.default = server;
