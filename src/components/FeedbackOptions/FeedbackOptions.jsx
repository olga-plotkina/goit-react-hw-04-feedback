import PropTypes from 'prop-types';
import { StyledButton, ButtonBarStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonBarStyled>
    {options.map(option => {
      return (
        <StyledButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </StyledButton>
      );
    })}
  </ButtonBarStyled>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
