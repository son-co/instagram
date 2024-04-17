'use client';
import {
  MUIListItem,
  MUIListItemButton,
  MUIListItemIcon,
  MUITypography
} from '../MUIComponents';
import SVG from 'react-inlinesvg';

interface MenuItemProps {
  item?: any;
}
const MenuItem = (props: MenuItemProps) => {
  return (
    <>
      <MUIListItem sx={{ px: 0 }}>
        <MUIListItemButton sx={{ px: 0 }}>
          <MUIListItemIcon sx={{ color: '#000' }}>
            <SVG src={props?.item.icon} width="100%" title="React" />
          </MUIListItemIcon>
          <MUITypography>{props?.item.title}</MUITypography>
        </MUIListItemButton>
      </MUIListItem>
    </>
  );
};

export default MenuItem;
