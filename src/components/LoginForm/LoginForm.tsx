import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Input, Layout} from '@ui-kitten/components';
import {LoadingIndicator} from '@components/LoadingIndicator';
import {EmailIcon, PasswordIcon, ButtonIcon} from '@components/Icons';

interface LoginFormValues {
    email: string;
    password: string;
    passwordAgain: string;
}

type LoginFormValuesKey = keyof LoginFormValues;

type LoginFormTouched = {
    [key in LoginFormValuesKey]?: boolean;
};

type LoginFormErrors = {
    [key in LoginFormValuesKey]?: string;
};

interface LoginFormStatus {
    isValid: boolean;
    values: LoginFormValues;
    touched?: LoginFormTouched;
    errors?: LoginFormErrors;
}

const validteFormState = (
    formValues: LoginFormValues,
    isSignUp: boolean,
): LoginFormErrors | undefined => {
    let errors: LoginFormErrors | undefined;

    if (!formValues.email) {
        errors = {
            ...(errors ?? {}),
            email: '전자우편주소를 입력하세요',
        };
    }
    var emailReg = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    if (!emailReg.test(formValues.email)) {
        errors = {
            ...(errors ?? {}),
            email: '전자우편주소 형식으로 입력하세요',
        };
    }

    if (!formValues.password) {
        errors = {
            ...(errors ?? {}),
            password: '비밀번호를 입력하세요',
        };
    }

    if (isSignUp && !formValues.passwordAgain) {
        errors = {
            ...(errors ?? {}),
            passwordAgain: '비밀번호를 한번더 입력하세요',
        };
    }
    return errors;
};

interface LoginFormProps {
    onSuccess?: () => void;
    onFail?: () => void;
}

export const LoginForm = ({onSuccess, onFail}: LoginFormProps) => {
    const emailInputRef = useRef<Input>(null);

    const [loading, setLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [loginFormState, setLoginFormState] = useState<LoginFormStatus>({
        isValid: false,
        values: {
            email: '',
            password: '',
            passwordAgain: '',
        },
    });

    const getInputState = (
        name: LoginFormValuesKey,
    ): 'basic' | 'success' | 'danger' => {
        const isTouched = Boolean(loginFormState.touched);

        if (isTouched) {
            const {touched, errors} = loginFormState;

            if (touched && name in touched && touched[name]) {
                if (errors && name in errors && errors[name]) {
                    return 'danger';
                } else {
                    return 'success';
                }
            }
        }

        return 'basic';
    };

    const getInputError = (name: LoginFormValuesKey): string => {
        const isTouched = Boolean(loginFormState.touched);

        if (isTouched) {
            const {touched, errors} = loginFormState;

            if (touched && name in touched && errors && name in errors) {
                return errors[name] ?? '';
            }
        }

        return ' ';
    };

    const handlePressSignUp = () => {
        setIsSignUp((prevState) => !prevState);
        setLoginFormState((_) => ({
            isValid: false,
            values: {
                email: '',
                password: '',
                passwordAgain: '',
            },
        }));

        emailInputRef.current?.focus();
    };

    const handlePressSignIn = () => {
        if (loginFormState.isValid) {
            const apiMock = new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            });
            setLoading(true);
            apiMock
                .then((_) => {
                    if (onSuccess) {
                        onSuccess();
                    }
                })
                .catch((_) => {
                    if (onFail) {
                        onFail();
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const handleChangeTextInput = (name: LoginFormValuesKey) => (
        text: string,
    ) => {
        setLoginFormState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                [name]: text,
            },
            touched: {
                ...prevState.touched,
                [name]: true,
            },
        }));
    };

    useEffect(() => {
        const errors = validteFormState(loginFormState.values, isSignUp);

        setLoginFormState((prevState) => ({
            ...prevState,
            isValid: !errors,
            errors: errors,
        }));
    }, [loginFormState.values, isSignUp]);

    return (
        <Layout style={style.layout}>
            <Input
                ref={emailInputRef}
                textContentType="emailAddress"
                accessoryLeft={(props) => <EmailIcon {...props} />}
                placeholder="Email address"
                value={loginFormState.values.email}
                onChangeText={handleChangeTextInput('email')}
                status={getInputState('email')}
                caption={getInputError('email')}
                keyboardType="email-address"
                returnKeyType="next"
            />
            <Input
                textContentType="password"
                accessoryLeft={(props) => <PasswordIcon {...props} />}
                placeholder={`${isSignUp ? 'New password' : 'Password'}`}
                value={loginFormState.values.password}
                onChangeText={handleChangeTextInput('password')}
                status={getInputState('password')}
                caption={getInputError('password')}
                returnKeyType="next"
                secureTextEntry={true}
            />
            {isSignUp && (
                <Input
                    textContentType="password"
                    accessoryLeft={(props) => <PasswordIcon {...props} />}
                    placeholder="New password again"
                    value={loginFormState.values.passwordAgain}
                    onChangeText={handleChangeTextInput('passwordAgain')}
                    status={getInputState('passwordAgain')}
                    caption={getInputError('passwordAgain')}
                    returnKeyType="next"
                    secureTextEntry={true}
                />
            )}
            <Button
                style={style.loginButton}
                onPress={handlePressSignIn}
                disabled={!loginFormState.isValid}
                accessoryLeft={(props) =>
                    loading ? (
                        <LoadingIndicator {...props} />
                    ) : (
                        <ButtonIcon {...props} />
                    )
                }>
                {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <Button
                appearance="ghost"
                status="info"
                style={style.loginButton}
                onPress={handlePressSignUp}>
                {isSignUp ? 'Cancel' : 'Sign Up'}
            </Button>
        </Layout>
    );
};

const style = StyleSheet.create({
    layout: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginButton: {
        alignSelf: 'stretch',
    },
});
