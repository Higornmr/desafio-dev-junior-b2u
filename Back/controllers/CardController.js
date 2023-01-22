import Card from '../models/Cards.js'

async function getCards(){
    const cards = await Cards.find()
    return response.status(200).json(cards)
}

async function createCards(){
    const cards = request.body

    const newCards= await Cards.crete.(user)

    return response.status(201).json(cards)

}

export {getCards, createCards }