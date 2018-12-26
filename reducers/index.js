import { RECEIVE_DECKS, ADD_DECK } from '../actions'

function decks (state = {}, action) {
  console.log('reducer state1');
  console.log(state);
  console.log('reducer action1');
  console.log(action);
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
    default :
      return state
  }
}

export default decks