'use client';
import { useEffect, useState } from 'react';
import { 
  MUICard, 
  MUIPaper,
  MUIBottomNavigation,
  MUIBottomNavigationAction,
  MUIBox,
  } from '@/components/MUIComponents';

import { FC, useContext } from 'react';
import SVG from 'react-inlinesvg'
import SendIcon from '@mui/icons-material/Send'
import Logo from '@/public/images/iconMenu/Logo.svg';
import Notification from '@/public/images/iconMenu/Notification.svg';

import { TextField } from '@mui/material';
const TopNav: FC = () => {  
  return (
        <>
            <MUIPaper sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1 }} elevation={1}>
                <MUIBox sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    px: 2,
                    py: 1
                }}>
                    <SVG src={Logo} />
                    <TextField size="small" sx={{width:'60%'}} name="search" />
                    <SVG src={Notification} />
                </MUIBox>
            </MUIPaper>
       </>
    )
};

export default TopNav;
