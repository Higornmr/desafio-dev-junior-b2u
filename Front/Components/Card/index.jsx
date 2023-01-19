import React from "react";
import { Container, Name, ContainerDescrption, Brand, Manufacturing,Description } from "./styles";


export const CardItem = ({children}) => {
 
    return (
      <Container> 
        <ContainerDescrption>
        <Name>Nome do carro</Name>
        <Brand>Marca</Brand>
        <Manufacturing>Ano de fabricação</Manufacturing>
        <Description>Descrição</Description>
        </ContainerDescrption>
        {children}
      </Container>
          
    
    
    )
  
  };

