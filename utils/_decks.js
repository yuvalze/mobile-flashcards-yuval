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

export function formatCalendarResults (results) {
  return results === null
    ? setDummyData()
    : JSON.parse(results)
}