import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { purple, white } from '../utils/colors'

export function TouchableOpacityBtn ({ onPress, textButton }) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
          <Text style={styles.submitBtnText}>{textButton}</Text>
      </TouchableOpacity>
    )
  }


  const styles = StyleSheet.create({
    button: {
      padding: 8,
      backgroundColor: purple,
      alignSelf: 'center',
      borderRadius: 4,
      margin: 16,
    },
    submitBtnText: {
      color: white,
      fontSize: 22,
      textAlign: 'center',
    },
  })