/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material'
import Header from '../../components/Header'

const Contacts = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const cols = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5,
    },
    {
      field: 'registrarId',
      headerName: 'RegistrarId',
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
      editable: true,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      editable: true,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      editable: true,
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
      field: 'zipCode',
      headerName: 'zipCode',
      flex: 1,
      editable: true,
    },
  ]

  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        sx={{
          width: '900px',
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
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
        marginTop="40px"
        marginLeft="auto"
        marginRight="auto"
      >
        <DataGrid
          rows={mockDataContacts}
          columns={cols}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Contacts
