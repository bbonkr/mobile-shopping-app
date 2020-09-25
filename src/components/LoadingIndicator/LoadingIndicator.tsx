import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Spinner} from '@ui-kitten/components';

interface LoadingIndicatorProps {
    style?: StyleProp<ViewStyle>;
    size?: SpinnerSize;
}

type SpinnerSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

export const LoadingIndicator = (props: LoadingIndicatorProps) => (
    <View style={[props.style, style.indicator]}>
        <Spinner size={props.size ?? 'medium'} />
    </View>
);

const style = StyleSheet.create({
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
