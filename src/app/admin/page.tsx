"use client";

import React from 'react';
import AdminPortal from './AdminPortal';

const AdminPage = () => {
    if (process.env.NODE_ENV !== 'development') {
        return <div>Access Denied</div>;
    }

    return <AdminPortal />;
};

export default AdminPage;