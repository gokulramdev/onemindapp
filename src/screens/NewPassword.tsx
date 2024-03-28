import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import COLORS from '../constants/colors';
import { CustomButton, CustomPasswordInput } from "../components"
import { useNewPassword } from '../hooks/authData';
import { resetUserDataAtom } from '../store/resetUserDataAtom';
import { useAtom } from 'jotai';

const schema = yup.object().shape({
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    newPassword: yup.string()
        .required('New password is required')
        .min(6, 'New password must be at least 6 characters')
        .oneOf([yup.ref('password')], 'Passwords must match'),
});

const NewPassword = ({ navigation }: any) => {
    const { newPasswordMutationHelper } = useNewPassword();
    const [userData] = useAtom(resetUserDataAtom);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: { password: string, newPassword: string }) => {
        newPasswordMutationHelper.mutate({
            password: data.password,
            id: userData?.user.id
        });
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
                        New Password
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: COLORS.black,
                        }}>
                        Please create a new password that you don’t use on any other site.
                    </Text>
                </View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomPasswordInput
                            label="Create new password"
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
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomPasswordInput
                            label="Confirm new password"
                            placeholder="Confirm new password"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={errors.newPassword?.message}
                        />
                    )}
                    name="newPassword"
                    defaultValue=""
                />
                <CustomButton
                    title="Reset New Password"
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

export default NewPassword;
