import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { MUICard } from '@/components/MUIComponents';

interface ContentProps {
  children?: ReactNode;
}
const Content: FC<ContentProps> = ({ children }) => {
  return (
    <>
      <MUICard sx={{ border: 'none', boxShadow: 'none', width: '100%' }}>
        {children}
      </MUICard>
    </>
  );
};
Content.propTypes = {
  children: PropTypes.node
};

export default Content;
