import React, { useState } from 'react';
import { FeedbackForm, FeedbackWrapper } from './Feedback.styled.jsx';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage.jsx';
import { Section } from '../Section/Section.jsx';

export const Feedback = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = key => {
    setFeedbackCounts(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const votes = Object.values(feedbackCounts);
    return votes.reduce((acc, vote) => acc + vote, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (feedbackCounts.good === 0) return 0;
    return +((feedbackCounts.good / countTotalFeedback()) * 100).toFixed(1);
  };
  const options = Object.keys(feedbackCounts);
  const { good, neutral, bad } = feedbackCounts;
  const total = countTotalFeedback();
  const positiveFeedbackPercent = countPositiveFeedbackPercentage();

  return (
    <FeedbackForm>
      <FeedbackWrapper>
        <Section title="Please leave feedback" />
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </FeedbackWrapper>
      <FeedbackWrapper>
        <Section title="Statistics" />
        {!total ? (
          <NotificationMessage message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercent}
          />
        )}
        ;
      </FeedbackWrapper>
    </FeedbackForm>
  );
};
