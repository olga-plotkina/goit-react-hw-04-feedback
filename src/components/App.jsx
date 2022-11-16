import { Statistic } from 'components/Statistic/Statistic';
import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = ['good', 'neutral', 'bad'];

  const handleLeaveFeedbackButton = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
      return;
    }
    if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
      return;
    }
    if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={state}
          onLeaveFeedback={handleLeaveFeedbackButton}
        />
      </Section>
      <Section title="Statistic">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
