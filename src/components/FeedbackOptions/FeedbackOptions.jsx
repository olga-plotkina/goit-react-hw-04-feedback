import { StyledButton, ButtonBarStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onGoodBtn, onNeutralbtn, onBadBtn }) => (
  <ButtonBarStyled>
    <StyledButton type="button" onClick={onGoodBtn}>
      Good
    </StyledButton>
    <StyledButton type="button" onClick={onNeutralbtn}>
      Neutral
    </StyledButton>
    <StyledButton type="button" onClick={onBadBtn}>
      Bad
    </StyledButton>
  </ButtonBarStyled>
);
