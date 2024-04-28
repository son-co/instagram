import { MUIBox, MUICard, MUITypography } from '@/components/MUIComponents';
import { ACTION_COLOR_PRIMARY } from '@/config/style';
import Image from 'next/image';
import Link from 'next/link';

const Account = () => {
  return (
    <>
      <MUICard
        sx={{
          border: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: 'none',
          mt: 2
        }}>
        <MUIBox
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '10px'
          }}>
          <MUIBox>
            <Image
              src="/images/Avatar.jpg"
              width={44}
              height={44}
              style={{
                borderRadius: '50%',
                height: '44px !important',
                width: '44px !important'
              }}
              alt="avt"
            />
          </MUIBox>
          <MUIBox>
            <Link href={''}>
              <MUITypography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                sont.thed
              </MUITypography>
            </Link>
            <MUITypography sx={{ fontSize: '14px' }}>
              Nguyễn Thế Sơn
            </MUITypography>
          </MUIBox>
        </MUIBox>
        <Link href={''}>
          <MUITypography
            sx={{
              fontWeight: 'bold',
              color: ACTION_COLOR_PRIMARY,
              fontSize: '12px'
            }}>
            Chuyển
          </MUITypography>
        </Link>
      </MUICard>
    </>
  );
};

export default Account;
