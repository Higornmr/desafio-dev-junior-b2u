import Card from "../models/Cards.js";

async function getCards(request, response) {
  const card = await Card.find();
  return response.status(200).json(card);
}

async function createCard(request, response) {
  const card = request.body;

  const newCard = await Card.create(card);

  return response.status(201).json(newCard);
}

async function deleteCard(request, response) {
  const id = request.params.id;

  await Card.findByIdAndDelete({ _id: id });

  return response.status(200).json({ response: "Card deleted" });
}

export { getCards, createCard, deleteCard };
