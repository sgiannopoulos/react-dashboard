/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
import React from 'react'
import { useState, useEffect } from 'react'
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
  menuClasses,
} from 'react-pro-sidebar'
import {
  Box,
  Button,
  colors,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import { FormatQuoteOutlined } from '@mui/icons-material'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const clors = tokens(theme.palette.mode)

  const clickFunc = (title) => {
    setSelected(title)
  }

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => clickFunc(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  // const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar()

  return (
    <Box sx={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <ProSidebar backgroundColor={colors.primary[400]}>
        <Menu
          rootStyles={{}}
          menuItemStyles={{
            button: ({ active }) => {
              return {
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#868dfb !important',
                },
                '&': {
                  color: active ? '#6870fa !important' : null,
                  backgroundColor: 'transparent',
                },
              }
            },
            // button: () => {
            //   return
            // },
          }}
        >
          <MenuItem
            active={false}
            onClick={() => collapseSidebar()}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3">ADMINIS</Typography>
                <IconButton>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!collapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb="15px"
              >
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src="/vite.svg"
                  style={{ cursor: 'pointer' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                >
                  Sotiris
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={collapsed ? null : '0%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px', textAlign: 'left' }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Info"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px', textAlign: 'left' }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px', textAlign: 'left' }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
