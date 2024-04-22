import {
  MUIBox,
  MUIButton,
  MUICard,
  MUIIconButton,
  MUITypography
} from '@/components/MUIComponents';
import Image from 'next/image';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Tooltip } from '@mui/material';
import Like from '@/public/images/posts/Like.svg';
import Comment from '@/public/images/posts/Comment.svg';
import Share from '@/public/images/posts/Share.svg';
import Save from '@/public/images/posts/Save.svg';
import SVG from 'react-inlinesvg';
import { COLORS_BLACK } from '@/config/style';

export default function Post() {
  return (
    <>
      <MUICard
        sx={{
          border: 'none',
          boxShadow: 'none',
          width: '468px',
          mt: 2,
          position: 'relative'
        }}>
        <MUIBox className="flex justify-between items-center">
          <MUIBox className="flex justify-start items-center gap-2">
            <Image
              src="/images/Avatar.jpg"
              width={32}
              height={32}
              style={{
                borderRadius: '50%',
                height: '32px !important',
                width: '32px !important'
              }}
              alt="avt"
            />
            <MUITypography sx={{ fontWeight: 'bold' }}>username</MUITypography>
            <MUITypography> 1 giờ</MUITypography>
          </MUIBox>
          <MUIIconButton
            sx={{
              pr: 0,
              background: 'transparent',
              '&:hover': {
                background: 'transparent'
              }
            }}>
            <MoreHorizIcon />
          </MUIIconButton>
        </MUIBox>
        <MUIBox sx={{ mt: 1 }} className="w-full">
          <Image
            src="/images/Avatar.jpg"
            width={0}
            height={0}
            style={{
              width: '100% ',
              height: '100% ',
              objectFit: 'cover'
            }}
            alt="avt"
          />
        </MUIBox>
        <MUIBox
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            my: 1
          }}>
          <MUIBox
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              gap: '10px'
            }}>
            <Tooltip title="Like">
              <MUIIconButton sx={{ color: COLORS_BLACK }}>
                <SVG src={Like} width="100%" title="Like" />
              </MUIIconButton>
            </Tooltip>
            <Tooltip title="Comment">
              <MUIIconButton sx={{ color: COLORS_BLACK }}>
                <SVG src={Comment} width="100%" title="comment" />
              </MUIIconButton>
            </Tooltip>
            <Tooltip title="Share Post">
              <MUIIconButton sx={{ color: COLORS_BLACK }}>
                <SVG src={Share} width="100%" title="share" />
              </MUIIconButton>
            </Tooltip>
          </MUIBox>
          <MUIBox>
            <Tooltip title="Lưu">
              <MUIIconButton sx={{ color: COLORS_BLACK }}>
                <SVG src={Save} width="100%" title="save" />
              </MUIIconButton>
            </Tooltip>
          </MUIBox>
        </MUIBox>
        <MUIBox>
          <MUITypography>11 like</MUITypography>
        </MUIBox>
        <MUIBox>
          <span className="font-bold">user</span>
          <span>
            {' '}
            Một tác giả từng nói: “Đi tắm , ngắm hoa, ăn cơm, nếu bạn cảm thấy
            hạnh phúc, nó không phải vì bạn tắm rất sạch, hoa nở rất đẹp hay nấu
            cơm rất hợp khẩu vị của bạn, mà chủ yếu là bởi trong lòng bạn không
            có phiền muộn.”
          </span>
        </MUIBox>
        <MUIButton title="Xem tất cả ">Xem tất cả</MUIButton>

        <MUIBox></MUIBox>
      </MUICard>
    </>
  );
}
