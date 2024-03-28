import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import COLORS from '../constants/colors';
import { CustomButton, CustomCheckBox, CustomPasswordInput, CustomTextInput } from "../components"
import { useAuthRegister } from '../hooks/authData';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    mobile: yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number'),
    password: yup.string().required('Password is required'),
    agreeToTerms: yup.boolean().oneOf([true], 'Please agree to terms and conditions'),
});

const Signup = ({ navigation }: any) => {
    const { registerMutationHelper } = useAuthRegister();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        registerMutationHelper?.mutate(data);
    };

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
                            label="Mobile number"
                            placeholder="Enter mobile number"
                            keyboardType='number-pad'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={errors.mobile?.message}
                        />
                    )}
                    name="mobile"
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomPasswordInput
                            label="Password"
                            placeholder="Enter your password"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={errors.password?.message}
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <CustomCheckBox
                            label="I agree to terms and conditions"
                            onPress={onChange}
                            status={value ? 'checked' : 'unchecked'}
                        // error={errors.agreeToTerms?.message}
                        />
                    )}
                    name="agreeToTerms"
                    defaultValue={false}
                />

                <CustomButton
                    title="Register Account"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={handleSubmit(onSubmit)}
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
    );
}

export default Signup;
