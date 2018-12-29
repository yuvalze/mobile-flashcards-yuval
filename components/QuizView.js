import React from 'react'
import {View, Text} from 'react-native'
import CardView from './CardView'
import QuizScoreView from './QuizScoreView'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'


export default class QuizView extends React.Component {
    state = {
        answeredQuestion : 0,
        answeredCorrect : 0
    }

    onAnsweredCorrect = () => {
        this.setState((state) => {
            return {
                answeredQuestion: state.answeredQuestion + 1,
                answeredCorrect: state.answeredCorrect + 1
            };
          });
    }

    onAnsweredIncorrect = () => {
        this.setState((state) => {
            return {
                answeredQuestion: state.answeredQuestion + 1
            };
          });
    }

    onResetQuiz = () => {
        this.setState ({
            answeredQuestion: 0,
            answeredCorrect: 0
        })
    }

    onBackToDeck = () => {
        // Navigare to the deck view.
        const { deckKeyStr }  = this.props.navigation.state.params;
        this.props.navigation.navigate('IndividualDeck', {deckKeyStr})
    }

    render() {
        const noCardMessageStr = 'Sorry, you cannot take a quiz because there are no card in the deck';
        const { deckValueObj }  = this.props.navigation.state.params;
        const { answeredQuestion, answeredCorrect} = this.state;
        const numberOfDeckQuestions = deckValueObj.questions.length;
        if (numberOfDeckQuestions === 0) {
            return (
                <View>
                    <Text> {noCardMessageStr}</Text>
                </View>
            )
        }
        else if (numberOfDeckQuestions === answeredQuestion) {
            
            // User complete quiz. Clear notification for this day and set notification for tommorow.
            clearLocalNotification().then(setLocalNotification);

            // Show the quiz result.
            return (
                <QuizScoreView
                    answeredQuestion={answeredQuestion}
                    answeredCorrect={answeredCorrect}
                    onResetQuiz={this.onResetQuiz}
                    onBackToDeck={this.onBackToDeck}/>
            )
        }
        else {
            return (
                <View>
                    <Text> QuizView </Text>
                    <CardView 
                        cardData={deckValueObj.questions[this.state.answeredQuestion]}
                        onAnsweredCorrect={this.onAnsweredCorrect}
                        onAnsweredIncorrect={this.onAnsweredIncorrect} 
                        questionsRemaining={numberOfDeckQuestions - answeredQuestion}/>
                </View>
            )
        }
    }
}