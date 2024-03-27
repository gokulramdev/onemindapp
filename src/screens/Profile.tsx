import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import theme from '../theme'
import { getToken } from '../hooks/useToken';
import { CustomTextInput, AlertModal } from '../components';
import { useGetProfile } from '../hooks/authData';
import { useAtom } from 'jotai';
import { tokenAtom } from '../store/tokenAtom';

export default function Profile({ navigation }: any) {

    const [modalVisible, setModalVisible] = useState(false);

    const { getProfileQueryHelper } = useGetProfile({ isEnabled: true })
    console.log("getProfileQueryHelper", getProfileQueryHelper?.data)
    const [userToken, setToken] = useAtom(tokenAtom)

    const [formState, setFormState] = useState<{
        mobile: string,
        email: string,
        name: string
    }>({
        mobile: "",
        email: "",
        name: ""
    })
    const logout = useCallback(async () => {
        // await AsyncStorage.clear()
        setToken(undefined)
    }, [])

    useEffect(() => {
        if (getProfileQueryHelper?.data) {
            setFormState({
                mobile: getProfileQueryHelper?.data?.mobile,
                email: getProfileQueryHelper?.data?.email,
                name: getProfileQueryHelper?.data?.name,
            })
        }
    }, [getProfileQueryHelper?.data])

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
                    value={formState?.name}
                    onChangeText={(data) => setFormState({ ...formState, name: data })}

                />
                <CustomTextInput
                    label="Email address"
                    placeholder="Enter email address"
                    value={formState?.email}
                    onChangeText={(data) => setFormState({ ...formState, email: data })}

                />
                <CustomTextInput
                    label="Phone number"
                    placeholder="Enter Phone number"
                    value={formState?.mobile}
                    onChangeText={(data) => setFormState({ ...formState, mobile: data })}
                    keyboardType='number-pad'
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
                    onPress={() => { setModalVisible(true) }}
                >
                    <Text style={[theme.marginHorizontal20, theme.marginTop5, theme.textColor]}>Delete account</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={logout}
                >
                    <Text style={[theme.H1, theme.marginHorizontal20, theme.marginTop10, theme.primary]}>Logout</Text>
                </TouchableOpacity>
            </View>
            {modalVisible && <AlertModal modalVisible={modalVisible} setModalVisible={setModalVisible} />}
        </View>
    )
}