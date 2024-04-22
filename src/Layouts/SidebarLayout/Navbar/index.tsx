'use client';
import { MUIBox, MUICard, MUIList } from '@/components/MUIComponents';
import { FC } from 'react';
import styled from 'styled-components';
import Logo from '@/public/images/iconMenu/Logo.svg';
import LogoIcon from '@/public/images/iconMenu/LogoIcon.svg';
import SVG from 'react-inlinesvg';
import { indexMenu, footerMenu } from '@/config/menus/indexMenu';
import MenuItem from '@/components/MenuItem';
import { WIDTH_NAVBAR_EXPAND, WIDTH_NAVBAR_COLLAPSE } from '@/config/style';

const NavbarStyle = styled(MUICard)(
  () => `
  height: 100%;
  border-right: 1px solid #ccc;
  padding: 8px 12px 20px;
  position: fixed;
`
);

const Navbar: FC = () => {
  const isExpand = true;
  return (
    <>
      <MUIBox
        sx={{
          width: isExpand ? WIDTH_NAVBAR_EXPAND : WIDTH_NAVBAR_COLLAPSE
        }}
      />
      <NavbarStyle
        className="flex flex-col justify-between"
        sx={{
          borderRadius: '0px !important',
          width: isExpand ? WIDTH_NAVBAR_EXPAND : WIDTH_NAVBAR_COLLAPSE
        }}>
        <MUIBox
          sx={{
            width: isExpand ? WIDTH_NAVBAR_EXPAND : WIDTH_NAVBAR_COLLAPSE
          }}
        />
        <MUIBox
          sx={{
            height: '92px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          {isExpand ? (
            <SVG src={Logo} width="100%" title="Logo" />
          ) : (
            <SVG src={LogoIcon} width="100%" title="Logo" />
          )}
        </MUIBox>
        <MUIBox className="flex-auto">
          <MUIList>
            {indexMenu.map((item, index) => (
              <MenuItem key={index} item={item} isExpand={isExpand} />
            ))}
          </MUIList>
        </MUIBox>
        <MUIBox>
          <MUIList>
            {footerMenu.map((item, index) => (
              <MenuItem key={index} item={item} isExpand={isExpand} />
            ))}
          </MUIList>
        </MUIBox>
      </NavbarStyle>
    </>
  );
};

export default Navbar;
