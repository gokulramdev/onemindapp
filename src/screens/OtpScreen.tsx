import React, { useCallback } from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"
import { useAuthOtpVerify, useAuthResendOtp } from '../hooks/authData';
import { useAtom } from 'jotai';
import { resetUserDataAtom } from '../store/resetUserDataAtom';

const schema = yup.object().shape({
    otp: yup.string().required('OTP is required').matches(/^[0-9]{6}$/, 'Please enter a valid 6-digit OTP'),
});

const OtpScreen = () => {
    const { otpVerifyMutationHelper } = useAuthOtpVerify();
    const { resendOtpMutationHelper } = useAuthResendOtp();
    const [userData] = useAtom(resetUserDataAtom);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = useCallback((data: any) => {
        otpVerifyMutationHelper?.mutate({ code: data.otp, token: userData?.token });
    }, [otpVerifyMutationHelper, userData]);

    const resendOtp = useCallback(() => {
        resendOtpMutationHelper.mutate({
            mobile: userData?.user.mobile,
            id: userData?.user.id
        });
    }, [resendOtpMutationHelper, userData]);

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
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomTextInput
                            label="Enter OTP"
                            placeholder="Enter your OTP"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            keyboardType='number-pad'
                            error={errors.otp?.message}
                        />
                    )}
                    name="otp"
                    defaultValue=""
                />
                <CustomButton
                    title="Submit OTP"
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
                        justifyContent: 'center',
                    }}></View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: 22,
                    }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#000",
                            fontWeight: '600',
                            marginLeft: 4,
                        }}>
                            Resend
                        </Text>
                        <Pressable onPress={resendOtp}>
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
            </View>
        </SafeAreaView>
    );
};

export default OtpScreen;
