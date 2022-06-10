import styled from "styled-components";

export const ContainerCard = styled.TouchableOpacity`
  elevation: 10;
  ${(props) =>
    props.skin === "default"
      ? `
    height: 200px;
    width: 150px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props.color};
    margin-left: 50px;
    border-width: 8px;
    border-style: solid;
    border-color: #fff;
    border-radius: 8px;
    box-shadow: 10px 5px 20px black;
    transform: rotate(90deg);
    `
      : `
    height: 200px;
    width: 150px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props.color};
    margin-left: 50px;
    border-width: 8px;
    border-style: solid;
    border-color: ${props.color};
    border-radius: 8px;
    box-shadow: 10px 5px 20px black;
    transform: rotate(90deg);`};
`;

export const Circle = styled.View`
  height: 190px;
  width: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 500px;
  transform: rotate(30deg);
`;

export const Logo = styled.Text`
  /* color: #fff; */
  text-shadow: 4px 4px 4px #000000;
  transform: rotate(-40deg);
  font-size: 70px;
  font-weight: bold;
  background: -webkit-linear-gradient(#f6ea00, #fff);
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  color: white;
`;

export const Number = styled.Text`
  color: ${(props) => props.color};
  text-shadow: 2px 2px 4px #000000;
  transform: rotate(-30deg);
  font-size: 70px;
`;

export const MiniNumber = styled.Text`
  text-shadow: 2px 2px 4px #000000;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  ${(props) =>
    props.color === "top"
      ? `
left: 10px
top: 10px
  `
      : `
right: 10px
bottom: 10px
transform: rotate(-180deg);
      `}
`;
