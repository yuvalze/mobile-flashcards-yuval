import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types';

const QuizScoreView = (props) => {
    const {answeredQuestion, answeredCorrect} = props;
    return (
        <View>
            <Text> Quiz Result </Text>
            <Text> You answered {answeredCorrect} correct questions out of {answeredQuestion} </Text>
        </View>
    )
}

export default QuizScoreView;

QuizScoreView.propTypes = {
    answeredQuestion: PropTypes.number.isRequired,
    answeredCorrect: PropTypes.number.isRequired
  };