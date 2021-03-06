import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridFilterModel } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'شماره', width: 100 },
  { field: 'firstName', headerName: 'نام', width: 130 },
  { field: 'lastName', headerName: 'نام خانوادگی', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'توضیحات تولتیپ',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function GlassterTable({ data, columnsData, pageSize, rowsPerPage }) {
  const filterModel: GridFilterModel = {
    items: [
      { id: 1, columnField: 'rating', operatorValue: '>', value: '4' },
      { id: 2, columnField: 'isAdmin', operatorValue: 'is', value: 'true' },
    ],
    linkOperator: GridLinkOperator.Or,
  };

  // Example 2: get rows with rating > 4 AND isAdmin = true
  const filterModel: GridFilterModel = {
    items: [
      { id: 1, columnField: 'rating', operatorValue: '>', value: '4' },
      { id: 2, columnField: 'isAdmin', operatorValue: 'is', value: 'true' },
    ],
    linkOperator: GridLinkOperator.And,
  };
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </>
  );
}
