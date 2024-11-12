import React from 'react';

const NotificationItem = ({ notification, clearNotification }) => (
    <div className="notification-item">
        <h4>{notification.name}</h4>
        <p>{notification.message}</p>
        <button onClick={() => clearNotification(notification.id)}>Clear</button>
    </div>
);

export default NotificationItem;
