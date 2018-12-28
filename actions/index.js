export const RECEIVE_DECKS = 'RECEIVE_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addCard (deckKeyStr, newCardValueObj) {
  return {
    type: ADD_CARD,
    deckKeyStr,
    newCardValueObj
  }
}