import { View, Text, SafeAreaView } from 'react-native';
import React, { useCallback, useState } from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomPasswordInput } from "../components"
import { useChangePassword } from '../hooks/authData';
import { resetUserDataAtom } from '../store/resetUserDataAtom';
import { useAtom } from 'jotai';

const ChangePassword = () => {
    const { changePasswordMutationHelper } = useChangePassword()
    const [userData] = useAtom(resetUserDataAtom)

    const [formState, setFormState] = useState<{
        currentPassword: string,
        newpassword: string,
        confirmnewpassword: string
    }>({
        currentPassword: "",
        newpassword: "",
        confirmnewpassword: ""
    })

    const onSubmit = useCallback(() => {
        changePasswordMutationHelper.mutate({
            currentPassword: formState?.currentPassword,
            newPassword: formState?.newpassword,
        })
    }, [userData, formState])

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
                <CustomPasswordInput
                    label="Current password"
                    placeholder="Enter Current password"
                    onChangeText={(data) => setFormState({ ...formState, currentPassword: data })}

                />
                <CustomPasswordInput
                    label="Create new password"
                    placeholder="Enter new password"
                    onChangeText={(data) => setFormState({ ...formState, newpassword: data })}

                />
                <CustomPasswordInput
                    label="Confirm new password"
                    placeholder="confirm new password"
                    onChangeText={(data) => setFormState({ ...formState, confirmnewpassword: data })}
                />

                <CustomButton
                    title="Reset Password"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={onSubmit}
                />
            </View>
        </SafeAreaView>
    );
};

export default ChangePassword;
