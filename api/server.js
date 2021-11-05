// Imports
import express from "express";
import Router from "./router.js";

// Server Instantiation
const server = express();

// Middleware
server.use(express.json());
server.use("/api/recipe", Router);

// Exports
export default server;