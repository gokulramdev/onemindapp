import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const data = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
];

const CarouselComponent = () => {
    const renderItem = ({ item }: any) => (
        <View style={styles.item}>
            <Text>{item.text}</Text>
        </View>
    );

    return (
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth} // Adjust the item width and space as needed
            loop
            layout={'default'}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        height: 200,
        padding: 20,
        marginRight: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CarouselComponent;
