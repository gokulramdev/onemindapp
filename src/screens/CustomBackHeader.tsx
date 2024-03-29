// CustomHeader.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Feather from "react-native-vector-icons/Feather"
import theme from '../theme';


const CustomBackHeader = ({ showBackButton }: any) => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <View style={theme.flexOne}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Feather name='arrow-left' style={styles.headerIcons} />
                </TouchableOpacity>
            </View>
            <View >
                <Image source={require('../assets/one-mind-header.png')} style={styles.logo} />
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
        width: 32,
        height: 32
    }
});

export default CustomBackHeader;
