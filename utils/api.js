import { AsyncStorage } from 'react-native'
import { formatDecksResults, DECKS_STORAGE_KEY } from './_decks'

export function fetchDeckResults () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecksResults)
}

export function submitDeck ({ entry, deck }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck]: entry
  }))
}

export function removeDeck (deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deck] = undefined
      delete data[deck]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}