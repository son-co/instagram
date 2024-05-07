'use client';
import { FC, ReactNode, useContext } from 'react';
import PropTypes from 'prop-types';
import Navbar from '@/Layouts/SidebarLayout/Navbar';
import Content from '@/Layouts/SidebarLayout/Content';
import CreatePost from '@/components/createPost';
import { GeneralContext } from '@/contexts/generalContext';
interface SidebarLayoutProps {
  children?: ReactNode;
}
const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  const { isCreatePost, setIsCreatePost } = useContext(GeneralContext);

  return (
    <>
      <div className="flex ">
        <Navbar />
        <Content>{children}</Content>
        <CreatePost isOpen={isCreatePost} isClose={setIsCreatePost} />
      </div>
    </>
  );
};
SidebarLayout.propTypes = {
  children: PropTypes.node
};

export default SidebarLayout;
