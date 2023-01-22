import express from "express";
import mongoose from "mongoose";

/*se a senha der errado usar essa iWXg7Wr3ojaGXJtz */
mongoose
  .connect(
    "mongodb+srv://<username>:iHjD0FsSCnz9AJG7@cluster0.sd2mgof.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Banco de dados conectado"))
  .catch(() => console.log("Banco de dados não conectado"));
