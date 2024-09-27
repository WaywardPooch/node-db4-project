// Imports
const express = require("express");
const Router = require("./router");

// Server Instantiation
const server = express();

// Middleware
server.use(express.json());
server.use("/api/recipe", Router);

// Exports
module.exports = server;
