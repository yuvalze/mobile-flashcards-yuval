import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import { purple, white } from '../utils/colors'
import {addCardToDeckStorage} from '../utils/api'

function SubmitBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
        onPress={onPress}>
          <Text style={styles.submitBtnText}>SUBMIT</Text>
      </TouchableOpacity>
    )
  }

export default class AddCardView extends React.Component {
    state = {
        questionText: '',
        answerText: ''
    }

    onSubmit = () => {
        const {deckKeyStr, deckValueObj}  = this.props.navigation.state.params;
        const {questionText, answerText} = this.state;
  
        // Save the new deck on AsyncStorage.
        addCardToDeckStorage( deckKeyStr, {
            questions: [{
              question: 'sdsd?',
              answer: 'sdfdsfsds'
            }]
        } );

        // Sשve the new card on Redux Store.
    
        // Clear the input text.
        
        // Navigare to the new deck.
        //navigate('IndividualDeck', {deckItem : deckEmpty})

    }
    
    render() {
        return (
            <View>
                <Text> The New Question</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder="Type here the question"
                    onChangeText={(questionText) => this.setState({questionText})}
                    value={this.state.questionText}
                />
                <Text> The New Answer</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder="Type here the answer"
                    onChangeText={(answerText) => this.setState({answerText})}
                    value={this.state.answerText}
                />
                <SubmitBtn onPress={this.onSubmit} />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
      backgroundColor: purple,
      padding: 10,
      borderRadius: 7,
      height: 45,
      marginLeft: 40,
      marginRight: 40,
    },
    AndroidSubmitBtn: {
      backgroundColor: purple,
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      borderRadius: 2,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitBtnText: {
      color: white,
      fontSize: 22,
      textAlign: 'center',
    },
  })