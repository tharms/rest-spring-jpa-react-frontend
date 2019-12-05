import React from 'react';
import Items from './Items';
import styled from 'styled-components';

const Content = styled.div`
  padding: 2rem 5vw;
  grid-area: content;
`;

function HomeView() {

  return (
    <div>
      <Content>
          <Items/>
      </Content>
    </div>
  );
}

export default HomeView;
