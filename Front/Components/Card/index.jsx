import React from "react";
import { Container, Name, ContainerDescrption, Brand, Manufacturing,Description } from "./styles";


export const CardItem = ({children,car}) => {
 
    return (
      <Container> 
        <ContainerDescrption>
        <Name>{car.name}</Name>
        <Brand>{car.marca}</Brand>
        <Manufacturing>{car.fabricante}</Manufacturing>
        <Description>{car.descricao}</Description>
        <Description>{car.ano}</Description>
        </ContainerDescrption>
        {children}
      </Container>
    )
  };

