import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');



const CarouselComponent = ({ data }: any) => {
    const renderItem = ({ item }: any) => (
        <View style={styles.item}>
            <Image
                source={{ uri: item?.image }}
                style={{ height: 200, width: screenWidth, }}
                resizeMode={'contain'}
            />
        </View>
    );

    return (
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            loop
            layout={'default'}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            autoplayInterval={10}
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
