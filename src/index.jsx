import React from "react";
import App from './App'
import { createRoot } from 'react-dom/client';

//utilizar el componente
/*
ReactDOM.render(<App/>,
      document.getElementById('root'));
*/


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<React.StrictMode>
  <App />
</React.StrictMode>);