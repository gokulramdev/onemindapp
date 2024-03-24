import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme'

export default function LatestNewsDetail() {
    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <View>
                <Text style={[theme.H1, theme.textCenter]}>Latest news</Text>
            </View>
            <View style={styles.container}>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },
    newscard: {
        padding: 10,
        flexDirection: "row",
        marginBottom: 4
    }

});