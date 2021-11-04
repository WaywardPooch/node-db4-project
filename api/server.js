// Imports
import express from "express";

// Server Instantiation
const server = express();

// Middleware
server.use(express.json());

// Exports
export default server;