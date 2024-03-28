import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import theme from '../theme'
import { CustomTextInput, AlertModal, CustomButton } from '../components';
import { useDeletAvatar, useDeleteUser, useGetProfile, useUpdateProfile, useUploadAvatar } from '../hooks/authData';
import { useAtom } from 'jotai';
import { tokenAtom } from '../store/tokenAtom';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CameraModal from '../components/CameraModal';



export default function Profile({ navigation }: any) {

    const [modalVisible, setModalVisible] = useState(false);
    const [isShow, setIsShow] = useState(false)
    const [userToken, setToken] = useAtom(tokenAtom)

    const { getProfileQueryHelper } = useGetProfile({ isEnabled: true })
    const { deleteuserMutationHelper } = useDeleteUser()
    const { updateProfileMutationHelper } = useUpdateProfile()
    const { uploadAvatarMutationHelper } = useUploadAvatar();
    const { deletAvatarMutationHelper } = useDeletAvatar()

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

    const deleteAccount = useCallback(() => {
        deleteuserMutationHelper?.mutate()
    }, [])


    const onSubmit = useCallback(() => {
        updateProfileMutationHelper?.mutate(formState)
    }, [formState])

    const openImagePicker = async () => {
        setIsShow(false)
        const options = {
            title: 'Open Camera',
            storageOptions: {
                path: 'images',
                skipBackup: true,

            },
        };
        const result: any = await launchImageLibrary(options as any);

        let formData = new FormData();
        formData.append('file', result?.assets?.[0]);
        uploadAvatarMutationHelper?.mutate(formData)

    };

    const openCamera = async () => {
        setIsShow(false)

        const options = {
            title: 'Select Image',
            storageOptions: {
                path: 'images',
            },
        };
        const result = await launchCamera(options as any)
        let formData = new FormData();
        formData.append('file', result?.assets?.[0]);
        uploadAvatarMutationHelper?.mutate(formData)

    }

    return (
        <ScrollView>

            <View style={[theme.marginTop10, theme.flex1, theme.marginBottom100]}>
                <View style={theme.verticalCenter}>
                    <Image
                        source={require('../assets/Ellipse.png')}
                    />
                    {/* <CustomButton
                        onPress={() => setIsShow(true)}
                        title='Photo'
                    /> */}
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
                    <CustomButton
                        title="update profile"
                        filled
                        style={{
                            marginBottom: 6,
                        }}
                        onPress={onSubmit}
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
                {modalVisible && <AlertModal modalVisible={modalVisible} setModalVisible={setModalVisible} onSubmit={deleteAccount} />}

                {<CameraModal isShow={isShow} setIsShow={setIsShow} openImagePicker={openImagePicker} openCamera={openCamera} />}
            </View>
        </ScrollView>
    )
}