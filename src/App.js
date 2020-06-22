import React from 'react';
import styled from '@emotion/styled';
import test from './images/bg-header-desktop.svg';
import WorkOffer from './components/WorkOffer';

const Wrapper = styled.div`
`
const Header = styled.div`
width: 100%;
height: 150px;
margin: auto;
background-color: #5DA5A4;
background-image: url("${test}");
`


function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <div>
          <WorkOffer />
          <WorkOffer />
          <WorkOffer />
          <WorkOffer />
          <WorkOffer />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
