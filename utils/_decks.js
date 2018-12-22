// Utilities for backfilling the calendar.

import { AsyncStorage } from 'react-native'
import { getDecksMetaInfo, timeToString } from './helpers'

export const DECKS_STORAGE_KEY = 'UdaciCards:calendar'

function getRandomNumber (max) {
  return Math.floor(Math.random() * max) + 0
}

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