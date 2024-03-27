import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import theme from '../theme'
import Entypo from "react-native-vector-icons/Entypo"
import YouTube from "react-native-youtube-iframe";
import { useGetLiveTelecast } from '../hooks/homeData';


export default function LiveTelecast() {
    const { width, height } = Dimensions.get('window')
    const { getLiveTelecastQueryHelper } = useGetLiveTelecast({ isEnabled: true });
    return (
        <View style={theme.marginHorizontal20}>
            <View>
                <Text style={[theme.H1, theme.textCenter]}>Live telecast</Text>
            </View>
            <View style={theme.marginTop20}>
                <YouTube
                    videoId="si=I-ipfzD5AFy_do1w"
                    height={height * 0.4}
                />
            </View>
            <View>
                <Text style={[theme.H1, theme.textCenter]}>Previous live telecast</Text>
            </View>
            <View style={theme.marginTop20}>
                <YouTube
                    videoId="si=I-ipfzD5AFy_do1w"
                    height={height * 0.4}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover', // Adjust the resizeMode according to your preference
    },
    streamingCard: {
        flexDirection: "row",
        marginTop: 30
    }
});