import React, { useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"
import Entypo from 'react-native-vector-icons/Entypo';
import { useUserEnquiry, useentrevoretEnquiry } from '../hooks/homeData';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DocumentPicker from 'react-native-document-picker'

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    mobile: yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile number').required('Mobile number is required'),
    enquiry: yup.string(),
});

const BusinessEnquiry = ({ navigation }: any) => {
    const { entrevoretEnquiryMutationHelper } = useentrevoretEnquiry();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        entrevoretEnquiryMutationHelper?.mutate({ ...data, file: null });
    };


    const uploadFile = useCallback(async () => {
        try {
            const doc: any = await DocumentPicker.pick({
                // type: [DocumentPicker.types.doc, DocumentPicker.types.pdf]
            })
            let formData = new FormData();
            formData.append('file', doc[0]);
            // formData.append('id', UserDetails?.id)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("doc_up", err)
            } else {
                console.log("doc_up", err)
            }
        }
    }, [])

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{ flex: 1, marginHorizontal: 22, marginBottom: 100 }}>
                    <View style={{ marginVertical: 22, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/entreovertlogo.png')} style={styles.logo} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 12, color: COLORS.black }}>
                                Do you have a Business idea?
                            </Text>
                            <Text style={{ fontSize: 14, color: COLORS.black }}>
                                Add some respective caption here
                            </Text>
                        </View>
                    </View>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <CustomTextInput
                                label="Your full name"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Enter your full name"
                                error={errors.name?.message}
                            />
                        )}
                        name="name"
                        defaultValue=""
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <CustomTextInput
                                label="Email address"
                                placeholder="Enter email address"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={errors.email?.message}
                            />
                        )}
                        name="email"
                        defaultValue=""
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <CustomTextInput
                                label="Contact number"
                                placeholder="Enter contact number"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={errors.mobile?.message}
                                keyboardType='number-pad'
                            />
                        )}
                        name="mobile"
                        defaultValue=""
                    />
                    <Text style={styles.label}>Pitch deck</Text>

                    <TouchableOpacity onPress={uploadFile}>
                        <View style={styles.upload}>
                            <Text>upload your pitch deck .ppt extension only</Text>
                            <FontAwesome name="upload" style={styles.Icons} />
                        </View>
                    </TouchableOpacity>

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <CustomTextInput
                                label="Pitch your idea"
                                placeholder="Pitch your idea with a minimum of 100 words"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={errors.enquiry?.message}
                                numberOfLines={5}
                            />
                        )}
                        name="enquiry"
                        defaultValue=""
                    />
                    <CustomButton
                        IconsRight={<Entypo name="mail" style={{ fontSize: 20, color: "#fff" }} />}
                        onPress={handleSubmit(onSubmit)}
                        title='Enquire Now'
                        filled
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default BusinessEnquiry;

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80
    },
    Icons: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10
    },
    upload: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 12,
        width: "100%",
        borderColor: COLORS.lightgrey,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '500',
        color: "#696F79",
    },
});
