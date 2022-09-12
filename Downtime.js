import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-material.css'; // Optional theme CSS

export default function DownTimes({ rowData, loading, hideToolbar = false }) {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  // const { clientHeight, clientWidth } = useWindowDimensions();
  // const { bar } = useBar();
  const [openScreenShotDialog, setOpenScreenShotDialog] = React.useState(false);
  console.log('#############', loading, rowData);
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'claimId',
      // headerName: "Claim ID",
      filter: true,
      resizable: true,
      flex: 1,
    },
    {
      field: 'startDateTime',
      // headerName: "Start Date/Time",
      filter: true,
      resizable: true,
      flex: 1,
    },
    {
      field: 'siteNo',
      //  headerName: "Site #",
      filter: true,
      resizable: true,
      flex: 1,
    },
    {
      field: 'inc',
      // headerName: "INC",
      filter: true,
      resizable: true,
      flex: 1,
    },
    {
      field: 'issue',
      //headerName: "Issue",
      filter: true,
      resizable: true,
      flex: 1,
    },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = {
    sortable: true,
  };

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log('cellClicked', event);
  }, []);

  const handleSearch = ({ target: { value } }) => {
    if (gridRef.current) {
      gridRef.current.api.setQuickFilter(value);
    }
  };

  return (
    <div className="ag-theme-material">
      {!loading && rowData.length && (
        <AgGridReact
          sideBar={true}
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      )}
    </div>
  );
}
