import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomButton } from '../components';
import theme from '../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Linking } from 'react-native';

const {
    flex1,
    flexColumn,
    flexRow,
    verticalCenter,
    marginBottom30,
    marginHorizontal20,
    marginVertical22,
    marginTop20,
} = theme;

export default function Contactus({ navigation }: any) {

    const openLink = () => {
        const url = 'https://example.com';
        Linking.openURL(url)
            .catch(err => console.error('An error occurred', err));
    };

    return (
        <View style={[flex1, flexColumn, marginHorizontal20]}>
            <View style={[marginVertical22, verticalCenter]}>
                <Text style={[theme.H1, theme.textCenter]}>Contact us</Text>
            </View>
            <View style={[styles.hairline]} />
            <View style={{ flexDirection: 'row', top: '10%' }}>
                <View style={[flex1, flexColumn]}>
                    <View style={[marginBottom30]}>
                        <Text style={theme.H1}>Email address</Text>
                        <Text style={[theme.H3, theme.marginTop10]}>
                            onemindvellore@gmail.com
                        </Text>
                    </View>
                    <View style={[marginBottom30]}>
                        <Text style={theme.H1}>Contact number</Text>
                        <Text style={[theme.H3, theme.marginTop10]}>+91 9842188889</Text>
                    </View>
                    <View style={[marginBottom30]}>
                        <Text style={theme.H1}>Social media</Text>
                        <View style={[flexRow, marginTop20]}>
                            <TouchableOpacity onPress={openLink} style={theme.marginHorizontal10}>
                                <Text><AntDesign name="facebook-square" style={styles.Icons} /></Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openLink} style={theme.marginHorizontal10}>
                                <Text><AntDesign name="google" style={styles.Icons} /></Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openLink} style={theme.marginHorizontal10}>
                                <Text><AntDesign name="twitter" style={styles.Icons} /></Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openLink} style={theme.marginHorizontal10}>
                                <Text><AntDesign name="instagram" style={styles.Icons} /></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[flexColumn, marginTop20]}>
                    <Image
                        source={require('../assets/one-mind-market-black-logo-with-text-1.png')}
                    />
                </View>
            </View>
            <View style={[styles.hairline, theme.marginTop40]} />
            <View style={[flexRow, marginVertical22]}>
                <View style={[flexColumn, flex1]}>
                    <Text style={theme.H1}>Do you have a business idea?</Text>
                    <Text style={[theme.H3, theme.marginTop10]}>
                        lorem ipsum dollar sit amet
                    </Text>
                    <View>
                        <View>
                            <CustomButton
                                title="Enquire Now"
                                filled
                                style={{
                                    marginTop: 18,
                                    width: '70%',
                                    //   height: '50%',
                                }}
                                onPress={() => { navigation.navigate("businessenquiry") }}
                                IconsRight={<Entypo name="mail" style={{ fontSize: 20, color: "#fff" }} />}

                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contactUsTypo: {
        textAlign: 'center',
        color: '#112211',
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 16,
    },
    Icons: {
        fontSize: 24,
        color: 'black',
        width: '20%',
    },

    hairline: {
        borderWidth: 1,
        borderColor: '#F2F2F2',
    },
});