import React from 'react';
import styled from '@emotion/styled';
import test from './images/bg-header-desktop.svg';
import WorkOffer from './components/WorkOffer';
import StickyBoard from './components/StickyBoard';
import data from './data.json';


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
  console.log(data)
  return (
    <div>
      <Wrapper>
        <Header />
        <StickyBoard />
        <div>
          {data.map((x, i) => <WorkOffer key={x.id} data={x} />)}
          {/*           
          <WorkOffer data={data}/>
          <WorkOffer data={data}/>
          <WorkOffer data={data}/>
          <WorkOffer data={data}/> */}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
