import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import { CarouselComponent, CustomButton } from '../components'
import theme from '../theme'
import { useGetHomeSearchDetail } from '../hooks/homeData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserView({ route }: any) {
    const { location } = route.params;

    const { getBusinessQueryHelper } = useGetHomeSearchDetail({ isEnabled: !!location, queryParams: route.params })
    const { name = "", images = [], overView = "", address = "" } = getBusinessQueryHelper?.data ?? {}



    const renderItem = ({ item }: any) => (
        <View style={styles.itemContainer}>
            <Image
                source={{
                    uri: item?.image
                }}
                style={styles.image}
            />
        </View>
    );

    return (
        <ScrollView>
            <View style={[theme.marginTop30, theme.marginHorizontal20, { marginBottom: 50 }]}>
                <Text style={[theme.H2, theme.marginBottom10]}>{name}</Text>
                <CarouselComponent data={images} />
                <Text style={[theme.H2, theme.marginTop20]}>Overview</Text>
                <Text style={[theme.H3]}>{overView}</Text>
                <Text style={[theme.H2, theme.marginTop20]}>Address</Text>
                <Text>{address}</Text>
                <Text style={[theme.H2, theme.marginTop20]}>Contact</Text>
                <Text>{address}</Text>
                <CustomButton
                    title="Enquire Now"
                    filled
                    style={{
                        marginTop: 18,
                    }}
                    onPress={() => { }}
                />
                <Text style={[theme.H2, theme.marginTop20]}>Career</Text>
                <CustomButton
                    title="Upload Resume"
                    filled
                    style={{
                        marginTop: 18,
                    }}
                    onPress={() => { }}
                />
                <Text style={[theme.H2, theme.marginTop20]}>Preview images</Text>
                {images && <FlatList
                    data={images}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                    showsHorizontalScrollIndicator
                    horizontal={true}
                />}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 4,
        marginBottom: 60,
        marginTop: 20
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 5,
    },
});