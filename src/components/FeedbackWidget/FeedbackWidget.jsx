import React, { Component } from 'react';
import Section from '../StatisticsSection/';
import Statistics from '../Statistics/';
import FeedbackOptions from '../FeedbackOptions/';
import Notification from 'components/Message';

const options = ['Good', 'Neutral', 'Bad'];

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = evt => {
    let name = evt.target.name.toLowerCase();

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totals = Object.values(this.state);
    return totals.reduce((num, total) => total + num);
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const total = this.countTotalFeedback();
    if (good === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const pisitive = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
            options={options}
          />

          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={pisitive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Counter;
