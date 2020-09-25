import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LoginForm} from '@components/LoginForm/LoginForm';
import {
    Divider,
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {CloseIcon} from '@components/Icons';
import {StackActions, useNavigation} from '@react-navigation/native';

interface RenderRightActionsProps {
    onClose?: () => void;
}

const RenderRightActions = ({onClose}: RenderRightActionsProps) => {
    const handlePressClose = () => {
        if (onClose) {
            onClose();
        }
    };
    return (
        <TopNavigationAction
            onPress={handlePressClose}
            icon={(props) => <CloseIcon {...props} />}
        />
    );
};

export const Login = () => {
    const navigation = useNavigation();
    const handleSignInSuccess = () => {
        navigation.dispatch(StackActions.pop());
    };

    const handleSignInFail = () => {};

    const handleClose = () => {
        navigation.dispatch(StackActions.pop());
    };

    return (
        <SafeAreaView style={style.safeArea}>
            <TopNavigation
                title="Login"
                alignment="center"
                accessoryRight={() => (
                    <RenderRightActions onClose={handleClose} />
                )}
            />
            <Divider />
            <ScrollView
                contentContainerStyle={style.scrollContainer}
                keyboardDismissMode="interactive">
                <Layout style={style.logoContainer}>
                    <Text category="h1">Logo</Text>
                </Layout>
                <Layout style={style.loginFormContainer}>
                    <LoginForm
                        onSuccess={handleSignInSuccess}
                        onFail={handleSignInFail}
                    />
                </Layout>
                <Layout style={style.ciContainer}>
                    <Text style={style.ciText}>MY COMPANY</Text>
                </Layout>
            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginFormContainer: {
        flex: 1,
        paddingHorizontal: 18,
    },
    ciContainer: {
        paddingVertical: 18,
    },
    ciText: {
        textAlign: 'center',
    },
});
