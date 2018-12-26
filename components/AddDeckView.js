import React from 'react'
import {View, Text, TextInput} from 'react-native'
import { connect } from 'react-redux'
import {SubmitBtn} from './CommonComponent'
import {addDeckToStorage} from '../utils/api'
import {addDeck} from '../actions'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'


const getEmtpyDeck = (key) => {
    return ({
            title: [key],
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
        const deckEmpty = getEmtpyDeck(deckName);
        const newDeckObj = {[deckName]:deckEmpty};

        // Save the new deck on AsyncStorage.
        addDeckToStorage({ deckName, deckEmpty });

        // Seve the new deck on Redux Store.
        this.props.dispatch(addDeck(newDeckObj));

        // Clear the input text.
        this.setState({deckName: ''});

        // Navigare to the new deck.
        navigate('IndividualDeck', {deckItem : deckEmpty})

        clearLocalNotification()
          .then(setLocalNotification)
    }

    render() {
        return (
            <View>
                <Text> What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here the new deck name"
                    onChangeText={(deckName) => this.setState({deckName})}
                    value={this.state.deckName}
                />
                <SubmitBtn 
                onPress={this.onAddNewDeck} 
                textButton={'Create Deck'}/>
            </View>
        )
    }
}

export default connect()(AddDeckView)