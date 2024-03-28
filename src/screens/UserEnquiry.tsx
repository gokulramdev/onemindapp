import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"
import Entypo from 'react-native-vector-icons/Entypo';
import { useUserEnquiry } from '../hooks/homeData';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    mobile: yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile number').required('Mobile number is required'),
    enquiry: yup.string().min(100, 'Minimum 100 characters required').required('Enquiry is required'),
});

const UserEnquiry = ({ route }: any) => {
    const { businessId } = route?.params;
    const { userEnquiryMutationHelper } = useUserEnquiry();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        userEnquiryMutationHelper?.mutate({ ...data, businessId });
    };

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 22, marginBottom: 70 }}>
                    <View style={{ marginVertical: 22 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: COLORS.black }}>
                            User Enquiry
                        </Text>
                        <Text style={{ fontSize: 16, color: COLORS.black }}>
                            Add some respective caption here
                        </Text>
                    </View>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <CustomTextInput
                                label="Your full name"
                                placeholder="Enter your full name"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
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
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <CustomTextInput
                                label="Enquire"
                                placeholder="Enquire with minimum of 100 words"
                                numberOfLines={4}
                                editable
                                multiline
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={errors.enquiry?.message}
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

export default UserEnquiry;
