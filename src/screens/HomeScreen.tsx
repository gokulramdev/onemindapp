import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton, CustomSearchInput } from '../components';
import _ from 'lodash';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useGetLocation, useGetCategory } from '../hooks/homeData';
import { useFocusEffect } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function HomeScreen({ navigation }: any) {

    // Local state for the component
    const [location, setLocation] = useState({ name: "", id: "" });
    const [category, setCategory] = useState({ name: "", id: "" });
    const [showLocationList, setShowLocationList] = useState(false);
    const [showCategoryList, setShowCategoryList] = useState(false);


    // Api call hooks
    const { getLocationQueryHelper } = useGetLocation({ isEnabled: true })
    const { getCategoryQueryHelper } = useGetCategory({ isEnabled: true })

    // start search filter function and list
    const filterLocation = useMemo(() => {
        return _.filter(getLocationQueryHelper?.data, (loaction: { name: string }) => {
            return _.includes(_.toLower(loaction?.name), _.toLower(location?.name));
        });
    }, [getLocationQueryHelper?.data, location]);

    const filterCategory = useMemo(() => {
        return _.filter(getCategoryQueryHelper?.data, (_category: { name: string }) => {
            return _.includes(_.toLower(_category?.name), _.toLower(category?.name));
        });
    }, [getCategoryQueryHelper?.data, category]);

    // End start search filter function and list



    // Start List render item for the ui
    const renderCategoryItem = useCallback(({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setCategory(item), setShowCategoryList(false);
                }}>
                <View style={{ padding: 10 }} key={item?._id?.$oid}>
                    <Text style={{ color: "#494949" }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }, []);

    const renderLoactionItem = useCallback(({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setLocation(item), setShowLocationList(false);
                }}>
                <View style={{ padding: 10 }} key={item?._id?.$oid}>
                    <Text style={{ color: "#494949" }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }, []);

    // End List render item for the ui


    useFocusEffect(
        React.useCallback(() => {
            setShowLocationList(false)
            setShowCategoryList(false)
        }, [])
    );

    console.log("filterLocation", filterLocation)
    return (
        <View style={{ marginHorizontal: 12 }}>
            <CustomSearchInput
                placeholder="Select Location"
                onChangeText={(text) => setLocation({ name: text, id: "" })}
                value={location?.name}
                onFocus={() => { setShowLocationList(true), setShowCategoryList(false) }}
                iconPrimary={
                    <Ionicons name="location-sharp" style={styles.iconsPrimary} />
                }
                iconSecondary={

                    <TouchableOpacity
                        onPress={() => setShowLocationList(!setShowLocationList)}
                        style={styles.iconsSecondary}
                    >
                        <Ionicons
                            name={showCategoryList ? 'chevron-up' : 'chevron-down'}
                            style={styles.iconSize}
                        />
                    </TouchableOpacity>
                }
            />
            {showLocationList && (
                <View style={styles.searchresult}>
                    <FlatList
                        data={filterLocation}
                        renderItem={renderLoactionItem}
                        keyExtractor={item => item?.id}
                    />
                </View>
            )}

            <CustomSearchInput
                placeholder="Select category"
                onChangeText={(text) => setCategory({ name: text, id: "" })}
                value={category?.name}
                onFocus={() => { setShowCategoryList(true), setShowLocationList(false) }}
                iconPrimary={<FontAwesome6 name="city" style={styles.iconsPrimary} />}
                iconSecondary={
                    <TouchableOpacity
                        onPress={() => setShowCategoryList(!showCategoryList)}
                        style={styles.iconsSecondary}
                    >
                        <Ionicons
                            name={showCategoryList ? 'chevron-up' : 'chevron-down'}
                            style={styles.iconSize}
                        />
                    </TouchableOpacity>
                }
            />
            {showCategoryList && (
                <View style={styles.searchresult}>
                    <FlatList
                        data={filterCategory}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item?.id}
                        showsVerticalScrollIndicator
                    />
                </View>
            )}
            <CustomButton
                title="Search Now"
                filled
                style={{
                    marginTop: 18,
                    marginBottom: 4,
                }}
                onPress={() => {
                    setShowCategoryList(false)
                    setShowLocationList(false)
                    navigation.navigate("userview", {
                        location: location?.id,
                        category: category?.id,
                    })
                }}
                IconsLeft={<AntDesign name="search1" style={{ fontSize: 20, color: "#fff" }} />}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchresult: {
        borderColor: '#8692A6',
        borderWidth: 1,
        borderRadius: 1,
        color: '#112211',
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 16,
        maxHeight: 200,
    },
    iconsPrimary: {
        position: 'absolute',
        left: 8,
        top: '50%',
        fontSize: 22,
        color: "#000"

    },
    iconsSecondary: {
        position: 'absolute',
        right: 8,
        top: '52%',
    },
    iconSize: {
        fontSize: 22,
        color: "#000"
    }
});
