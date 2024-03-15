import React, { FC, ReactNode, useState } from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';


interface CustomTextInputProps extends TextInputProps {
    label?: string;
    placeholder?: string;
    children?: ReactNode;
    iconPrimary: JSX.Element | JSX.Element[];
    iconSecondary: JSX.Element | JSX.Element[];

}

const CustomSearchInput: FC<CustomTextInputProps> = ({
    label,
    placeholder,
    style,
    iconPrimary,
    iconSecondary,
    ...inputProps
}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {iconPrimary}
            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                placeholderTextColor={inputProps.placeholderTextColor || '#494949'}
                {...inputProps}
            />
            {iconSecondary}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        position: "relative"
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '500',
        color: "#696F79",
    },
    input: {
        width: "100%",
        height: 58,
        borderColor: COLORS.lightgrey,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 44
    },
});

export default CustomSearchInput;

