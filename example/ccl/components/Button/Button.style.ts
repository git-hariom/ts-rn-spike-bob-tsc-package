import styled from 'styled-components/native';

interface ButtonWrapperProps {
  borderRadius?: number;
}

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  height: 40px;
  width: 100px;
  border-radius: ${props => (props?.borderRadius ? props?.borderRadius : 0)};
  background-color: red;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonLabel = styled.Text`
  fontsize: 12px;
`;
