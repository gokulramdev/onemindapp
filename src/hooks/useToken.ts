import AsyncStorage from '@react-native-async-storage/async-storage';


export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('auth_token');
        return token;
    } catch (error) {
        console.error('Error getting token from AsyncStorage:', error);
        return null;
    }
};
