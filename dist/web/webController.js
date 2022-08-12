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
exports.WebController = void 0;
const prisma_1 = require("../prisma");
class WebController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield prisma_1.prisma.user.findMany({
                    orderBy: {
                        age: "asc",
                    },
                });
                return res.status(200).send(users);
            }
            catch (error) {
                return res.status(404).send({ msg: "Users not found" });
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, surname, age, birthplace, zodiacalSign, favColor, favTvShow, eyeColor, favPizza, favBand, } = req.body;
            try {
                const newUser = yield prisma_1.prisma.user.create({
                    data: {
                        name: name,
                        surname: surname,
                        age: age,
                        birthplace: birthplace,
                        zodiacalSign: zodiacalSign,
                        favColor: favColor,
                        favTvShow: favTvShow,
                        eyeColor: eyeColor,
                        favPizza: favPizza,
                        favBand: favBand,
                    },
                });
                return res.status(200).send(newUser);
            }
            catch (error) {
                return res.status(401).send({ msg: "Unauthorized" });
            }
        });
    }
    modifyUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.params.user;
            const { name, surname, age, birthplace, zodiacalSign, favColor, favTvShow, eyeColor, favPizza, favBand, } = req.body;
            try {
                const modifiedUser = yield prisma_1.prisma.user.update({
                    where: {
                        name: user,
                    },
                    data: {
                        name: name,
                        surname: surname,
                        age: age,
                        birthplace: birthplace,
                        zodiacalSign: zodiacalSign,
                        favColor: favColor,
                        favTvShow: favTvShow,
                        eyeColor: eyeColor,
                        favPizza: favPizza,
                        favBand: favBand,
                    },
                });
                return res.status(200).send(modifiedUser);
            }
            catch (error) {
                console.log("error: ", error);
                return res.status(401).send({ msg: "Unauthorized" });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.params.user;
            try {
                const deletedUser = yield prisma_1.prisma.user.delete({
                    where: {
                        name: user,
                    },
                });
                return res
                    .status(200)
                    .send({ msg: "User deleted successfully!", deletedUser });
            }
            catch (error) {
                return res.status(404).send({ msg: "Could not delete user!" });
            }
        });
    }
}
exports.WebController = WebController;
