/**
 * @name Authentication
 * @file authentication.tsx
 * @description use to authorize user & protect music routes
 */
"use client";
// Modules
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
// Utilities
import { USER_KEY } from '../constants/constant';
var AuthContext = createContext({});
var Authentication = function (props) {
    var router = useRouter();
    var pathname = usePathname();
    var _a = useState(null), user = _a[0], setUser = _a[1];
    // Check user authentication on route change
    useEffect(function () {
        var data = JSON.parse(localStorage.getItem(USER_KEY));
        if (!data && pathname.startsWith('/music')) {
            router.push('/auth');
        }
        setUser(data);
    }, [pathname]);
    var logout = function () {
        localStorage.removeItem(USER_KEY);
        router.push('/');
    };
    var context = useMemo(function () { return ({
        logout: logout,
        currentUser: user,
    }); }, [user]);
    return <AuthContext.Provider value={context} {...props}/>;
};
Authentication.displayName = 'Authentication';
export default Authentication;
/**
 *
 * Authentication context hook
 * @returns
 */
export var useAuthentication = function () {
    var context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthentication must be used within a Authentication');
    }
    return context;
};
