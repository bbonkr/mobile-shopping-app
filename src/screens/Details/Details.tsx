import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
    TopNavigation,
    Icon,
    TopNavigationAction,
    Divider,
    Layout,
    Text,
    IconProps,
} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const BackIcon = (props: IconProps) => <Icon {...props} name="arrow-back" />;

export const Details = () => {
    const navigation = useNavigation();
    const handlePressBackIcon = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={handlePressBackIcon} />
    );

    return (
        <SafeAreaView style={style.safeArea}>
            <TopNavigation
                title="Mobile Mart"
                alignment="center"
                accessoryLeft={BackAction}
            />
            <Divider />
            <Layout style={style.layout}>
                <Text category="h1">DETAILS</Text>
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
