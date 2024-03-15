import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme'

const news_data = [
    {
        "_id": {
            "$oid": "658a66a8fb7c4c793c9a8bc7"
        },
        "title": "Hellow 10/10/2023",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "key": "6598d1ae99ff82590a42",
        "image": "https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin"
    },
    {
        "_id": {
            "$oid": "658a66a8fb7c4c793c9a8bc7"
        },
        "title": "Hellow 10/10/2023",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "key": "6598d1ae99ff82590a42",
        "image": "https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin"
    },
    {
        "_id": {
            "$oid": "658a66a8fb7c4c793c9a8bc7"
        },
        "title": "Hellow 10/10/2023",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "key": "6598d1ae99ff82590a42",
        "image": "https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin"
    }
]
export default function LatestNews() {
    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <View>
                <Text style={[theme.H1, theme.textCenter]}>Latest news</Text>
            </View>
        </View>
        // <View style={styles.container}>
        //     <Image
        //         source={{ uri: "https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin" }} // Replace 'https://example.com/image.jpg' with your image URL
        //         style={styles.image}
        //     />
        // </View>
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
});