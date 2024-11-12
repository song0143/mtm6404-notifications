import React, { useState } from 'react';
import notificationsData from './notifications'; // 导入通知数据
import NotificationList from './components/NotificationList';
import NotificationHeader from './components/NotificationHeader';
import './App.css';

function App() {
  // 用 useState 钩子来管理通知状态
  const [notifications, setNotifications] = useState(notificationsData);

  // 清除单个通知
  const clearNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  // 清除所有通知
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      {/* 传递通知数量和清除所有通知的函数 */}
      <NotificationHeader count={notifications.length} clearAll={clearAllNotifications} />
      {/* 传递通知数据和清除单个通知的函数 */}
      <NotificationList notifications={notifications} clearNotification={clearNotification} />
    </div>
  );
}

export default App;
