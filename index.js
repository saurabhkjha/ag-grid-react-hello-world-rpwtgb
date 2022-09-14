import React, {useEffect} from 'react';
import { render } from 'react-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Ag from './components/ag';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import reviewData from './data/review';
import productData from './data/products';

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
const productCol = [
  {
    field: 'pid',
    filter: true,
    resizable: true,
    flex: 1,
  },
  {
    field: 'product_name',
    filter: true,
    resizable: true,
    flex: 1,
  },
  {
    field: 'description',
    filter: true,
    resizable: true,
    flex: 1,
  },
  {
    field: 'image',
    filter: true,
    resizable: true,
    flex: 1,
  },
];

const App = () => {
  const [value, setValue] = React.useState('review');
  const [colData, setColData] = React.useState(reviewCol);
  const [rowData, setrRowData] = React.useState(reviewData);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value === 'review') {
      setColData(reviewCol);
      setrRowData(reviewData);
    } else {
      setColData(productCol);
      setrRowData(productData);
    }
  }, [value])
  return (
    <>
      <FormControl>
        <FormLabel id="data-group">Load Data</FormLabel>
        <RadioGroup
          row
          aria-labelledby="data-group"
          name="controlled-data-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="review" control={<Radio />} label="Review" />
          <FormControlLabel
            value="product"
            control={<Radio />}
            label="Product"
          />
        </RadioGroup>
      </FormControl>
      <Ag colData={colData} rowData={rowData} />
    </>
  );
};

render(<App />, document.getElementById('root'));
