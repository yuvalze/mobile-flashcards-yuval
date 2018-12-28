import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
    return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD :
      return {
        ...state,
        [action.deckKeyStr] : {
          ...state[action.deckKeyStr],
          questions : state[action.deckKeyStr].questions.concat(action.newCardValueObj)
        }
      }
    default :
      return state
  }
}

export default decks