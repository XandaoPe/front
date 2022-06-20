import React, { useContext, useState, useEffect } from "react";
import AddVeiculo from "../AddVeiculo";

import { useAxios } from "../../hooks/useAxios";
import Veiculo from "../Veiculo";

import { Container, VeiculoListWrapper } from "./styles";
import { FormModalContext } from "../../context/FormModalContext";

export default function VeiculoList() {
  const { isFormModalUp } = useContext(FormModalContext);
  const [data, setData] = useState();
  const axios = useAxios("veiculos");

  useEffect(() => {
    const { data, mutate } = axios;
    mutate(data, true);
    setData(data);
  }, [isFormModalUp, axios]);

  return (
    <Container>
      <VeiculoListWrapper>
        {data?.veiculos.map((veiculo) => (
          <Veiculo
            key={veiculo._id ? veiculo._id : Math.random()}
            id={veiculo._id}
            marca={veiculo.marca}
            modelo={veiculo.modelo}
            placa={veiculo.placa}
            ano={veiculo.ano}
          />
        ))}
        <AddVeiculo />
      </VeiculoListWrapper>
    </Container>
  );
}
