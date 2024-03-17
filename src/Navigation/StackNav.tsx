import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login, Signup, ForgotPassword, NewPassword, OtpScreen } from '../screens';
import BottomTabNav from './BottomTabNav';
import DrawerContent from './DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function StackNav() {
    const HomeScreenComponent = () => (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="HomeTabs" component={BottomTabNav} />
        </Drawer.Navigator>
    );

    return (
        <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Signup} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="otpsreen" component={OtpScreen} />
            <Stack.Screen name="newpassword" component={NewPassword} />
            <Stack.Screen name="homemain" component={HomeScreenComponent} />
        </Stack.Navigator>

    )
}