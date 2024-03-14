


import React, { useMemo } from 'react';
import { View, Text, Button } from 'react-native';

const DrawerContent = ({ navigation }: any) => {

    const menuList = useMemo(() => [
        {
            label: 'Home',
            screenName: "profileScreen"
        },
        {
            label: 'News',
            screenName: "profileScreen"
        },
        {
            label: 'Live telecast',
            screenName: "profileScreen"
        },
        {
            label: 'Contact us',
            screenName: "profileScreen"
        },
        {
            label: 'Profile',
            screenName: "profileScreen"
        },
        {
            label: 'Visit Website',
            screenName: "profileScreen"
        },
        {
            label: 'Logout',
            screenName: "profileScreen"
        },
    ], []);

    return (
        <View>
            <Text>Drawer Content</Text>
            <Button onPress={() => navigation.closeDrawer()} title="Close Drawer" />
        </View>
    );
}




export default DrawerContent;

