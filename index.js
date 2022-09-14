import React from 'react';
import { render } from 'react-dom';
import Ag, { data } from './components/ag';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import reviewData from './data/review';

const reviewCol = [
  {
    field: 'userId',
    filter: true,
    resizable: true,
    flex: 1,
  },
  {
    field: 'productId',
    filter: true,
    resizable: true,
    flex: 1,
  },
  {
    field: 'rating',
    filter: true,
    resizable: true,
    flex: 1,
  },
  {
    field: 'time',
    filter: true,
    resizable: true,
    flex: 1,
  },
];

const App = () => {
  return <Ag colData={reviewCol} rowData={reviewData} />;
};

render(<App />, document.getElementById('root'));
