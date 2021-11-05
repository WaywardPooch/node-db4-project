// Imports
import express from "express";
import RecipeRouter from "./recipe/recipe-router.js";
import StepRouter from "./step/step-router.js";

// Server Instantiation
const server = express();

// Middleware
server.use(express.json());
server.use("/api/recipe", RecipeRouter);
server.use("/api/step", StepRouter);

// Exports
export default server;