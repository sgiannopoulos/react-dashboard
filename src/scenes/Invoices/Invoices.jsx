/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataInvoices } from '../../data/mockData'
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material'
import Header from '../../components/Header'

const Invoices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const cols = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      editable: true,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      editable: true,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
      editable: true,
    },
  ]

  return (
    <Box m="20px">
      <Header
        title="Invoices"
        subtitle="List of Invoices for Future Reference"
      />
      <Box
        sx={{
          minWidth: '550px',
          maxWidth: '70vw',
          height: '75vh',
          '& .MuiDataGrid-root': { border: 'none' },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
        marginTop="40px"
        marginLeft="auto"
        marginRight="auto"
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={cols}
          checkboxSelection
          GridToolbar={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Invoices
