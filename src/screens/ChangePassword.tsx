import {
    View,
    Text,
    Pressable,
    SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomCheckBox, CustomPasswordInput, CustomTextInput } from "../components"

const ChangePassword = ({ navigation }: any) => {

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
                    placeholder="Enter current password"
                />
                <CustomPasswordInput
                    label="Create new password"
                    placeholder="Enter your password"
                />
                <CustomPasswordInput
                    label="Confirm new password"
                    placeholder="confirm new password"
                />

                <CustomButton
                    title="Reset New Password"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default ChangePassword;
