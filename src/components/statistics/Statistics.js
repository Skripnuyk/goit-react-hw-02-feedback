import React from 'react';
import { StatisticsList, StatisticsItem } from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsList>
    <StatisticsItem>good: {good}</StatisticsItem>
    <StatisticsItem>neutral: {neutral}</StatisticsItem>
    <StatisticsItem>bad: {bad}</StatisticsItem>
    <StatisticsItem>total: {total}</StatisticsItem>
    <StatisticsItem>positive feedback: {positivePercentage}%</StatisticsItem>
  </StatisticsList>
);

export default Statistics