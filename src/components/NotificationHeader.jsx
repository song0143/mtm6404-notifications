import React from 'react';

const NotificationHeader = ({ count, clearAll }) => (
    <header>
        <h1>Notifications ({count})</h1>
        <button onClick={clearAll}>Clear All</button>
    </header>
);

export default NotificationHeader;

