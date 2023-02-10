import React from "react";
import { CounterViewsTypes } from "../../types";
import { Container } from "./styles";

const CounterViews = ({counterNumber, counterCategory}: CounterViewsTypes) => {
  return (
    <Container>
      <div className="member-count-view">
        <span>Vizualizando 1 - {counterNumber} de {counterNumber} {counterCategory}</span>
      </div>
    </Container>
  )
}

export default CounterViews;