// CustomHeader.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import theme from '../theme';
import { useRoute } from '@react-navigation/native';


const CustomHeader = ({ showBackButton }: any) => {
    const navigation = useNavigation()
    const route = useRoute();
    return (
        <View style={styles.header}>
            <View style={theme.flexOne}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <EvilIcons name='navicon' style={styles.headerIcons} />
                </TouchableOpacity>
            </View>
            <View >
                <Image source={require('../assets/one-mind-header.png')} style={styles.logo} resizeMode="contain" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    headerIcons: {
        fontSize: 34,
        color: "#000"
    },
    logo: {
        width: 170,
        height: 40
    }
});

export default CustomHeader;
