import Post from '@/components/Home/Post';
import Story from '@/components/Home/Story';
import { MUIGrid } from '@/components/MUIComponents';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const data = [
  {
    username: 'afgfgbc',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'gfggg',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'jfgjt',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'afgdgdbc',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'adfgdfbc',
    image: '/images/Avatar.jpg',
    path: ''
  },
  {
    username: 'abdfc',
    image: '/images/Avatar.jpg',
    path: ''
  }
];

export default function Home() {
  return (
    <>
      <MUIGrid container sx={{ justifyContent: 'center', mt: 3 }}>
        <MUIGrid item xs={12} md={8} sx={{ maxWidth: '630px !important' }}>
          <MUIGrid container spacing={2}>
            {data.map((item, index) => (
              <Story key={index} data={item} />
            ))}
          </MUIGrid>
        </MUIGrid>
        <MUIGrid
          item
          xs={12}
          md={4}
          sx={{
            maxWidth: '319px !important',
            display: { xs: 'none', sm: 'none', md: 'block' }
          }}>
          <Post />
        </MUIGrid>
      </MUIGrid>
    </>
  );
}
