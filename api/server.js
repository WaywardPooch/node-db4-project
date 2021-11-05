// Imports
import express from "express";
import RecipeRouter from "./recipe/recipe-router.js";

// Server Instantiation
const server = express();

// Middleware
server.use(express.json());
server.use("/api/recipe", RecipeRouter);

// Exports
export default server;