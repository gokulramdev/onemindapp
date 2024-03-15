import { View, Text, Image } from 'react-native'
import React from 'react'
import theme from '../theme'

export default function Profile() {
    return (
        <View style={theme.marginTop40}>
            <View style={theme.verticalCenter}>
                <Image
                    source={require('../assets/Ellipse.png')}
                />
            </View>
        </View>
    )
}