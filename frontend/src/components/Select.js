import styled from 'styled-components';

export default styled.select`
  width: 100%;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  appearance: none;

  transition: border-color 0.2s ease-in-out;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main}
  }
`;
