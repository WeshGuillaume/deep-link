import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

import logo from './logo.png';

import Page from './components/Page';
import Card from './components/Card';
import Title from './components/Title';
import Footer from './components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 40px;
  margin-bottom: 32px;
  align-self: center;
  justify-self: center;
`;

export default function App() {
  const [link, setLink] = useState('#');
  const [data, setData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (!id) {
      setLink(`snapcard://?id=${id}`);
      setData(JSON.parse(atob(id)));
    }
  }, []);

  return (
    <Container>
      <Page>
        <Img src={logo} />
        <Title>You received a new Snap Card</Title>
        {data && <Card {...data} />}
      </Page>
      <Footer href={link} />
    </Container>
  );
}
