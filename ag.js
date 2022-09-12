import React, { useState, useRef, useCallback, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';

import LongMenu from './long';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export const data = [
  {
    claimId: 107522,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107531,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107532,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107533,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107534,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107522,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107535,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107536,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107537,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107538,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107539,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107540,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107541,
    dc: '1111',
    incidentNumber: 'INC11111111',
    issue: 'TEST',
    issueStartTs: '2022-08-19 00:08:00',
  },
  {
    claimId: 107521,
    actionItems: '',
    createdBy: 'Varun Mandapati',
    createId: 'vn53mj3',
    createTs: '2022-08-19 06:08:90',
    dc: '1111',
    defect: '',
    incidentNumber: 'INC45653478',
    issue: 'DEV TEST',
    issueEndTs: null,
    issueStartTs: '2022-08-19 00:08:00',
    ordersLate: 123,
    resolution: 'DEV TEST',
    rootApplication: '',
    rootCause: '',
    rootGrouping: '',
    rootHardware: '',
    rootOwner: '',
    status: 'RCA Submitted',
    statusCode: 0,
    totalImpactCost: 0,
    totalProdMinutes: '',
    type: '',
    vendorTicket: '',
    comments: '',
    description: '',
    autoCalMins: 407,
    dateResolved: null,
    lastModifiedTs: null,
    lastUpdatedBy: null,
    lastUpdatedId: null,
  },
  {
    claimId: 107515,
    actionItems: '',
    createdBy: 'Varun Mandapati',
    createId: null,
    createTs: '2022-08-12 11:08:13',
    dc: '1111',
    defect: 'DEV TEST',
    incidentNumber: 'INC12312345',
    issue: 'DEV TEST',
    issueEndTs: null,
    issueStartTs: '2022-08-12 00:08:00',
    ordersLate: 1121,
    resolution: 'DEV TEST',
    rootApplication: 'GEC Application',
    rootCause: '',
    rootGrouping: '',
    rootHardware: 'FedEx Dedicated Workstation',
    rootOwner: '',
    status: 'RCA Submitted',
    statusCode: 0,
    totalImpactCost: 173.42,
    totalProdMinutes: '529',
    type: '',
    vendorTicket: 'DEV TEST',
    comments: '',
    description: '',
    autoCalMins: 668,
    dateResolved: null,
    lastModifiedTs: null,
    lastUpdatedBy: null,
    lastUpdatedId: null,
  },
  {
    claimId: 107514,
    actionItems: 'DEV TEST',
    createdBy: 'Varun Mandapati - Vendor',
    createId: null,
    createTs: '2022-08-12 10:08:25',
    dc: '4752',
    defect: 'DEV TEST',
    incidentNumber: 'INC12345678',
    issue: 'DEV TEST',
    issueEndTs: null,
    issueStartTs: '2022-08-12 00:08:00',
    ordersLate: 123,
    resolution: 'DEV TEST',
    rootApplication: 'GEC Application',
    rootCause: 'DEV TEST',
    rootGrouping: 'DEV TEST',
    rootHardware: 'FedEx Dedicated Workstation',
    rootOwner: 'DEV TEST',
    status: 'RCA Submitted',
    statusCode: 0,
    totalImpactCost: 345.21,
    totalProdMinutes: '1053',
    type: 'Application',
    vendorTicket: 'DEV TESAAAA',
    comments: 'DEV TE',
    description: 'DEV TEST',
    autoCalMins: 609,
    dateResolved: null,
    lastModifiedTs: null,
    lastUpdatedBy: null,
    lastUpdatedId: null,
  },
];

function ActionPopover(props) {
  const buttonClicked = () => {
    alert(`${cellValue} medals won!`);
  };

  return (
    <span>
      <LongMenu id={props.data.claimId} />
    </span>
  );
}

export default function Ag({
  rowData,
  pageNumber = 1,
  loading = false,
  hideToolbar = false,
}) {
  const gridRef = useRef();
  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'claimId',
      // headerName: "Claim ID",
      filter: true,
      resizable: true,
      flex: 1,
    },
    {
      field: 'issueStartTs',
      headerName: 'Start Date/Time',
      filter: true,
      resizable: true,
      flex: 1,
    },
    {
      field: 'dc',
      headerName: 'Site #',
      filter: true,
      resizable: true,
      flex: 1,
    },
    {
      field: 'incidentNumber',
      headerName: 'INC',
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
    { field: 'Action', maxWidth: 100, cellRenderer: ActionPopover },
  ]);

  const [gridApi, setGridApi] = useState();
  let paginationProps = {
    pagination: true,
    paginationPageSize: 10,
    cacheBlockSize: 10,
  };
  const onGridReady = ({ api }) => setGridApi(api);

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
        ref={gridRef} // Ref for accessing Grid's API
        rowData={rowData} // Row Data for Rows
        columnDefs={columnDefs} // Column Defs for Columns
        defaultColDef={defaultColDef} // Default Column Properties
        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        rowSelection="multiple" // Options - allows click selection of rows
        onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        onPaginationChanged={onPaginationChanged}
        onGridReady={onGridReady}
        {...paginationProps}
      />
    </div>
  );
}
