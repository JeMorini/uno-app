import { useState, useEffect } from "react";
import { Cotainer, Title, CardColor } from "./styles";

interface SelectColorProps {
  selectColor: (color) => void;
}

const SelectColor: React.FC<SelectColorProps> = (props) => {
  return (
    <Cotainer>
      <CardColor color="#DB3C28" onPress={() => props.selectColor("#DB3C28")} />
      <CardColor color="#1275BA" onPress={() => props.selectColor("#1275BA")} />
      <CardColor color="#8BBD44" onPress={() => props.selectColor("#8BBD44")} />
      <CardColor color="#F5D93D" onPress={() => props.selectColor("#F5D93D")} />
    </Cotainer>
  );
};

export default SelectColor;
