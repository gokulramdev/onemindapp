import React, { useCallback, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAtom } from 'jotai';
import { tokenAtom } from '../store/tokenAtom';


const DrawerContent = ({ navigation }: any) => {
    const navigateTo = useCallback((path: string) => {
        navigation.navigate(path);
    }, []);

    const [userToken, setToken] = useAtom(tokenAtom)

    const logout = useCallback(async () => {
        await AsyncStorage.clear()
        setToken(undefined)
    }, [])

    return (
        <View style={theme.marginTop40}>
            <View style={theme.verticalCenter}>
                <Image
                    source={require('../assets/Ellipse.png')}
                />
            </View>
            <View style={theme.marginTop40}>
                <TouchableOpacity onPress={() => navigateTo('home')}>
                    <View style={styles.profiletab}>
                        <Text style={styles.profileContent}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateTo('newstab')}>
                    <View style={styles.profiletab}>
                        <Text style={styles.profileContent}>News</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateTo('events')}>
                    <View style={styles.profiletab}>
                        <Text style={styles.profileContent}>Live telecast</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateTo('contact')}>
                    <View style={styles.profiletab}>
                        <Text style={styles.profileContent}>Contact us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => userToken ? navigateTo('profile') : null}>
                    <View style={styles.profiletab}>
                        <Text style={styles.profileContent}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("website")}>
                    <View style={styles.profiletab}>
                        <Text style={styles.profileContent}>Visit Website</Text>
                    </View>
                </TouchableOpacity>
                {(userToken) ? <TouchableOpacity onPress={logout}>
                    <View style={styles.profiletab}>
                        <Text style={styles.profileContent}>Logout</Text>
                    </View>
                </TouchableOpacity> :
                    <TouchableOpacity onPress={() => navigateTo('login')}>
                        <View style={styles.profiletab}>
                            <Text style={styles.profileContent}>Login</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

export default DrawerContent;

const styles = StyleSheet.create({
    profiletab: {
        padding: 10,
        borderColor: '#696F791C',
        borderWidth: 1,
        borderRadius: 1,
    },
    profileContent: {
        textAlign: 'center',
        color: '#112211',
        fontSize: 18,
        fontWeight: '600',
    },
});
