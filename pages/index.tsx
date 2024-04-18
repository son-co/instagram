import Post from '@/components/Home/Post';
import Story from '@/components/Home/Story';
import { MUIGrid } from '@/components/MUIComponents';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <MUIGrid container sx={{ justifyContent: 'center' }}>
        <MUIGrid item xs={12} md={8} sx={{ maxWidth: '630px !important' }}>
          <Story />
        </MUIGrid>
        <MUIGrid
          item
          xs={12}
          md={4}
          sx={{
            maxWidth: '319px !important',
            display: { xs: 'none', sm: 'none' }
          }}>
          <Post />
        </MUIGrid>
      </MUIGrid>
    </>
  );
}
