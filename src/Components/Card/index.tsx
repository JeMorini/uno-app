import { useState, useEffect } from "react";
import { ContainerCard, Circle, Logo, Number, MiniNumber } from "./styles";

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
          <Number color={props.skin === "default" ? props.color : "#fff"}>
            {props.number}
          </Number>
        </Circle>
        <MiniNumber color="bottom">{props.number}</MiniNumber>
      </>
      {/* )} */}
    </ContainerCard>
  );
};

export default Card;
