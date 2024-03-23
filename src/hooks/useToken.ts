import AsyncStorage from '@react-native-async-storage/async-storage';


export const getToken = async () => {
    try {
        return await AsyncStorage.getItem('auth_token');
    } catch (error) {
        console.error('Error getting token from AsyncStorage:', error);
        return null;
    }
};
