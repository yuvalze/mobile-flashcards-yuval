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
        const deckName = this.state.deckName;
        const deck = getEmtpyDeck(deckName);
        addDeckToStorage({ deckName, deck }).then(() => this.props.dispatch(addDeck({deckName:deck})
        ));
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