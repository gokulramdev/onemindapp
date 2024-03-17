import {
    View,
    Text,
    Pressable,
    SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomCheckBox, CustomPasswordInput, CustomTextInput } from "../components"

const BusinessEnquiry = ({ navigation }: any) => {

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
                        Do you have a Business idea?
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            color: COLORS.black,
                        }}>
                        Add some respective caption here
                    </Text>
                </View>
                <CustomTextInput
                    label="Your full name"
                    placeholder="Enter your full name"
                />
                <CustomTextInput
                    label="Email address"
                    placeholder="Enter email address"
                />
                <CustomTextInput
                    label="Contact number"
                    placeholder="Enter contact number"
                    numberOfLines={10}
                />

                <CustomTextInput
                    label="Pitch your idea"
                    placeholder="Pitch you idea with minimum of 100 words"
                />
                <CustomButton onPress={() => { }} title='Enquire Now' filled />
            </View>
        </SafeAreaView>
    );
};

export default BusinessEnquiry;
