import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
    Divider,
    Layout,
    Text,
    TopNavigation,
    Button,
} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const handlePressOpenDetail = () => {
        navigation.navigate('details');
    };
    return (
        <SafeAreaView style={style.safeArea}>
            <TopNavigation title="Mobile Mart" alignment="center" />
            <Divider />
            <Layout style={style.layout}>
                <Text category="h1">Home</Text>
                <Button onPress={handlePressOpenDetail}>OPEN DETAIL</Button>
            </Layout>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    safeArea: {flex: 1},
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export {Home};
