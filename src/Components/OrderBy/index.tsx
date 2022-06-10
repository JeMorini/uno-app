import { useState, useEffect } from "react";
// import { ContainerCard, Circle, Logo, Number, MiniNumber } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";

interface CardProps {
  setOrderBy: any;
  orderBy: string;
}

const Card: React.FC<CardProps> = ({ setOrderBy, orderBy }) => {
  return (
    <View
      style={{
        transform: [{ rotate: "90deg" }],
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text>Ordenar por:</Text>
      <TouchableOpacity
        style={{
          backgroundColor: orderBy === "color" ? "#092b5a" : "#15212a",
          height: 50,
          width: 100,
          margin: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => setOrderBy("number")}
      >
        <Text style={{ color: "#fff" }}>Cor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: orderBy === "number" ? "#092b5a" : "#15212a",

          height: 50,
          width: 100,
          margin: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => setOrderBy("color")}
      >
        <Text style={{ color: "#fff" }}>Número</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
