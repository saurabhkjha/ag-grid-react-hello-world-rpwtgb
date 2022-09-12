import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import Ag, { data } from './ag';

import DownTimes from './Downtime';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  //return <DownTimes rowData={data} loading={false} />;
  return <Ag rowData={data} />;
};

render(<App />, document.getElementById('root'));
