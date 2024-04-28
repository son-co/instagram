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

interface MenuItemProps {
  item?: any;
  isExpand?: boolean;
}
const MenuItem = (props: MenuItemProps) => {
  const router = useRouter();

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
                <Image
                  src="/images/Avatar.jpg"
                  priority
                  width={0}
                  height={0}
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
