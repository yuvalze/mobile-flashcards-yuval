import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types';
import {SubmitBtn} from './CommonComponent'

const QuizScoreView = (props) => {
    const {answeredQuestion, answeredCorrect, onResetQuiz, onBackToDeck} = props;

    return (
        <View>
            <Text> Quiz Result </Text>
            <Text> You answered {answeredCorrect} correct questions out of {answeredQuestion} </Text>
            <Text>Press here to reset the quiz.</Text>
            <SubmitBtn 
                    onPress={ onResetQuiz } 
                    textButton={'Restart Quiz'}/>
            <Text>Press here to go back to the Individual Deck view.</Text>
            <SubmitBtn 
                onPress={ onBackToDeck } 
                textButton={'Back to Deck'}/>                    
        </View>
    )
}

export default QuizScoreView;

QuizScoreView.propTypes = {
    answeredQuestion: PropTypes.number.isRequired,
    answeredCorrect: PropTypes.number.isRequired,
    onResetQuiz: PropTypes.func.isRequired,
    onBackToDeck: PropTypes.func.isRequired
  };