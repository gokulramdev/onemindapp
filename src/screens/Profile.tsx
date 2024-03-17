import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import theme from '../theme'
import { getToken } from '../hooks/useToken';
import { CustomTextInput } from '../components';

export default function Profile({ navigation }: any) {

    console.log("test_token", getToken())

    return (
        <View style={theme.marginTop10}>
            <View style={theme.verticalCenter}>
                <Image
                    source={require('../assets/Ellipse.png')}
                />
            </View>
            <View style={theme.marginHorizontal20}>
                <CustomTextInput
                    label="Full name"
                    placeholder="Enter your full name"
                />
                <CustomTextInput
                    label="Email address"
                    placeholder="Enter email address"
                />
                <CustomTextInput
                    label="Phone number"
                    placeholder="Enter Phone number"
                />
            </View>
            <View>
                <Text style={[theme.H1, theme.marginHorizontal20]}>Password</Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("changepassword") }}
                >
                    <Text style={[theme.marginHorizontal20, theme.marginTop5, theme.textColor]}>change account password</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={[theme.H1, theme.marginHorizontal20, theme.marginTop10, theme.primary]}>Delete account</Text>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <Text style={[theme.marginHorizontal20, theme.marginTop5, theme.textColor]}>Delete account</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <Text style={[theme.H1, theme.marginHorizontal20, theme.marginTop10, theme.primary]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}