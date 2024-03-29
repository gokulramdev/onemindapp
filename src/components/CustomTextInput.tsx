import React, { FC, ReactNode, useState } from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';
import COLORS from '../constants/colors';

interface CustomTextInputProps extends TextInputProps {
    label?: string;
    placeholder?: string;
    children?: ReactNode;
    error?: string | null
}

const CustomTextInput: FC<CustomTextInputProps> = ({
    label,
    placeholder,
    style,
    error,
    ...inputProps
}) => {
    const [focus, setFocus] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                placeholderTextColor={inputProps.placeholderTextColor || '#494949'}
                numberOfLines={2}
                {...inputProps}
            />
            {error && <Text style={styles.error}>{error}</Text>}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '500',
        color: "#696F79",
    },
    input: {
        width: "100%",
        borderColor: COLORS.lightgrey,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22
    },
    inputOnFocus: {
        borderColor: COLORS.primary,
    },
    error: {
        color: "red"
    }
});

export default CustomTextInput;

