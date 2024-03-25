import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'
import COLORS from '../constants/colors'

interface Props {
    color?: string;
    filled?: boolean;
    onPress: () => void;
    style?: any,
    title?: string
    IconsRight?: ReactNode;
    IconsLeft?: ReactNode;
}
const CustomButton = (props: Props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}
            onPress={props.onPress}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {props.IconsLeft && <View style={{ marginRight: 5 }}>{props.IconsLeft}</View>}
                <Text style={{ fontSize: 16, fontWeight: "600", ... { color: textColor, fontFamily: 'Inter-SemiBold' } }}>{props.title}</Text>
                {props.IconsRight && <View style={{ marginLeft: 5 }}>{props.IconsRight}</View>}
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 10,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default CustomButton