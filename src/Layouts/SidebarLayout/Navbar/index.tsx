'use client';
import { MUIBox, MUICard, MUIList } from '@/components/MUIComponents';
import { FC, useContext } from 'react';
import styled from 'styled-components';
import Logo from '@/public/images/iconMenu/Logo.svg';
import LogoIcon from '@/public/images/iconMenu/LogoIcon.svg';
import SVG from 'react-inlinesvg';
import { indexMenu, footerMenu } from '@/config/menus/indexMenu';
import MenuItem from '@/components/MenuItem';
import {
  WIDTH_NAVBAR_EXPAND,
  WIDTH_NAVBAR_COLLAPSE,
  COLOR_BORDER_CARD
} from '@/config/style';
import { GeneralContext } from '@/contexts/generalContext';

const NavbarStyle = styled(MUICard)(
  () => `
  height: 100%;
  border-right: 1px solid ${COLOR_BORDER_CARD};
  padding: 8px 12px 20px;
  position: fixed;
`
);

const Navbar: FC = () => {
  // const isExpand = true;
  const { isExpand } = useContext(GeneralContext);
  return (
    <>
      <MUIBox
        sx={{
          width: isExpand ? WIDTH_NAVBAR_COLLAPSE : WIDTH_NAVBAR_EXPAND
        }}
      />
      <NavbarStyle
        className="flex flex-col justify-between"
        sx={{
          borderRadius: '0px !important',
          width: isExpand ? WIDTH_NAVBAR_COLLAPSE : WIDTH_NAVBAR_EXPAND
        }}>
        <MUIBox
          sx={{
            width: isExpand ? WIDTH_NAVBAR_COLLAPSE : WIDTH_NAVBAR_EXPAND
          }}
        />
        <MUIBox
          sx={{
            height: '92px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          {!isExpand ? (
            <SVG src={Logo} width="100%" title="Logo" />
          ) : (
            <SVG src={LogoIcon} width="100%" title="Logo" />
          )}
        </MUIBox>
        <MUIBox className="flex-auto">
          <MUIList>
            {indexMenu.map((item, index) => (
              <MenuItem key={index} item={item} isExpand={!isExpand} />
            ))}
          </MUIList>
        </MUIBox>
        <MUIBox>
          <MUIList>
            {footerMenu.map((item, index) => (
              <MenuItem key={index} item={item} isExpand={!isExpand} />
            ))}
          </MUIList>
        </MUIBox>
      </NavbarStyle>
    </>
  );
};

export default Navbar;
