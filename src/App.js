import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="React" color="blue" />
      <Hello color="green" />
    </Wrapper>
  );
}

export default App;
