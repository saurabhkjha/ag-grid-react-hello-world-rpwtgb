import React from 'react';
import { render } from 'react-dom';
import Ag, { data } from './components/ag';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  return <Ag rowData={data} />;
};

render(<App />, document.getElementById('root'));
