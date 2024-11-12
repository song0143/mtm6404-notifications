import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationList = ({ notifications, clearNotification }) => (
    <div>
        {notifications.map((notification) => (
            <NotificationItem
                key={notification.id}
                notification={notification}
                clearNotification={clearNotification}
            />
        ))}
    </div>
);

export default NotificationList;
