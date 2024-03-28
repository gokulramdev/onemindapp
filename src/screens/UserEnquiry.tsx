import {
    View,
    Text,
    Pressable,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"
import Entypo from 'react-native-vector-icons/Entypo';
import { useUserEnquiry } from '../hooks/homeData';


const UserEnquiry = ({ route }: any) => {
    const { businessId } = route?.params;

    const { userEnquiryMutationHelper } = useUserEnquiry()

    const [formState, setFormState] = useState<{
        name: string,
        email: string,
        mobile: string,
        enquiry: string,
    }>({
        name: "",
        email: "",
        mobile: "",
        enquiry: "",
    })

    const onSubmit = useCallback(() => {
        userEnquiryMutationHelper?.mutate({ ...formState, businessId })
    }, [formState])

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
                        onChangeText={(data) => setFormState({ ...formState, name: data })}

                    />
                    <CustomTextInput
                        label="Email address"
                        placeholder="Enter email address"
                        onChangeText={(data) => setFormState({ ...formState, email: data })}

                    />
                    <CustomTextInput
                        label="Contact number"
                        placeholder="Enter contact number"
                        onChangeText={(data) => setFormState({ ...formState, mobile: data })}
                        keyboardType='number-pad'

                    />

                    <CustomTextInput
                        label="Enquire"
                        placeholder="Enquire with minimum of 100 words"
                        numberOfLines={4}
                        editable
                        multiline
                        onChangeText={(data) => setFormState({ ...formState, enquiry: data })}

                    />
                    <CustomButton
                        IconsRight={<Entypo name="mail" style={{ fontSize: 20, color: "#fff" }} />}
                        onPress={onSubmit} title='Enquire Now' filled />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserEnquiry;
