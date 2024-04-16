'use client';
import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Navbar from '@/Layouts/SidebarLayout/Navbar';
import Content from '@/Layouts/SidebarLayout/Content';
interface SidebarLayoutProps {
  children?: ReactNode;
}
const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex ">
        <Navbar />
        <Content>{children}</Content>
      </div>
    </>
  );
};
SidebarLayout.propTypes = {
  children: PropTypes.node
};

export default SidebarLayout;
