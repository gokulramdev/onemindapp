import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import { CustomButton, CustomTextInput } from "../components"
import Entypo from 'react-native-vector-icons/Entypo';


const BusinessEnquiry = ({ navigation }: any) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>

                <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 22 }}>
                    <View style={{ marginVertical: 22, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/entreovertlogo.png')} style={styles.logo} />
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginVertical: 12,
                                    color: COLORS.black,
                                }}>
                                Do you have a Business idea?
                            </Text>

                            <Text
                                style={{
                                    fontSize: 14,
                                    color: COLORS.black,
                                }}>
                                Add some respective caption here
                            </Text>
                        </View>

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
                        label="Pitch your idea"
                        placeholder="Pitch you idea with minimum of 100 words"
                        numberOfLines={5}
                    />
                    <CustomButton
                        IconsRight={<Entypo name="mail" style={{ fontSize: 20, color: "#fff" }} />}
                        onPress={() => { }} title='Enquire Now' filled />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BusinessEnquiry;


const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80
    }
});