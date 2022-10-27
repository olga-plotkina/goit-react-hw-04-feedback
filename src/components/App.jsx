import PropTypes from 'prop-types';

import { Statistic } from 'components/Statistic/Statistic';
import React from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
    title: PropTypes.string,
    message: PropTypes.string,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  show = () => {
    this.setState({ visible: true });
  };

  handleButton = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButton}
          />
        </Section>
        <Section title="Statistic">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
