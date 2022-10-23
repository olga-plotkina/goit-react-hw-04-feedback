import styled from 'styled-components';

export const ButtonBarStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 40px;

  padding: 5px 10px;
  font-size: 20px;
  background-color: #459dbd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
