import styled from "styled-components";

export const Cotainer = styled.View`
  width: 100%;
  height: 700px;
  /* align-items: center; */
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  transform: rotate(90deg);
  color: #fff;
`;

export const CardColor = styled.TouchableOpacity`
  width: 80%;
  height: 160px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 14px;
  margin: 10px;
`;
