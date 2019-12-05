import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding: 2rem 5vw;
  grid-area: content;
`;

const PageNotFound = () => (
  <Content>
      <h2>Page Not Found</h2>
  </Content>
);

export default PageNotFound;
