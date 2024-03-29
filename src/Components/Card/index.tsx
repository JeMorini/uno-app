import { useState, useEffect } from "react";
import {
  ContainerCard,
  Circle,
  Logo,
  Number,
  MiniNumber,
  ImageCard,
} from "./styles";
import plusfour from "../../images/plusfour.png";

interface CardProps {
  number: any;
  color: string;
  playCard?: any;
  skin: any;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <ContainerCard
      color={props.color}
      onPress={() => props.playCard(props)}
      skin={props.skin}
    >
      {/* {props.number === "UNO" ? (
        <Circle color="red">
          <Logo>UNO</Logo>
        </Circle>
      ) : ( */}
      <>
        <MiniNumber color="top">{props.number}</MiniNumber>
        <Circle
          color={props.skin === "default" ? "#fff" : props.color}
          skin={props.skin}
        >
          {props.color !== "#000" ? (
            <Number color={props.skin === "default" ? props.color : "#fff"}>
              {props.number}
            </Number>
          ) : (
            <ImageCard style={{ width: 100, height: 100 }} source={plusfour} />
          )}
        </Circle>
        <MiniNumber color="bottom">{props.number}</MiniNumber>
      </>
      {/* )} */}
    </ContainerCard>
  );
};

export default Card;
