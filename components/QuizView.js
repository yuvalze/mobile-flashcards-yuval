import React from 'react'
import {View, Text} from 'react-native'
import CardView from './CardView'
import QuizScoreView from './QuizScoreView'

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
            return (
                <QuizScoreView
                    answeredQuestion={answeredQuestion}
                    answeredCorrect={answeredCorrect}/>
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