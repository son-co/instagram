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
import { useRouter } from 'next/router';
import { GeneralContext } from '@/contexts/generalContext';
import { useContext } from 'react';

interface MenuItemProps {
  item?: any;
  isExpand?: boolean;
}
const MenuItem = (props: MenuItemProps) => {
  const router = useRouter();
  const { closeSidebar, openSidebar, toggleCreatePost } =
    useContext(GeneralContext);
  const handleClick = (key: string) => {
    if (key === 'search' || key === 'notification') {
      console.log('bac');
      closeSidebar();
    } else if (key === 'create') {
      toggleCreatePost();
    } else {
      openSidebar();
    }
  };

  return (
    <>
      <Link href={props?.item.path}>
        <MUIListItem sx={{ px: 0 }}>
          <MUIListItemButton
            sx={{
              px: 0,
              borderRadius: '10px',
              justifyContent: props.isExpand ? '' : 'center'
            }}
            onClick={() => handleClick(props?.item?.isPopup)}
            selected={router.asPath === props?.item.path}
            className="!bg-transparent">
            {props?.item?.icon && (
              <MUIListItemIcon sx={{ color: '#000' }}>
                {router.asPath === props?.item.path && props?.item.active ? (
                  <SVG src={props?.item.active} width="100%" title="icon" />
                ) : (
                  <SVG src={props?.item.icon} width="100%" title="icon" />
                )}
              </MUIListItemIcon>
            )}
            {props?.item?.img && (
              <MUIListItemIcon
                sx={{
                  color: '#000',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <img
                  src="/images/Avatar.jpg"
                  alt="icon"
                  style={{
                    borderRadius: '50%',
                    height: '24px !important',
                    width: '24px !important'
                  }}
                />
              </MUIListItemIcon>
            )}
            <MUITypography
              sx={{
                fontWeight:
                  router.asPath === props?.item.path ? 'bold' : 'normal',
                display: props?.isExpand ? 'block' : 'none'
              }}>
              {props?.item.title}
            </MUITypography>
          </MUIListItemButton>
        </MUIListItem>
      </Link>
    </>
  );
};

export default MenuItem;
