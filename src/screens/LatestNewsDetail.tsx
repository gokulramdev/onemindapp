import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import theme from '../theme'
import { useGetLatestNewDetail } from '../hooks/homeData'
import dayjs from 'dayjs'
import { ScrollView } from 'react-native-gesture-handler'

const { width: screenWidth } = Dimensions.get('window');


export default function LatestNewsDetail({ route }: any) {
    const { newsid } = route.params;

    const { getLatestNewDetailQueryHelper } = useGetLatestNewDetail({ isEnabled: !!newsid, queryParams: route.params })
    const { title = "", location = "", time = "", description, image = "" } = getLatestNewDetailQueryHelper?.data ?? {}

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={[theme.H1, theme.textCenter]}>Latest news</Text>
                </View>
                <View style={[theme.verticalCenter, theme.marginTop20]}>
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text style={[theme.H2, theme.marginTop20, { textTransform: "capitalize" }]} numberOfLines={2} ellipsizeMode='tail'>
                        {title}
                    </Text>
                    <Text style={{ color: "#000", marginTop: 5, textTransform: "capitalize" }}>{location} {dayjs(time).format('ddd, MMM D, YYYY h:mm A')}</Text>
                    <Text style={{ color: "#000", marginTop: 5 }}>{description}
                    </Text>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#8692A6",
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 100
    },
    image: {
        width: screenWidth - 50,
        height: 200,
        resizeMode: 'cover',
    },
    newscard: {
        padding: 10,
        flexDirection: "row",
        marginBottom: 4
    }

});