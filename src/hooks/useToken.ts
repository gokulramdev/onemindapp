import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAtom } from 'jotai';
import { tokenAtom } from '../store/tokenAtom';



export const getToken = () => {

    AsyncStorage.getItem('auth_token')
        .then(jsonString => {
            return jsonString
        }).catch(error => {
            console.error('Error retrieving response: ', error);
        });
};



export const setData = async (value: string) => {
    try {
        await AsyncStorage.setItem("auth_token", value)
    } catch (e) {
        // saving error
        console.log('Save error')
    }
}
