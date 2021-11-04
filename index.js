import dotenv from "dotenv";
import server from "./api/server";

dotenv.config(); // Use environment variables from .env

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});