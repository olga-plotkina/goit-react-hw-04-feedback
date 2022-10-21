import { StyledSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <h2>{title}</h2> {children}
    </StyledSection>
  );
};
