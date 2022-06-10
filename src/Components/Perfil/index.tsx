import { useState, useEffect } from "react";
import { PerfilImage } from "./styles";

interface CardProps {
  playerNumber: any;
}

const Perfil: React.FC<CardProps> = (props) => {
  return (
    <PerfilImage
      source={{
        uri:
          props.playerNumber === "1"
            ? "https://cdn.dribbble.com/users/673318/screenshots/13978786/media/5c307ab803776b5ae728e20e43d545fe.png?compress=1&resize=1200x900&vertical=top"
            : "https://cdn.dribbble.com/users/673318/screenshots/13978778/media/a3b77e3682e5d084ffa16d67a804cd5c.png?compress=1&resize=320x240&vertical=top",
      }}
    />
  );
};

export default Perfil;
