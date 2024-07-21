import { 
    MUIBox,
    MUIList, 
    MUIListItem, 
    MUIListItemButton,
    MUIListItemIcon,
    MUIListItemText
} from '@/components/MUIComponents';

import { COLOR_BORDER_CARD, WIDTH_NAVBAR_COLLAPSE } from '@/config/style';
import { GeneralContext } from '@/contexts/generalContext';
import { Divider, TextField } from '@mui/material';
import { useContext } from 'react';
import { logOutUser } from '@/slices/auth/authThunk';
import { store } from '@/store';


import SVG from 'react-inlinesvg'
import Option from '@/public/images/profile/Option.svg'
import Activity from '@/public/images/iconMenu/Activity.svg'
import Saved from '@/public/images/iconMenu/Saved.svg'
import Report from '@/public/images/iconMenu/Report.svg'
import Theme from '@/public/images/iconMenu/Theme.svg'
import Threads from '@/public/images/iconMenu/Threads.svg'

const More = () => {
  const { isExpand, toggleSidebar, contentSidebarItem } = useContext(GeneralContext);
  return (
    <>
      {contentSidebarItem === 'more' && (
        <MUIBox sx={{
            width: 266,
            boxShadow:'2px 2px 10px grey',
            borderRadius: 4,
            position:'fixed',
            bottom: 25,
            left: 60,
            background: '#ffffff'
        }}>
            <MUIList>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Option} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Cài đặt"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Activity} color="#000" width="25" title="icon" />
                        </MUIListItemIcon>
                        <MUIListItemText primary="Hoạt động của bạn"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Saved} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Đã lưu"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Theme} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Chuyển chế độ"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Report} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Báo cáo sự cố"/>
                    </MUIListItemButton>
                </MUIListItem>
            </MUIList>
            <MUIList>
                <MUIListItem>
                    <MUIListItemButton>
                        <MUIListItemIcon>
                            <SVG src={Threads} color="#000" width="25" title="icon"/>
                        </MUIListItemIcon>
                        <MUIListItemText primary="Threads"/>
                    </MUIListItemButton>
                </MUIListItem>
            </MUIList>
            <MUIList>
                <MUIListItem>  
                    <MUIListItemButton>
                        <MUIListItemText primary="Chuyển tài khoản"/>
                    </MUIListItemButton>
                </MUIListItem>
                <MUIListItem>  
                    <MUIListItemButton onClick={() => store.dispatch(logOutUser())}>
                        <MUIListItemText primary="Đăng xuất"/>
                    </MUIListItemButton>
                </MUIListItem>
            </MUIList>
        </MUIBox>
     
      )}
    </>
  );
};

export default More;
