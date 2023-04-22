import React, { Component } from "react";
import Section from './section';
import Feedback from './feedback';
import Statistics from './statistics';
import Notification from "./notification";
import { feedbackState } from '../data/feedbackState';
import { AppWrap } from './App.styled'
import { GlobalStyle } from './GlobalStyled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddFeedback = el => {
    this.setState(prevState => ({
      [el]: prevState[el] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <AppWrap>
        <Section title="Please leave feedback">
          <Feedback
            feedbackState={feedbackState}
            onAddFeedback={this.onAddFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
        <GlobalStyle />
      </AppWrap>
    );
  }
}

export default App