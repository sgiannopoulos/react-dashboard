/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'

const Dashboard = (props) => {
  return (
    <Box m="230px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Say hello to my little dashboard" />
      </Box>
    </Box>
  )
}

export default Dashboard
