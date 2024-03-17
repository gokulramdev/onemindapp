import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton, CustomSearchInput } from '../components';
import _ from 'lodash';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useGetLocation, useGetCategory } from '../hooks/homeData';
import { useNavigation } from '@react-navigation/native';




export default function HomeScreen({ navigation }: any) {

    // Local state for the component
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [showLocationList, setShowLocationList] = useState(false);
    const [showCategoryList, setShowCategoryList] = useState(false);


    // Api call hooks
    const { getLocationQueryHelper } = useGetLocation({ isEnabled: true })
    const { getCategoryQueryHelper } = useGetCategory({ isEnabled: true })


    // start search filter function and list
    const filterLocation = useMemo(() => {
        return _.filter(getLocationQueryHelper?.data, (loaction: { name: string }) => {
            return _.includes(_.toLower(loaction?.name), _.toLower(location));
        });
    }, [getLocationQueryHelper?.data, location]);

    const filterCategory = useMemo(() => {
        return _.filter(getCategoryQueryHelper?.data, (_category: { name: string }) => {
            return _.includes(_.toLower(_category?.name), _.toLower(category));
        });
    }, [getCategoryQueryHelper?.data, category]);

    // End start search filter function and list



    // Start List render item for the ui
    const renderCategoryItem = useCallback(({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setCategory(item.name), setShowCategoryList(false);
                }}>
                <View style={{ padding: 10 }} key={item?._id?.$oid}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }, []);

    const renderLoactionItem = useCallback(({ item }: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setLocation(item.name), setShowLocationList(false);
                }}>
                <View style={{ padding: 10 }} key={item?._id?.$oid}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }, []);

    // End List render item for the ui


    useEffect(() => {
        setShowLocationList(false)
        setShowCategoryList(false)
    }, []);

    return (
        <View style={{ marginHorizontal: 12 }}>
            <CustomSearchInput
                placeholder="Select Location"
                onChangeText={setLocation}
                value={location}
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
                        keyExtractor={item => item?._id?.$oid}
                    />
                </View>
            )}

            <CustomSearchInput
                placeholder="Select category"
                onChangeText={setCategory}
                value={category}
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
                        keyExtractor={item => item?._id?.$oid}
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
                    navigation.navigate({
                        name: "userview"
                    })
                }}
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
