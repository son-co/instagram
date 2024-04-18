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
}
const MenuItem = (props: MenuItemProps) => {
  const router = useRouter();

  return (
    <>
      <Link href={props?.item.path}>
        <MUIListItem sx={{ px: 0 }}>
          <MUIListItemButton
            sx={{ px: 0, borderRadius: '10px' }}
            selected={router.asPath === props?.item.path}
            className="!bg-transparent">
            {props?.item?.icon && (
              <MUIListItemIcon sx={{ color: '#000' }}>
                <SVG
                  src={props?.item.icon}
                  width="100%"
                  title="React"
                  style={
                    router.asPath === props?.item.path
                      ? { color: 'black' }
                      : { color: 'normal' }
                  }
                />
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
                  width={24}
                  height={24}
                  alt="React"
                  style={{
                    borderRadius: '50%'
                  }}
                />
              </MUIListItemIcon>
            )}
            <MUITypography
              sx={
                router.asPath === props?.item.path
                  ? { fontWeight: 'bold' }
                  : { fontWeight: 'normal' }
              }>
              {props?.item.title}
            </MUITypography>
          </MUIListItemButton>
        </MUIListItem>
      </Link>
    </>
  );
};

export default MenuItem;
