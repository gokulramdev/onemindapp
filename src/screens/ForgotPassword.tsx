import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"
import { useAuthResetpassword } from '../hooks/authData';

const schema = yup.object().shape({
    phoneNumber: yup.string().required('Phone number is required').matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number'),
});

const ForgotPassword = ({ navigation }: any) => {
    const { restpasswordMutationHelper } = useAuthResetpassword();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: { phoneNumber: string }) => {
        restpasswordMutationHelper?.mutate({ mobile: data.phoneNumber });
    };

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
                        No worries! Just enter your phone number and we’ll send you a reset password link
                    </Text>
                </View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomTextInput
                            label="Phone Number"
                            placeholder="Enter Phone Number"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            keyboardType='number-pad'
                            error={errors.phoneNumber?.message}
                        />
                    )}
                    name="phoneNumber"
                    defaultValue=""
                />
                <CustomButton
                    title="Send Recover Phone"
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
