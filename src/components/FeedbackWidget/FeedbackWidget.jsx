import { useState } from 'react';
import Section from '../StatisticsSection/';
import Statistics from '../Statistics/';
import FeedbackOptions from '../FeedbackOptions/';
import Notification from 'components/Message';

const options = ['Good', 'Neutral', 'Bad'];

const Counter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = evt => {
    let name = evt.target.name.toLowerCase();

    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={leaveFeedback} options={options} />

      {countTotalFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

export default Counter;

