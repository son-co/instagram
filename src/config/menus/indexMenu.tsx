import Search from '@/public/images/Search.svg';
import Home from '@/public/images/Home.svg';
import Discovery from '@/public/images/Discovery.svg';
import Message from '@/public/images/Message.svg';
import Reels from '@/public/images/Reels.svg';
import Notification from '@/public/images/Notification.svg';
import Create from '@/public/images/Create.svg';
import Personal from '@/public/images/Create.svg';

import { Trans } from 'react-i18next';

export const indexMenu = [
  {
    title: <Trans i18nKey="homePage" />,
    icon: Home,
    path: ''
  },
  {
    title: <Trans i18nKey="search" />,
    icon: Search,
    path: ''
  },
  {
    title: <Trans i18nKey="discovery" />,
    icon: Discovery,
    path: ''
  },
  {
    title: <Trans i18nKey="reels" />,
    icon: Reels,
    path: ''
  },
  {
    title: <Trans i18nKey="message" />,
    icon: Message,
    path: ''
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
    icon: Personal,
    path: ''
  }
];
