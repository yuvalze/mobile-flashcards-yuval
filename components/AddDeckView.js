import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { TouchableOpacityBtn } from './CommonComponent'
import { addDeckToStorage } from '../utils/api'
import { addDeck } from '../actions'


const getEmtpyDeck = (key) => {
    return ({
            title: key,
            questions: [
            ]
        })
}

class AddDeckView extends React.Component {
    state = {
        deckName: ''
    }

    onAddNewDeck = () => {
        const {navigate} = this.props.navigation;
        const {deckName} = this.state;
        const deckValueObj = getEmtpyDeck(deckName);
        const newDeckObj = {[deckName]:deckValueObj};

        // If Deck name is empty, do not create the Deck.
        if (deckName.trim() === '') {
            return;
        }

        // Save the new deck on AsyncStorage.
        addDeckToStorage({ deckName, deckValueObj });

        // Seve the new deck on Redux Store.
        this.props.dispatch(addDeck(newDeckObj));

        // Clear the input text.
        this.setState({deckName: ''});

        // Navigate to the new deck.
        const deckKeyStr = deckName;
        navigate('IndividualDeck', {deckKeyStr})
    }

    render() {
        return (
            <View>
                <Text style={styles.insideText}> What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here the new deck name"
                    onChangeText={(deckName) => this.setState({deckName})}
                    value={this.state.deckName}
                />
                <TouchableOpacityBtn 
                    onPress={this.onAddNewDeck} 
                    textButton={'Create Deck'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
      insideText: {
        fontSize: 30,
      },
  })

export default connect()(AddDeckView)