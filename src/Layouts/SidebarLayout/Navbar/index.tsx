'use client';
import { MUIBox, MUIList } from '@/components/MUIComponents';
import { FC } from 'react';
import styled from 'styled-components';
import Logo from '@/public/images/iconMenu/Logo.svg';
import SVG from 'react-inlinesvg';
import { indexMenu, footerMenu } from '@/config/menus/indexMenu';
import MenuItem from '@/components/MenuItem';

const NavbarStyle = styled.div`
  width: 244px;
  height: 100vh;
  border-right: 1px solid #ccc;
  padding: 8px 12px 20px;
`;

const Navbar: FC = () => {
  return (
    <>
      <NavbarStyle className="flex flex-col justify-between">
        <MUIBox
          sx={{
            height: '92px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <SVG src={Logo} width="100%" title="React" />
        </MUIBox>
        <MUIBox className="flex-auto">
          <MUIList>
            {indexMenu.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </MUIList>
        </MUIBox>
        <MUIBox>
          <MUIList>
            {footerMenu.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </MUIList>
        </MUIBox>
      </NavbarStyle>
    </>
  );
};

export default Navbar;
