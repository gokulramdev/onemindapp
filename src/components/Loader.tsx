import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';

const { height } = Dimensions.get('window');

const Loader = () => (
    <View style={{ marginTop: (height / 3.5) }}>
        <ActivityIndicator size={50} color="#FF3131" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "flex-start"
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default Loader;