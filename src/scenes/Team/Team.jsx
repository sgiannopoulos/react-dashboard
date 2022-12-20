/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material'
import Header from '../../components/Header'

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const cols = [
    {
      field: 'id',
      headername: 'ID',
      width: 90,
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
      field: 'access',
      headerName: 'Access',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="8px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlined />}
            {access === 'manager' && <SecurityOutlined />}
            {access === 'user' && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: '10px' }}>
              {access}
            </Typography>
          </Box>
        )
      },
    },
  ]

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
        }}
        marginTop="40px"
        marginLeft="auto"
        marginRight="auto"
      >
        <DataGrid rows={mockDataTeam} columns={cols} />
      </Box>
    </Box>
  )
}

export default Team
