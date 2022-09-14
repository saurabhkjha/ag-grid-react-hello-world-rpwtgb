import React, { useState, useRef, useCallback, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';

import ActionMenu from './long';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function ActionPopover(props) {
  const buttonClicked = () => {
    alert(`${cellValue} medals won!`);
  };

  return (
    <span>
      <ActionMenu id={props.data.id} />
    </span>
  );
}

export default function Ag({
  rowData,
  colData,
  pageNumber = 1,
  loading = false,
}) {
  const gridRef = useRef();
  const [columnDefs, setColumnDefs] = useState([
    ...colData,
    { field: 'Action', maxWidth: 100, cellRenderer: ActionPopover },
  ]);
  const [gridApi, setGridApi] = useState();
  let paginationProps = {
    pagination: true,
    paginationPageSize: 10,
    cacheBlockSize: 10,
  };
  const onGridReady = ({ api }) => setGridApi(api);
  useEffect(() => {
    if (!gridApi) {
      return;
    }
    gridApi.setColumnDefs([
      ...colData,
      { field: 'Action', maxWidth: 100, cellRenderer: ActionPopover },
    ]);
  }, [colData]);
  const onPaginationChanged = useCallback(
    ({ newPage }) => {
      if (!gridApi || !newPage) {
        return;
      }
      const currentPage = gridApi.paginationGetCurrentPage();
    },
    [gridApi]
  );
  useEffect(() => {
    if (!gridApi || isNaN(pageNumber)) {
      return;
    }
    const currentPage = gridApi.paginationGetCurrentPage();
    if (pageNumber === currentPage) {
      return;
    }
    gridApi.paginationGoToPage(pageNumber);
  }, [gridApi, pageNumber]);

  const defaultColDef = {
    sortable: true,
  };

  const cellClickedListener = useCallback((event) => {
    //console.log('cellClicked', event);
  }, []);

  return (
    <div className="ag-theme-material" style={{ height: 400, width: 900 }}>
      <AgGridReact
        sideBar={true}
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowSelection="multiple"
        onCellClicked={cellClickedListener}
        onPaginationChanged={onPaginationChanged}
        onGridReady={onGridReady}
        {...paginationProps}
      />
    </div>
  );
}
