import { Router } from "express";

import {
  getCards,
  createCard,
  deleteCard,
} from "./src/controllers/CardController.js";

const routes = new Router();

routes.get("/cards", getCards);
routes.post("/cards", createCard);
routes.delete("/cards/:id", deleteCard);

export default routes;
