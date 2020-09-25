import React from 'react';
import {
    createStackNavigator,
    TransitionSpecs,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import {Home} from '@screens/Home';
import {Details} from '@screens/Details';

const {Navigator, Screen} = createStackNavigator();

export const HomeNavigation = () => (
    <Navigator
        headerMode="none"
        screenOptions={{
            transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Screen name="home" component={Home} />
        <Screen name="details" component={Details} />
    </Navigator>
);
