import React from 'react'
import {View, Text, TextInput} from 'react-native'
import {SubmitBtn} from './CommonComponent'
import {addDeck} from '../utils/api'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'


const getEmtpyDeck = (key) => {
    return ({
            title: [key],
            questions: [
            ]
        })
}

export default class AddDeckView extends React.Component {
    state = {
        deckName: ''
    }

    onAddNewDeck = () => {
        const key = this.state.deckName;
        const entry = getEmtpyDeck(key);
        addDeck({ key, entry })
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