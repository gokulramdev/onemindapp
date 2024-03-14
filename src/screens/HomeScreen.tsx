import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomHeader from './CustomHeader'
import { CustomButton, CustomTextInput } from '../components'

const Location = [
    {
        "_id": {
            "$oid": "658a66a8fb7c4c793c9a8bc7"
        },
        "name": "North vellore"
    },
    {
        "_id": {
            "$oid": "658a66a8fb7c4c793c9a8bc9"
        },
        "name": "South vellore"
    }
]

const Category = [
    {
        "_id": {
            "$oid": "658a66a8fb7c4c793c9a8bc7"
        },
        "name": "Hotel",
        "key": "6598d1ae99ff82590a42",
        "image": "https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin"
    },
    {
        "_id": {
            "$oid": "658a66a8fb7c4c793c9a8bc7"
        },
        "name": "Gym",
        "key": "6598d1ae99ff82590a42",
        "image": "https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin"
    },
    {
        "_id": {
            "$oid": "658a66a8fb7c4c793c9a8bc7"
        },
        "name": "Hospital",
        "key": "6598d1ae99ff82590a42",
        "image": "https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin"
    }
]


export default function HomeScreen() {

    const renderItem = ({ item }: any) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={{ padding: 10 }}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    const handlePress = (item: any) => {
        // Handle press event for each item here
        console.log('Item clicked:', item.title);
    };



    return (

        <View style={{ marginHorizontal: 12 }}>
            <CustomTextInput
                placeholder="Select Location"
            />
            <View style={styles.searchresult}>
                <FlatList
                    data={Location}
                    renderItem={renderItem}
                    keyExtractor={item => item?._id?.$oid}
                />
            </View>
            <CustomTextInput
                placeholder="Select category"
            />
            <View style={styles.searchresult}>
                <FlatList
                    data={Category}
                    renderItem={renderItem}
                    keyExtractor={item => item?._id?.$oid}
                    showsVerticalScrollIndicator
                />
            </View>
            <CustomButton
                title="Search Now"
                filled
                style={{
                    marginTop: 18,
                    marginBottom: 4,
                }}
                onPress={() => console.log("je")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchresult: {
        borderColor: '#8692A6',
        borderWidth: 1,
        borderRadius: 1,
        color: "#112211",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        fontSize: 16,
        maxHeight: 200
    },
});

