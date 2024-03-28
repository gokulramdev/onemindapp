import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { CarouselComponent, CustomButton, Loader } from '../components'
import theme from '../theme'
import { useGetHomeSearchDetail, useUploadResume } from '../hooks/homeData';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker'
import { userDetailsAtom } from '../store/userDetailsAtom';
import { tokenAtom } from '../store/tokenAtom';
import { useAtom } from 'jotai';


export default function UserView({ route }: any) {
    const { location } = route.params;
    const navigation = useNavigation()
    const [userToken] = useAtom(tokenAtom)
    const [UserDetails] = useAtom(userDetailsAtom)

    const { getBusinessQueryHelper } = useGetHomeSearchDetail({ isEnabled: !!location, queryParams: route.params })
    const { id = "", name = "", images = [], overView = "", address = "", category = {}, socialMedia = {}, map = "" } = getBusinessQueryHelper?.data ?? {}

    const { uploadResumeMutationHelper } = useUploadResume()


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

    const openLink = (url: string) => {
        if (url)
            Linking.openURL(url).catch(err => console.error('An error occurred', err));
    };

    const uploadResume = useCallback(async () => {
        if (userToken) {
            try {
                const doc: any = await DocumentPicker.pick({
                    // type: [DocumentPicker.types.doc, DocumentPicker.types.pdf]
                })
                let formData = new FormData();
                formData.append('file', doc[0]);
                formData.append('id', UserDetails?.id)
                uploadResumeMutationHelper?.mutate(formData)
            } catch (err) {
                if (DocumentPicker.isCancel(err)) {
                    console.log("doc_up", err)
                } else {
                    console.log("doc_up", err)
                }
            }
        } else {
            navigation.navigate("login" as never)
        }
    }, [userToken, UserDetails])




    if (getBusinessQueryHelper?.isLoading) {
        return <Loader />
    }


    return (
        <ScrollView>
            <SafeAreaView>
                <View style={[theme.marginTop30, theme.marginHorizontal20, theme.marginBottom50]}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[theme.H1, theme.marginBottom10]}>{name}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={[theme.H2, theme.marginBottom10, styles.bage]}>{getBusinessQueryHelper?.data?.location?.name}</Text>
                            <Text style={[theme.H2, theme.marginBottom10, styles.bage]}>{category?.name}</Text>
                        </View>
                    </View>
                    <CarouselComponent data={images} />
                    <View style={{ marginTop: 20, marginBottom: 4, flexDirection: "row" }}>
                        <Text style={[theme.H1]}>Overview</Text>
                        <Foundation name="info" style={{ marginLeft: 4, fontSize: 20, color: "#000" }} />
                    </View>

                    <Text style={[theme.H3]}>{overView}</Text>
                    <View style={{ marginTop: 20, marginBottom: 8, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                            <Text style={[theme.H1]}>Address</Text>
                            <Entypo name="location" style={{ marginLeft: 6, fontSize: 16, color: "#000" }} />
                        </View>
                        <TouchableOpacity onPress={() => openLink(map)}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Ionicons name="location-outline" style={{ marginLeft: 6, fontSize: 16, color: "#000" }} />
                                <Text style={[theme.H1, theme.primary]}>Get location</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text>{address}</Text>
                    <View style={{ marginTop: 20, marginBottom: 8, flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[theme.H1]}>Contact</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            {socialMedia?.facebook && <TouchableOpacity onPress={() => openLink(socialMedia?.facebook)} style={theme.marginHorizontal5}>
                                <Text><AntDesign name="facebook-square" style={styles.Icons} /></Text>
                            </TouchableOpacity>
                            }
                            {socialMedia?.google && <TouchableOpacity onPress={() => openLink(socialMedia?.google)} style={theme.marginHorizontal5}>
                                <Text><AntDesign name="google" style={styles.Icons} /></Text>
                            </TouchableOpacity>}
                            {socialMedia?.linkedin && <TouchableOpacity onPress={() => openLink(socialMedia?.linkedin)} style={theme.marginHorizontal5}>
                                <Text><AntDesign name="linkedin-square" style={styles.Icons} /></Text>
                            </TouchableOpacity>
                            }
                            {socialMedia?.instagram && <TouchableOpacity onPress={() => openLink("")} style={theme.marginHorizontal5}>
                                <Text><AntDesign name="instagram" style={styles.Icons} /></Text>
                            </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <Text>{address}</Text>
                    <CustomButton
                        title="Enquire Now"
                        filled
                        style={{
                            marginTop: 18,
                        }}
                        onPress={() => {

                            navigation.navigate('userenquiry' as never, { businessId: id } as never)
                        }}
                        IconsRight={<Entypo name="mail" style={{ fontSize: 20, color: "#fff" }} />}
                    />
                    <View style={{ marginTop: 20, flexDirection: "row" }}>
                        <Text style={[theme.H1]}>Career</Text>
                        <FontAwesome5 name="toolbox" style={{ marginLeft: 4, fontSize: 20, color: "#000" }} />
                    </View>
                    <CustomButton
                        title="Upload Resume"
                        filled
                        style={{
                            marginTop: 18,
                        }}
                        onPress={uploadResume}
                        IconsRight={<FontAwesome name="upload" style={{ fontSize: 20, color: "#fff" }} />}
                    />
                    <Text style={[theme.H1, theme.marginTop20]}>Preview images</Text>
                    {images && <FlatList
                        data={images}
                        renderItem={renderItem}
                        keyExtractor={item => item?.id}
                        showsHorizontalScrollIndicator
                        horizontal={true}
                    />}
                </View>
            </SafeAreaView>

        </ScrollView >
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
    headerIcons: {
        fontSize: 28,
        color: 'black',
        width: '20%',
    },
    bage: {
        backgroundColor: "#FF3131",
        color: "#fff",
        padding: 4,
        marginHorizontal: 2,
        fontSize: 12
    },
    Icons: {
        fontSize: 16,
        color: 'black',
        width: '20%',
    },

});