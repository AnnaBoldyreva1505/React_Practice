import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from 'components/App';
import {ThemeProvider} from 'styled-components'
//если используется стайл компонентс нужно использовать тимизацию (Theming) https://styled-components.com/docs/advanced#theming

const theme = {
colors: {
  black: '#252525',
  white: '#ffffff',
  accent: 'tomato',
},
radii: {
  sm: '2px',
  md: '4px',
  lg: '8px',
},
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
