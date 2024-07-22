'use client';
import { useEffect, useState } from 'react';
import { 
  MUICard, 
  MUIPaper,
  MUIBottomNavigation,
  MUIBottomNavigationAction
  } from '@/components/MUIComponents';

import { FC, useContext } from 'react';
import SVG from 'react-inlinesvg'
import SendIcon from '@mui/icons-material/Send'
import styled from 'styled-components';
import Home from '@/public/images/iconMenu/Home.svg';
import Discovery from '@/public/images/iconMenu/Discovery.svg';
import Message from '@/public/images/iconMenu/Message.svg';
import Reels from '@/public/images/iconMenu/Reels.svg';
import Create from '@/public/images/iconMenu/Create.svg';

const BottomNav: FC = () => {  

    const ImageStyle = styled.img`
        width: 25px;
        height: 25px;
        border-radius: 50%;
    `
  return (
        <>
            <MUIPaper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }} elevation={3}>
            <MUIBottomNavigation>
                <MUIBottomNavigationAction icon={<SVG src={Home} />} />
                <MUIBottomNavigationAction icon={<SVG src={Discovery} />} />
                <MUIBottomNavigationAction icon={<SVG src={Message} />} />
                <MUIBottomNavigationAction icon={<SVG src={Reels} />} />
                <MUIBottomNavigationAction icon={<SVG src={Create} />} />
                <MUIBottomNavigationAction icon={<ImageStyle src='/images/Avatar.jpg' alt='' />} />
            </MUIBottomNavigation>
            </MUIPaper>
       </>
    )
};

export default BottomNav;
