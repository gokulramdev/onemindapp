import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import theme from '../theme';

interface MyCarouselProps { }

const {
    flex1,
    flexColumn,
    flexRow,
    verticalCenter,
    marginBottom30,
    marginHorizontal20,
    marginVertical22,
    marginTop20,
} = theme;


const UserView: React.FC<MyCarouselProps> = () => {
    const data = [
        { id: 1, imageUrl: 'https://via.placeholder.com/300' },
        { id: 2, imageUrl: 'https://via.placeholder.com/300' },
        { id: 3, imageUrl: 'https://via.placeholder.com/300' },
        { id: 4, imageUrl: 'https://via.placeholder.com/300' },
        { id: 5, imageUrl: 'https://via.placeholder.com/300' },
    ];

    const renderItem = ({ item }: { item: { id: number; imageUrl: string } }) => (
        <View style={styles.item}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.id}</Text>
        </View>
    );

    return (
        <View style={[flex1, flexColumn, marginHorizontal20]}>
            {/* <Carousel
                layout={"default"}
                ref={carouselRef}
                data={adToShow}
                sliderWidth={SCREEN.WIDTH}
                itemWidth={SCREEN.WIDTH - 32}
                sliderHeight={100}
                renderItem={_renderItem}
                onSnapToItem={(index) => setActiveIndex(index)}
           
            /> */}

            <Carousel
                layout={"default"}

                data={data}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width - 32}
                autoplay={true}
                autoplayInterval={100}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
});

export default UserView;
