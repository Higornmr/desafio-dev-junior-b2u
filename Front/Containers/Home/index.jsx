import React from "react";
import { BtnStyled } from "./styles";

export function Button ({children, onClick}) {
  return (
  <BtnStyled onClick={onClick}>{children}</BtnStyled>
  )
};

