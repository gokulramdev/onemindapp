import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { CustomButton } from '../components';
import theme from '../theme';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../constants/colors';

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
                            <EvilIcons name="sc-facebook" style={styles.headerIcons} />
                            <AntDesign name="google" style={styles.headerIcons} />
                            <AntDesign name="twitter" style={styles.headerIcons} />
                            <EvilIcons name="sc-facebook" style={styles.headerIcons} />
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
    headerIcons: {
        fontSize: 28,
        color: 'black',
        width: '20%',
    },

    hairline: {
        borderWidth: 1,
        borderColor: '#F2F2F2',
    },
});