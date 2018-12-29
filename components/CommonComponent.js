import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native'
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
      padding: 10,
      backgroundColor: purple,
      alignSelf: 'center',
      borderRadius: 5,
      margin: 20,
    },
    submitBtnText: {
      color: white,
      fontSize: 22,
      textAlign: 'center',
    },
  })