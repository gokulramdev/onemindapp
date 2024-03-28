import {
    View,
    Text,
    Pressable,
    SafeAreaView,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"
import { useAuthOtpVerify, useAuthResendOtp } from '../hooks/authData';
import { useAtom } from 'jotai';
import { resetUserDataAtom } from '../store/resetUserDataAtom';

const OtpScreen = ({ navigation }: any) => {
    const { otpVerifyMutationHelper } = useAuthOtpVerify();
    const { resendOtpMutationHelper } = useAuthResendOtp()
    const [userData] = useAtom(resetUserDataAtom)

    const [formState, setFormState] = useState("")

    const onSubmit = useCallback(() => {
        otpVerifyMutationHelper?.mutate({ code: formState, token: userData?.token })
    }, [formState, userData])

    const resendOtp = useCallback(() => {
        resendOtpMutationHelper.mutate({
            mobile: userData?.user.mobile,
            id: userData?.user.id
        })
    }, [userData])

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
                        Enter OTP
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            color: COLORS.black,
                        }}>
                        Please Enter your OTP that you don’t use on any other site.
                    </Text>
                </View>
                <CustomTextInput
                    label="Enter OTP"
                    placeholder="Enter your OTP"
                    onChangeText={setFormState}
                    keyboardType='number-pad'
                />


                <CustomButton
                    title="Submit OTP"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={onSubmit}
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
                        <Pressable onPress={resendOtp}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: COLORS.primary,
                                    fontWeight: '600',
                                    marginLeft: 4,
                                }}>
                                Resend OTP
                            </Text>
                        </Pressable>
                    </Text>
                    <Pressable onPress={() => navigation.navigate('login')}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: COLORS.primary,
                                fontWeight: '600',
                                marginLeft: 4,
                            }}>
                            OTP
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OtpScreen;
