import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { CustomButton } from '../components';
import theme from '../theme';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import AntDesign from "react-native-vector-icons/AntDesign"

export default function Contactus() {
    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <View>
                <Text style={[theme.H1, theme.textCenter]}>Contact us</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <View>
                        <Text style={theme.H1}>Email address</Text>
                    </View>
                    <View>
                        <Text>Contact number</Text>
                        <Text>+91 9842188889</Text>
                        <Text>Social media</Text>
                        <View style={{ flexDirection: "row", margin: 10 }}>
                            <EvilIcons name='sc-facebook' style={styles.headerIcons} />
                            <AntDesign name='google' style={styles.headerIcons} />
                            <AntDesign name='twitter' style={styles.headerIcons} />
                            <EvilIcons name='sc-facebook' style={styles.headerIcons} />
                            <EvilIcons name='sc-facebook' style={styles.headerIcons} />
                        </View>
                    </View>
                </View>
                <View>
                    <Image
                        source={require('../assets/one-mind-market-black-logo-with-text-1.png')}
                    />
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text>Do you have a business idea?</Text>
                    <Text>lorem ipsum dollar sit amet</Text>
                    <View>
                        <View>
                            <Text>Enquire Now</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image source={require('../assets/entreovertlogo-2.png')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contactUsTypo: {
        textAlign: "center",
        color: "#112211",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        fontSize: 16,
    },
    headerIcons: {
        fontSize: 28,
        color: "#fff"
    },
});
