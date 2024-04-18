import { MUIBox } from '@/components/MUIComponents';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Story() {
  return (
    <>
      <MUIBox>
        <Image src="/images/Avatar.jpg" width={56} height={56} alt="avt" />
      </MUIBox>
    </>
  );
}
