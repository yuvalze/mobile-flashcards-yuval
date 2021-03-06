import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { TouchableOpacityBtn } from './CommonComponent'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { addCardToDeckStorage } from '../utils/api'


class AddCardView extends React.Component {
    state = {
        questionText: '',
        answerText: ''
    }

    onSubmit = () => {
        const {deckKeyStr}  = this.props.navigation.state.params;
        const {questionText, answerText} = this.state;
        const {navigate} = this.props.navigation;
        const newCardValueObj = {
            question: questionText,
            answer: answerText
        };

        // If the input question or the input answer are empty, do not add the card.
        if(questionText.trim() === '' || answerText === '' ) {
            return;
        }
          
        // Save the new deck on AsyncStorage.
        addCardToDeckStorage( deckKeyStr, newCardValueObj);

        // Save the new card on Redux Store.
        this.props.dispatch(addCard(deckKeyStr, newCardValueObj));

        // Clear the input text.
        this.setState({
            question : '',
            answer : ''
        })
        
        // Navigare to the deck view.
        navigate('IndividualDeck', {deckKeyStr})
    }
    
    render() {
        return (
            <View>
                <Text style={styles.titleText}> The New Question</Text>
                <TextInput
                    style={{height: 60, borderColor: 'gray', borderWidth: 2}}
                    placeholder="Type here the question"
                    onChangeText={(questionText) => this.setState({questionText})}
                    value={this.state.questionText}
                />
                <Text style={styles.titleText}> The New Answer</Text>
                <TextInput
                    style={{height: 60, borderColor: 'gray', borderWidth: 2}}
                    placeholder="Type here the answer"
                    onChangeText={(answerText) => this.setState({answerText})}
                    value={this.state.answerText}
                />
                <TouchableOpacityBtn 
                    onPress={this.onSubmit} 
                    textButton={'Add Card'}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 25,
      fontWeight: 'bold',
      backgroundColor: '#DDDDDD',
    },
  })


export default connect()(AddCardView)