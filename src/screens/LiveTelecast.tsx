import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import theme from '../theme'
import YouTube from "react-native-youtube-iframe";
import { useGetLiveTelecast } from '../hooks/homeData';
import { Loader } from '../components';

export default function LiveTelecast() {
    const { height } = Dimensions.get('window');
    const { getLiveTelecastQueryHelper } = useGetLiveTelecast({ isEnabled: true });
    const { live = "", previous = "" } = getLiveTelecastQueryHelper?.data ?? {};

    if (getLiveTelecastQueryHelper?.isLoading) {
        return <Loader />
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }} >
                <Text style={[theme.H1, theme.textCenter, theme.marginBottom20]}>Live telecast</Text>
                <YouTube
                    videoId={live}
                    height={height * 0.9}
                />
            </View>
            <View style={{ flex: 2, marginTop: 80 }} >
                <Text style={[theme.H1, theme.textCenter, theme.marginBottom20]}>Previous live telecast</Text>
                <YouTube
                    videoId={previous}
                    height={height * 0.9}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 20,
        justifyContent: "space-around",
    },
    section: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginVertical: 50,
        marginHorizontal: 20
    },
});
