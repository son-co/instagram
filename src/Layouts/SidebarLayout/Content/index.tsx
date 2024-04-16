import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface ContentProps {
  children?: ReactNode;
}
const Content: FC<ContentProps> = ({ children }) => {
  return <>{children}</>;
};
Content.propTypes = {
  children: PropTypes.node
};

export default Content;
