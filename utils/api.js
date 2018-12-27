import { AsyncStorage } from 'react-native'
import { getDecksMetaInfo } from './helpers'

export const DECKS_STORAGE_KEY = 'UdaciCards:decks'

function setDummyData () {
  const dummyData = getDecksMetaInfo()
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData
}

export function formatDecksResults (results) {
  let returnData;
  if (results === null) {
     returnData = setDummyData();
  }
  else {
    returnData = JSON.parse(results);
  }
  return returnData;
}


export function fetchDeckResults () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecksResults)
}

export function addDeckToStorage ({ deckName, deckValueObj }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deckName]: deckValueObj
  }))
}

function setCardToDeckStorage (currentDeckStorageObj, deckName, cardValueObj) {
  const newDeckStorage = {
    ...currentDeckStorageObj,
    [deckName] : {
      ...currentDeckStorageObj[deckName],
      questions : currentDeckStorageObj[deckName].questions.concat(cardValueObj)
    }
  };
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDeckStorage));
}

export function addCardToDeckStorage ( deckName, cardValueObj ) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(currentDeckStorage => {
    const currentDeckStorageObj = JSON.parse(currentDeckStorage);
    setCardToDeckStorage(currentDeckStorageObj, deckName, cardValueObj);
  })
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
