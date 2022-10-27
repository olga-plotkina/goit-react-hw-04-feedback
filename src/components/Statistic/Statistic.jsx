import PropTypes from 'prop-types';
import { StyledItem } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <StyledItem>Good: {good}</StyledItem>
    <StyledItem>Neutral: {neutral}</StyledItem>
    <StyledItem>Bad: {bad}</StyledItem>
    <StyledItem>Total: {total}</StyledItem>
    <StyledItem>Positive feedback: {positivePercentage}%</StyledItem>
  </ul>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
