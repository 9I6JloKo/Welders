import React from 'react';
import { Navigate } from "react-router-dom";

export default function Protected({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
};