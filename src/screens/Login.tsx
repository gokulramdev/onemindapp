import React, { useCallback } from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import COLORS from '../constants/colors';
import { CustomButton, CustomCheckBox, CustomPasswordInput, CustomTextInput } from "../components"
import { useAuthLogin } from '../hooks/authData';

const schema = yup.object().shape({
    mobile: yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number'),
    password: yup.string().required('Password is required'),
});

const Login = ({ navigation }: any) => {
    const { loginMutationHelper } = useAuthLogin();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = useCallback((data: any) => {
        loginMutationHelper?.mutate(data);
    }, [loginMutationHelper]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: COLORS.black,
                        }}>
                        Login
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: COLORS.black,
                        }}>
                        For the purpose of industry regulation, your details are required.
                    </Text>
                </View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomTextInput
                            label="Mobile Number"
                            placeholder="Enter mobile number"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={errors.mobile?.message}
                        />
                    )}
                    name="mobile"
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomPasswordInput
                            label="Password"
                            placeholder="Enter your password"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={errors.password?.message}
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <View style={{ flex: 1 }}>
                        <CustomCheckBox
                            label="Remember Me"
                            onPress={() => { }}
                            status={'unchecked'}
                        />
                    </View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Pressable onPress={() => navigation.navigate('forgotPassword')}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: COLORS.primary,
                                    fontWeight: '600',
                                }}>
                                Forgot password
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <CustomButton
                    title="Login"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={handleSubmit(onSubmit)}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20,
                    }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10,
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10,
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}></View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: 22,
                    }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>
                        Don’t have an account ?
                    </Text>
                    <Pressable onPress={() => navigation.navigate('register')}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: '600',
                                marginLeft: 4,
                            }}>
                            Sign Up
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
