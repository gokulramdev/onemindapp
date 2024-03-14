import {
    View,
    Text,
    Pressable,
    SafeAreaView,
} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"

const ForgotPassword = ({ navigation }: any) => {

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
                        Forgot Password?
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            color: COLORS.black,
                        }}>
                        No worries! Just enter you email and we’ll send you a reset password link
                    </Text>
                </View>
                <CustomTextInput
                    label="Email address"
                    placeholder="Enter email address"
                />


                <CustomButton
                    title="Send Recover Email"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
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
                        Just remember?
                    </Text>
                    <Pressable onPress={() => navigation.navigate('login')}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: '600',
                                marginLeft: 4,
                            }}>
                            Login
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPassword;
