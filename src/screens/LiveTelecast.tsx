import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme'
import Entypo from "react-native-vector-icons/Entypo"
import YouTube from "react-native-youtube-iframe";
import WebView from 'react-native-webview';


export default function LiveTelecast() {
    return (
        <View style={theme.marginHorizontal20}>
            <View>
                <Text style={[theme.H1, theme.textCenter]}>Live telecast</Text>
            </View>
            <View style={styles.streamingCard}>
                <View style={[theme.flexOne, { alignContent: "center" }]}>

                    <Text style={[theme.H2]}>England Wins World Cup 2029</Text>
                    <Text>Vellore Mon 26 Feb 7:45:26PM</Text>
                </View>
                <View style={{ justifyContent: "center" }}>

                    <Entypo name="share" style={{ fontSize: 24, color: "#000" }} />
                </View>
            </View>
            <View >
                <YouTube
                    videoId="VMpjeNW48eY"
                    height={200}
                    width={300}
                />
            </View>
            <View style={styles.streamingCard}>
                <View style={[theme.flexOne, { alignContent: "center" }]}>

                    <Text style={[theme.H2]}>England Wins World Cup 2029</Text>
                    <Text>Vellore Mon 26 Feb 7:45:26PM</Text>
                </View>
                <View style={{ justifyContent: "center" }}>

                    <Entypo name="share" style={{ fontSize: 24, color: "#000" }} />
                </View>
            </View>
            <View >
                <YouTube
                    videoId="VMpjeNW48eY"
                    height={200}
                    width={300}
                />
            </View>
            <View style={styles.streamingCard}>
                <View style={[theme.flexOne, { alignContent: "center" }]}>

                    <Text style={[theme.H2]}>England Wins World Cup 2029</Text>
                    <Text>Vellore Mon 26 Feb 7:45:26PM</Text>
                </View>
                <View style={{ justifyContent: "center" }}>

                    <Entypo name="share" style={{ fontSize: 24, color: "#000" }} />
                </View>
            </View>
            <View >
                <YouTube
                    videoId="VMpjeNW48eY"
                    height={200}
                    width={300}
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