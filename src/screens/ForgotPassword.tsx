import {
    View,
    Text,
    Pressable,
    SafeAreaView,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"
import { useAuthResetpassword } from '../hooks/authData';

const ForgotPassword = ({ navigation }: any) => {

    const { restpasswordMutationHelper } = useAuthResetpassword()
    const [formState, setFormState] = useState("7708084829")

    const onSubmit = useCallback(() => {
        restpasswordMutationHelper?.mutate({ mobile: formState })
    }, [formState])

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
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    onChangeText={(data) => setFormState(data)}
                    keyboardType='number-pad'
                />


                <CustomButton
                    title="Send Recover Phone"
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
