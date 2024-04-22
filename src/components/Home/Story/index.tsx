import {
  MUIBox,
  MUICard,
  MUIGrid,
  MUITypography
} from '@/components/MUIComponents';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
interface StoryProps {
  data?: any;
}
const Story = (props: StoryProps) => {
  return (
    <>
      <MUIGrid item>
        <MUICard
          sx={{
            boxShadow: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start'
          }}>
          <MUIBox
            sx={{
              border: '1px solid transparent',
              padding: '2px',
              borderRadius: '50%',
              backgroundImage:
                'linear-gradient(to right top, #ffc805, #ff0b67,#e152d8,#ff0b67)'
            }}>
            <MUIBox
              sx={{
                padding: '2px',
                background: '#fff',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Image
                src={props.data.image}
                width={56}
                height={56}
                priority
                style={{
                  borderRadius: '50%',
                  height: '56px !important',
                  width: '56px !important'
                }}
                alt="avt"
              />
            </MUIBox>
          </MUIBox>
          <MUIBox>
            <MUITypography>{props.data.username}</MUITypography>
          </MUIBox>
        </MUICard>
      </MUIGrid>
    </>
  );
};

export default Story;
