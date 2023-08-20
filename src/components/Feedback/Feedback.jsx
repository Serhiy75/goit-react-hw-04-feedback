import React from "react";
import { FeedbackForm, FeedbackWrapper } from './Feedback.styled.jsx';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';
import { NotificationMessage } from '../NotificationMessage/NotificationMessage.jsx';
import { Section } from '../Section/Section.jsx';


export class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleClick = key => {
        this.setState(prevState =>({
            [key]: prevState[key] + 1,
        }))
    }

    countTotalFeedback = () => {
        const votes = Object.values(this.state);
        return votes.reduce((acc, vote) => acc + vote, 0);
    }

    countPositiveFeedbackPercentage = () => {
        if (this.state.good === 0) return 0;
        return +((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
    }

    render() {
        const options = Object.keys(this.state);
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveFeedbackPercent = this.countPositiveFeedbackPercentage();

        return (
            <FeedbackForm>
                <FeedbackWrapper>
                    <Section title="Please leave feedback" />
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.handleClick} 
                    />
                </FeedbackWrapper>
                <FeedbackWrapper>
                    <Section title="Statistics" />
                    {!total ? (
                        <NotificationMessage message="There is no feedback yet" />
                    ) : (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positiveFeedbackPercent}
                        />
                    )}
                </FeedbackWrapper>
            </FeedbackForm>
        )
    }
}