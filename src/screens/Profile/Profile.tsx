import React from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Profile = () => {
    const navigation = useNavigation();
    const handlePresssignIn = () => {
        navigation.navigate('login');
    };
    return (
        <Layout style={style.container}>
            <Text category="h1">Profile</Text>
            <Button onPress={handlePresssignIn}>Sign in</Button>
        </Layout>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
