import { Statistic } from 'components/Statistic/Statistic';
import React from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
  };

  handleGoodButton = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1, visible: true };
    });
  };

  handleNeutralButton = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1, visible: true };
    });
  };

  handleBadButton = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1, visible: true };
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
            onGoodBtn={this.handleGoodButton}
            onNeutralbtn={this.handleNeutralButton}
            onBadBtn={this.handleBadButton}
          />
        </Section>
        <Section title="Statistic">
          {!this.state.visible && (
            <Notification message="There is no feedback" />
          )}
          {this.state.visible && (
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
