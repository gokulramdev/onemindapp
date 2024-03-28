import {
    View,
    Text,
    Pressable,
    SafeAreaView,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomPasswordInput } from "../components"
import { useNewPassword } from '../hooks/authData';
import { resetUserDataAtom } from '../store/resetUserDataAtom';
import { useAtom } from 'jotai';

const NewPassword = ({ navigation }: any) => {
    const { newPasswordMutationHelper } = useNewPassword()
    const [userData] = useAtom(resetUserDataAtom)

    const [formState, setFormState] = useState<{
        password: string,
        newpassword: string
    }>({
        newpassword: "",
        password: "",
    })

    const OnSubmit = useCallback(() => {
        newPasswordMutationHelper.mutate({
            password: formState?.password,
            id: userData?.user.id
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
                    label="Create new password"
                    placeholder="Enter your password"
                    onChangeText={(data) => setFormState({ ...formState, password: data })}

                />
                <CustomPasswordInput
                    label="Confirm new password"
                    placeholder="confirm new password"
                    onChangeText={(data) => setFormState({ ...formState, newpassword: data })}

                />

                <CustomButton
                    title="Reset New Password"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={OnSubmit}
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
