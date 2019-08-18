import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#123354" />
        <p>Fazer Migração completa</p>
        <img src="https://api.adorable.io/avatars/284/abott@adorable.png" alt="Avatar"/>
      </header>
    </Container>
  );
}
