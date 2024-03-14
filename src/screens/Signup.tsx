import { View, Text, Pressable, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors';
import { CustomButton, CustomCheckBox, CustomPasswordInput, CustomTextInput } from "../components"


const Signup = ({ navigation }: any) => {
    const [isChecked, setIsChecked] = useState(true);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Sign Up
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>For the purpose of industry regulation,
                        your details are required.</Text>
                </View>

                <CustomTextInput
                    label="Your full name"
                    placeholder="Enter your full name"
                />
                <CustomTextInput
                    label="Email address"
                    placeholder="Enter email address"
                />
                <CustomPasswordInput
                    label="Password"
                    placeholder="Enter your password"
                />
                <CustomCheckBox
                    label="I agree to terms and conditions"
                    onPress={() => setIsChecked(!isChecked)}
                    status={isChecked ? 'checked' : 'unchecked'}
                />

                <CustomButton
                    title="Register Account"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>

                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup