import React from 'react';

import {
    BottomTabBarOptions,
    BottomTabBarProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeNavigation} from '@navigations/HomeNavigation';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {Profile} from '@screens/Profile';
import {HomeIcon, UserIcon} from '@components/Icons';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({
    navigation,
    state,
}: BottomTabBarProps<BottomTabBarOptions>) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab
            title="Shop"
            icon={(props) => <HomeIcon {...props} />}
        />
        <BottomNavigationTab
            title="My"
            icon={(props) => <UserIcon {...props} />}
        />
    </BottomNavigation>
);

export const MainNavigation = () => {
    return (
        <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
            <Screen name="main" component={HomeNavigation} />
            <Screen name="profile" component={Profile} />
        </Navigator>
    );
};
