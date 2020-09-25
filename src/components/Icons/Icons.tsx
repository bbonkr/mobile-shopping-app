import React from 'react';
import {Icon} from '@ui-kitten/components';
import {ImageProps} from 'react-native-svg';

export const CartIcon = (props: Partial<ImageProps>) => (
    <Icon {...props} name="shopping-cart-outline" />
);
export const HomeIcon = (props: Partial<ImageProps>) => (
    <Icon {...props} name="home-outline" />
);
export const UserIcon = (props: Partial<ImageProps>) => (
    <Icon {...props} name="person-outline" />
);

export const EmailIcon = (props: Partial<ImageProps>) => (
    <Icon {...props} name="email-outline" />
);
export const PasswordIcon = (props: Partial<ImageProps>) => (
    <Icon {...props} name="lock-outline" />
);

export const ButtonIcon = (props: Partial<ImageProps>) => (
    <Icon {...props} name="paper-plane-outline" />
);

export const CloseIcon = (props: Partial<ImageProps>) => (
    <Icon {...props} name="close-outline" />
);
