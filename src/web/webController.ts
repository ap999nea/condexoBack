import { prisma } from "../prisma";
import express from "express";

export class WebController {
  async getUsers(req: express.Request, res: express.Response) {
    try {
      const users = await prisma.user.findMany({
        orderBy: {
          age: "asc",
        },
      });
      return res.status(200).send(users);
    } catch (error) {
      return res.status(404).send({ msg: "Users not found" });
    }
  }

  async createUser(req: express.Request, res: express.Response) {
    const {
      name,
      surname,
      age,
      birthplace,
      zodiacalSign,
      favColor,
      favTvShow,
      eyeColor,
      favPizza,
      favBand,
    } = req.body;
    try {
      const newUser = await prisma.user.create({
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
    } catch (error) {
      return res.status(401).send({ msg: "Unauthorized" });
    }
  }

  async modifyUser(req: express.Request, res: express.Response) {
    const user = req.params.user;
    const {
      name,
      surname,
      age,
      birthplace,
      zodiacalSign,
      favColor,
      favTvShow,
      eyeColor,
      favPizza,
      favBand,
    } = req.body;
    try {
      const modifiedUser = await prisma.user.update({
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
    } catch (error) {
      console.log("error: ", error);
      return res.status(401).send({ msg: "Unauthorized" });
    }
  }

  async deleteUser(req: express.Request, res: express.Response) {
    const user = req.params.user;
    try {
      const deletedUser = await prisma.user.delete({
        where: {
          name: user,
        },
      });
      return res
        .status(200)
        .send({ msg: "User deleted successfully!", deletedUser });
    } catch (error) {
      return res.status(404).send({ msg: "Could not delete user!" });
    }
  }
}
