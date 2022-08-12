import { Router } from "express";
import { WebController } from "../web/webController";

const web = Router();
const webController = new WebController();

web.get("/users", async (req, res) => {
  const users = await webController.getUsers(req, res);
});

web.post("/users", async (req, res) => {
  const newUser = await webController.createUser(req, res);
});

web.put("/user/:user", async (req, res) => {
  const user = await webController.modifyUser(req, res);
});

web.delete("/user/:user", async (req, res) => {
  const user = await webController.deleteUser(req, res);
});

export { web };
