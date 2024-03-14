import {
    View,
    Text,
    Pressable,
    SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomCheckBox, CustomPasswordInput, CustomTextInput } from "../components"

const Login = ({ navigation }: any) => {
    const [isChecked, setIsChecked] = useState(false);

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
                <CustomTextInput
                    label="Email address"
                    placeholder="Enter email address"
                />
                <CustomPasswordInput
                    label="Password"
                    placeholder="Enter your password"
                />

                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <View style={{ flex: 1 }}>
                        <CustomCheckBox
                            label="Remenber Me"
                            onPress={() => setIsChecked(!isChecked)}
                            status={isChecked ? 'checked' : 'unchecked'}
                        />
                    </View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Pressable onPress={() => navigation.navigate('forgotpassword')}>
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
                    onPress={() => navigation.navigate('Main')}
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
                    <Pressable onPress={() => navigation.navigate('Signup')}>
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
