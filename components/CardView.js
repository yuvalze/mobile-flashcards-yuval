import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import { purple, white } from '../utils/colors'


function ChangeSideBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
        onPress={onPress}>
          <Text style={styles.changeSideBtnText}>Change Side</Text>
      </TouchableOpacity>
    )
  }

export default class CardView extends React.Component {
    state = {
        cardSide: 'question'
    };
    OnChangeSize = () => {
        if (this.state.cardSide === 'question') {
            this.setState({cardSide: 'answer'});
        }
        else {
            this.setState({cardSide: 'question'});
        }
    }
    render() {
        console.log('CardView props');
        console.log(this.props);
        const titleText = this.state.cardSide === 'question' ?  'Question' : 'Answer';
        return (
            <View>
                <Text> {titleText} </Text>
                <Text> {this.props.cardData[this.state.cardSide]} </Text>
                <ChangeSideBtn onPress={this.OnChangeSize} />
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
    changeSideBtnText: {
      color: white,
      fontSize: 22,
      textAlign: 'center',
    },
  })