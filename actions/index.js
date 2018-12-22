export const RECEIVE_DECKS = 'RECEIVE_DECK'
export const ADD_DECK = 'ADD_DECK'

export function receiveEntries (entries) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addEntry (entry) {
  return {
    type: ADD_DECK,
    deck,
  }
}