import { Badge, TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { history, Outlet } from 'umi';
import styles from './index.less';

const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: 'video-template',
    title: '视频模板',
    icon: <UnorderedListOutline />,
  },
  {
    key: 'message',
    title: '我的消息',
    icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
    badge: '99+',
  },
  {
    key: 'personalCenter',
    title: '个人中心',
    icon: <UserOutline />,
  },
];

export default function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <TabBar
          onChange={(path) => {
            history.push(`/${path}`);
          }}
        >
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              badge={item.badge}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
