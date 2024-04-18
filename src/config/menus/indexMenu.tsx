import Search from '@/public/images/iconMenu/Search.svg';
import Home from '@/public/images/iconMenu/Home.svg';
import Discovery from '@/public/images/iconMenu/Discovery.svg';
import Message from '@/public/images/iconMenu/Message.svg';
import Reels from '@/public/images/iconMenu/Reels.svg';
import Notification from '@/public/images/iconMenu/Notification.svg';
import Create from '@/public/images/iconMenu/Create.svg';
import Thread from '@/public/images/iconMenu/Threads.svg';
import More from '@/public/images/iconMenu/More.svg';
import Person from '@/public/images/Avatar.jpg';

import { Trans } from 'react-i18next';
import { PATH } from '../router/routerConfig';

export const indexMenu = [
  {
    title: <Trans i18nKey="homePage" />,
    icon: Home,
    path: PATH.HOME
  },
  {
    title: <Trans i18nKey="search" />,
    icon: Search,
    path: ''
  },
  {
    title: <Trans i18nKey="discovery" />,
    icon: Discovery,
    path: PATH.DISCOVERY
  },
  {
    title: <Trans i18nKey="reels" />,
    icon: Reels,
    path: PATH.REELS
  },
  {
    title: <Trans i18nKey="message" />,
    icon: Message,
    path: PATH.MESSAGE
  },
  {
    title: <Trans i18nKey="notification" />,
    icon: Notification,
    path: ''
  },
  {
    title: <Trans i18nKey="Create" />,
    icon: Create,
    path: ''
  },
  {
    title: <Trans i18nKey="personalPage" />,
    img: Person,
    path: PATH.PROFILE
  }
];

export const footerMenu = [
  {
    title: <Trans i18nKey="thread" />,
    icon: Thread,
    path: ''
  },
  {
    title: <Trans i18nKey="seeMore" />,
    icon: More,
    path: ''
  }
];
