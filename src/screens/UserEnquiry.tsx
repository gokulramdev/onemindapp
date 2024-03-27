import {
    View,
    Text,
    Pressable,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"
import Entypo from 'react-native-vector-icons/Entypo';


const UserEnquiry = ({ navigation }: any) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 22 }}>
                    <View style={{ marginVertical: 22 }}>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                marginVertical: 12,
                                color: COLORS.black,
                            }}>
                            User Enquiry
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
                    />

                    <CustomTextInput
                        label="Enquire"
                        placeholder="Enquire with minimum of 100 words"
                        numberOfLines={4}
                        editable
                        multiline
                    />
                    <CustomButton
                        IconsRight={<Entypo name="mail" style={{ fontSize: 20, color: "#fff" }} />}
                        onPress={() => { }} title='Enquire Now' filled />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserEnquiry;
