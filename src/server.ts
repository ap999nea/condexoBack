import express from "express";
import { prisma } from "./prisma";
import { web } from "./routes/web";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());
server.use("/", express.static(__dirname + "/"));
server.use("/web-api", web);

const PORT = 8000;

const serverInstance = server.listen(PORT, () => {
  console.log("🚀 Server is up at http://localhost:" + PORT);
});

process.on("SIGTERM", async () => {
  console.log("Spegnimento...");
  serverInstance.close();
  prisma.$disconnect();
});

export default server;
