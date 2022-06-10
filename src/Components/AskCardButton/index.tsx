import { useState, useEffect } from "react";
import { ContainerAskCardButton, TitleAskCardButton } from "./styles";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

interface CardProps {
  askCard: any;
  title: string;
}

const AskCardButton: React.FC<CardProps> = (props) => {
  return (
    <ContainerAskCardButton onPress={() => props.askCard()}>
      {props.title === "Pedir carta" && (
        <>
          <MaterialCommunityIcons name="cards" size={40} color="white" />
          <TitleAskCardButton>{props.title}</TitleAskCardButton>
        </>
      )}
      {props.title === "Passar vez" && (
        <>
          <Entypo name="controller-next" size={40} color="white" />
          <TitleAskCardButton>{props.title}</TitleAskCardButton>
        </>
      )}
    </ContainerAskCardButton>
  );
};

export default AskCardButton;
