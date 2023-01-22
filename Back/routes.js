import { Router } from "express";

import { getCards, createCards } from "./controllers/CardController";

const routes = Router();

routes.get("/cars", getCards);
routes.post("/cars", createCards);
