import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import theme from '../theme'
import { useGetLatestNewDetail } from '../hooks/homeData'
import dayjs from 'dayjs'
import { ScrollView } from 'react-native-gesture-handler'
import { Loader } from '../components'

const { width: screenWidth } = Dimensions.get('window');


export default function LatestNewsDetail({ route }: any) {
    const { newsid } = route.params;

    const { getLatestNewDetailQueryHelper } = useGetLatestNewDetail({ isEnabled: !!newsid, queryParams: route.params })
    const { title = "", location = "", time = "", description, image = "" } = getLatestNewDetailQueryHelper?.data ?? {}

    if (getLatestNewDetailQueryHelper?.isLoading) {
        return <Loader />
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={[theme.H1, theme.textCenter]}>Latest news</Text>
                </View>
                <View style={styles.cardcontainer} >

                    <View style={[theme.verticalCenter, theme.marginTop20]}>
                        <Image
                            source={{ uri: image || "" }}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Text style={[theme.H1, theme.marginTop20, { textTransform: "capitalize" }]} numberOfLines={2} ellipsizeMode='tail'>
                            {title}
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: "600", color: "#112211", marginTop: 5, textTransform: "capitalize" }}>{location} {dayjs(time).format('ddd, MMM D, YYYY h:mm A')}</Text>
                        <Text style={{ color: "#112211", marginTop: 5 }}>{description}
                        </Text>
                    </View>
                </View>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 100
    },
    cardcontainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#8692A6",
        marginHorizontal: 14,
        padding: 10,
        flex: 1,
        height: "100%",
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