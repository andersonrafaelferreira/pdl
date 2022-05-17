import styled from 'styled-components';

export const Container = styled.button`
  width: ${({theme, size}) => theme.sizes[String(size)]};
  height: 48px;

  background: ${({disabled, theme}) => disabled ? theme.colors.disabled : theme.colors.yellow80};
  border-radius: 4px;
  border: none;
  cursor: ${({disabled}) => disabled && 'not-allowed'};

  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.white};
  display: block;

  margin-top: 60px;

  &:hover {
    background: ${({disabled, theme}) => disabled ? theme.colors.disabled : theme.colors.yellow100};
  }
`;
