import React, { useState } from 'react';

export const App: React.FC = () => {
  const [state, setState] = useState(5);

  return (
    <div>
      <h1>App</h1>
      <p>State: {state}</p>
      <button onClick={() => setState(state + 1)}>Inc</button>
    </div>
  );
};
