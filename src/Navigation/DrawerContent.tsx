


import React, { useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DrawerContent = ({ navigation }: any) => {

    const navigateTo = useCallback((path: string) => {
        navigation.navigate(path)
    }, [])

    return (
        <View>
            <TouchableOpacity onPress={() => navigateTo("home")}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("news")}>
                <Text>News</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("events")}>
                <Text>Live telecast</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("contact")}>
                <Text>Contact us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("profile")}>
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}




export default DrawerContent;

