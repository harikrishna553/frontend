import React, { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Counter' : 'Show Counter'}
      </button>
      
      {isVisible && <Counter />}
    </div>
  );
};

export default App;
