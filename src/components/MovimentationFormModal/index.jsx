import React, { useContext } from "react";
import { MovimentationContext } from "../../context/MovimentationContext";

import {
  Overlay,
  Container,
  Header,
  CloseIcon,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CheckIcon,
} from "./style";

export default function MovimentationFormModal() {
  const {
    closeFormModal,
    submitForm,
    marca,
    modelo,
    placa,
    ano,
    date,
    km,
    qtde,
    valor,
    setDate,
    setKm,
    setQtde,
    setValor,
  } = useContext(MovimentationContext);

  //   const { editingVeiculo } = useContext(EditingVeiculoContext);

  function dateHandler(e) {
    setDate(e.target.value);
  }

  function kmHandler(e) {
    setKm(e.target.value);
  }

  function qtdeHandler(e) {
    setQtde(e.target.value);
  }

  function valorHandler(e) {
    setValor(e.target.value);
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Movimento</strong>
          <button onClick={closeFormModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer>
          <FormMain>
            <div>
              <p>
                <strong>Marca:</strong> {marca}
              </p>
              <p>
                <strong>Modelo:</strong> {modelo}
              </p>
              <p>
                <strong>Placa:</strong> {placa}
              </p>
              <p>
                <strong>Ano:</strong> {ano}
              </p>
            </div>
            <InputGroup>
              <label htmlFor="data">Data</label>
              <input
                id="data"
                type="date"
                value={date}
                onChange={dateHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="km">Quilômetros (KM)</label>
              <input
                id="km"
                type="number"
                value={km}
                placeholder="Inserir km do Veículo"
                onChange={kmHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="Quantidade">Quantidade</label>
              <input
                id="Quantidade"
                type="number"
                value={qtde}
                placeholder="Inserir a quantidade"
                onChange={qtdeHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="valor">Valor</label>
              <input
                id="valor"
                type="number"
                value={valor}
                placeholder="Inserir o Valor do Abastecimento"
                onChange={valorHandler}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button onClick={submitForm}>
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
