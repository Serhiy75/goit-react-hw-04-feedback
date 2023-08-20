import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem, Stats } from './Statistics.styled';

export const Statistics = ({ good = 0, neutral = 0, bad = 0, total = 0, positivePercentage = 0 }) => (
    <StatisticsList>
      <StatisticsItem><Stats prop={'good'}></Stats> Good: {good}</StatisticsItem>
      <StatisticsItem><Stats prop={'neutral'}></Stats>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem><Stats prop={'bad'}></Stats>Bad: {bad}</StatisticsItem>
      <StatisticsItem>&#127775; Total: {total}</StatisticsItem>
      <StatisticsItem>&#127989; PositiveFeedback: {positivePercentage}%</StatisticsItem>
    </StatisticsList> 
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};