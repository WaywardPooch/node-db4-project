const dotenv = require("dotenv");
const server = require("./api/server");

dotenv.config(); // Use environment variables from .env

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
