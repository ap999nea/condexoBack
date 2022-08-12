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
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
const express_1 = require("express");
const webController_1 = require("../web/webController");
const web = (0, express_1.Router)();
exports.web = web;
const webController = new webController_1.WebController();
web.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield webController.getUsers(req, res);
}));
web.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield webController.createUser(req, res);
}));
web.put("/user/:user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield webController.modifyUser(req, res);
}));
web.delete("/user/:user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield webController.deleteUser(req, res);
}));
