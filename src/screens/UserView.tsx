import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { CarouselComponent, CustomButton } from '../components'
import theme from '../theme'
import { useGetHomeSearchDetail } from '../hooks/homeData';

export default function UserView({ route }: any) {
    const { location } = route.params;

    const { getCategoryQueryHelper } = useGetHomeSearchDetail({ isEnabled: !!location, queryParams: route.params })
    console.log("getCategoryQueryHelper", getCategoryQueryHelper?.data)
    return (
        <ScrollView>
            <View style={[theme.marginTop30, theme.marginHorizontal20, { marginBottom: 50 }]}>
                <Text style={[theme.H2, theme.marginBottom10]}>UserView</Text>
                <CarouselComponent />
                <Text style={[theme.H2, theme.marginTop20]}>Overview</Text>
                <Text style={[theme.H3]}> Hotel fortune park, vellore: See traveller reviews, 2 user photos and best deals for ... enjoy stay here, you will find great bars and restaurants near the hotel.</Text>
                <Text style={[theme.H2, theme.marginTop20]}>Address</Text>
                <Text>No.31/32 A, 7th East Main Road, Katpadi, Gandhi Nagar Vellore, Vellore - 632006 (Near Auxilium College)</Text>
                <Text style={[theme.H2, theme.marginTop20]}>Contact</Text>
                <Text>No.31/32 A, 7th East Main Road, Katpadi, Gandhi Nagar Vellore, Vellore - 632006 (Near Auxilium College)</Text>
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
                <View style={styles.container}>
                    <View style={styles.imageRow}>
                        <Image
                            style={styles.image}
                            source={{ uri: "https://via.placeholder.com/300" }}
                        />
                        <Image
                            style={styles.image}
                            source={{ uri: "https://via.placeholder.com/300" }}
                        />
                        <Image
                            style={styles.image}
                            source={{ uri: "https://via.placeholder.com/300" }}
                        />
                        <Image
                            style={styles.image}
                            source={{ uri: "https://via.placeholder.com/300" }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 20
    },
    imageRow: {
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
    },
});