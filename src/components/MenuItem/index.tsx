'use client';
import Link from 'next/link';
import {
  MUIListItem,
  MUIListItemButton,
  MUIListItemIcon,
  MUITypography
} from '../MUIComponents';
import SVG from 'react-inlinesvg';
import Image from 'next/image';

interface MenuItemProps {
  item?: any;
}
const MenuItem = (props: MenuItemProps) => {
  return (
    <>
      <Link href={props?.item.path}>
        <MUIListItem sx={{ px: 0 }}>
          <MUIListItemButton sx={{ px: 0 }}>
            {props?.item?.icon && (
              <MUIListItemIcon sx={{ color: '#000' }}>
                <SVG src={props?.item.icon} width="100%" title="React" />
              </MUIListItemIcon>
            )}
            {props?.item?.img && (
              <MUIListItemIcon
                sx={{
                  color: '#000',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <Image
                  src={props?.item.img}
                  width={24}
                  height={24}
                  alt="React"
                  style={{
                    borderRadius: '50%'
                  }}
                />
              </MUIListItemIcon>
            )}
            <MUITypography>{props?.item.title}</MUITypography>
          </MUIListItemButton>
        </MUIListItem>
      </Link>
    </>
  );
};

export default MenuItem;
