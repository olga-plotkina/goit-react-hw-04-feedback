import { StyledButton, ButtonBarStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonBarStyled>
    {options.map(option => {
      return (
        <StyledButton type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </StyledButton>
      );
    })}
  </ButtonBarStyled>
);
