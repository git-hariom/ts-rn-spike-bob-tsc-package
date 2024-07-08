import styled from 'styled-components/native';

interface IconButtonWrapperProps {
  borderRadius?: number;
}

export const IconButtonWrapper = styled.View<IconButtonWrapperProps>`
  height: 40px;
  width: 100px;
  border-radius: ${props => (props?.borderRadius ? props?.borderRadius : 0)};
  background-color: red;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IconButtonLabel = styled.Text`
  fontsize: 12px;
`;
