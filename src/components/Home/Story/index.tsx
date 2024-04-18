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
            justifyContent: 'center'
          }}>
          <MUIBox
            sx={{
              border: '2px solid #000',
              padding: '2px',
              borderRadius: '50%'
            }}>
            <Image
              src={props.data.image}
              width={0}
              height={0}
              priority
              style={{
                borderRadius: '50%',
                height: '56px !important',
                width: '56px !important'
              }}
              alt="avt"
            />
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
