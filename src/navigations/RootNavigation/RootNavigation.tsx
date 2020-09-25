import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigation} from '@navigations/MainNavigation';
import {Login} from '@screens/Login';
const {Navigator, Screen} = createStackNavigator();

export const RootNavigation = () => {
    return (
        <Navigator headerMode="none" mode="modal">
            <Screen name="main" component={MainNavigation} />
            <Screen name="login" component={Login} />
        </Navigator>
    );
};
