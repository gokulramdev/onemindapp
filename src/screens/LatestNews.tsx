import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import theme from '../theme'
import { useGetNewsList } from '../hooks/homeData'
import _ from 'lodash'
import dayjs from 'dayjs'

export default function LatestNews({ navigation }: any) {

    const { getLatestNewsQueryHelper } = useGetNewsList({ isEnabled: true })

    // Start List render item for the ui
    const renderCategoryItem = useCallback(({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={() => { navigation.navigate("latestnewsdetail") }}>
                <View style={styles.newscard} key={item?._id?.$oid}>
                    <View style={{ flex: 1, marginRight: 12 }}>
                        <Text style={[theme.H2, { textTransform: "capitalize" }]} numberOfLines={2} ellipsizeMode='tail'>
                            {item?.title}
                        </Text>
                        <Text style={{ color: "#000", textTransform: "capitalize" }}>{item?.location} {dayjs(item?.time).format('ddd, MMM D, YYYY h:mm A')}</Text>
                    </View>
                    <View>
                        <Image
                            source={{ uri: item?.image }}
                            style={styles.image}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }, []);

    if (getLatestNewsQueryHelper?.isLoading) {
        return <Text>Loding</Text>
    }
    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <View>
                <Text style={[theme.H1, theme.textCenter]}>Latest news</Text>
            </View>
            <View style={styles.container}>
                {!_.isEmpty(getLatestNewsQueryHelper?.data?.data) && <FlatList
                    data={getLatestNewsQueryHelper?.data?.data}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item?.id}
                    showsVerticalScrollIndicator
                />}

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