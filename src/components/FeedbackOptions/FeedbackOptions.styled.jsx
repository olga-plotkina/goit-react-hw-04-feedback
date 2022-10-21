import styled from 'styled-components';

export const ButtonBarStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0 0 1px 1px rgba(221, 221, 221, 1);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
